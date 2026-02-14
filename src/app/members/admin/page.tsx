import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getDb } from "@/utils/db";
import { deleteProfile, approveJoinRequest, rejectJoinRequest } from "./actions";
import styles from "./admin.module.css";

export const dynamic = 'force-dynamic';

interface JoinRequest {
    id: string;
    clerk_user_id: string;
    email: string | null;
    full_name: string | null;
    class_year: string | null;
    school: string | null;
    created_at: string;
}

interface Profile {
    id: string;
    clerk_user_id: string;
    full_name: string | null;
    class_year: string | null;
    school: string | null;
    industry: string | null;
    company: string | null;
}

export default async function AdminPage(props: {
    searchParams: Promise<{ search?: string }>;
}) {
    const searchParams = await props.searchParams;
    const { userId } = await auth();

    if (!userId) {
        redirect("/sign-in");
    }

    // Check admin role via Clerk publicMetadata
    const user = await currentUser();
    const role = (user?.publicMetadata as { role?: string })?.role;
    if (role !== 'admin') {
        redirect("/members/directory");
    }

    if (!process.env.DATABASE_URL) {
        return <div>Database connection is not configured.</div>;
    }

    const sql = getDb();

    let pendingRequests: JoinRequest[] = [];
    try {
        pendingRequests = await sql`
            SELECT id, clerk_user_id, email, full_name, class_year, school, created_at
            FROM join_requests
            WHERE status = 'pending'
            ORDER BY created_at ASC
        ` as JoinRequest[];
    } catch (error) {
        console.error("Error fetching join requests:", error);
    }

    let profiles: Profile[];
    try {
        if (searchParams.search) {
            const search = `%${searchParams.search}%`;
            profiles = await sql`
                SELECT id, clerk_user_id, full_name, class_year, school, industry, company
                FROM profiles
                WHERE full_name ILIKE ${search}
                ORDER BY full_name ASC
            ` as Profile[];
        } else {
            profiles = await sql`
                SELECT id, clerk_user_id, full_name, class_year, school, industry, company
                FROM profiles
                ORDER BY full_name ASC
            ` as Profile[];
        }
    } catch (error) {
        console.error("Error fetching profiles:", error);
        return <div>Error loading members</div>;
    }

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <div className={styles.container}>
                    <h1>Manage Members</h1>
                    <p>{profiles.length} member{profiles.length !== 1 ? "s" : ""} in directory</p>

                    <form className={styles.searchBar}>
                        <input
                            name="search"
                            placeholder="Search by name..."
                            defaultValue={searchParams.search}
                            className={styles.searchInput}
                        />
                        <button type="submit" className={styles.searchBtn}>Search</button>
                        {searchParams.search && (
                            <a href="/members/admin" className={styles.clearBtn}>Clear</a>
                        )}
                    </form>
                </div>
            </div>

            {pendingRequests.length > 0 && (
                <div className={styles.container}>
                    <div className={styles.pendingSection}>
                        <h2 className={styles.pendingTitle}>
                            Pending Requests ({pendingRequests.length})
                        </h2>
                        <div className={styles.tableWrapper}>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>School</th>
                                        <th>Year</th>
                                        <th>Date</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pendingRequests.map((req) => (
                                        <tr key={req.id}>
                                            <td>{req.full_name || "—"}</td>
                                            <td>{req.email || "—"}</td>
                                            <td>{req.school || "—"}</td>
                                            <td>{req.class_year || "—"}</td>
                                            <td>{new Date(req.created_at).toLocaleDateString()}</td>
                                            <td>
                                                <div className={styles.actions}>
                                                    <form action={approveJoinRequest}>
                                                        <input type="hidden" name="request_id" value={req.id} />
                                                        <button type="submit" className={styles.approveBtn}>
                                                            Approve
                                                        </button>
                                                    </form>
                                                    <form action={rejectJoinRequest}>
                                                        <input type="hidden" name="request_id" value={req.id} />
                                                        <button type="submit" className={styles.deleteBtn}>
                                                            Reject
                                                        </button>
                                                    </form>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            <div className={styles.container}>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>School</th>
                                <th>Year</th>
                                <th>Company</th>
                                <th>Industry</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {profiles.map((profile) => (
                                <tr key={profile.id}>
                                    <td>{profile.full_name || "Unnamed"}</td>
                                    <td>{profile.school || "—"}</td>
                                    <td>{profile.class_year || "—"}</td>
                                    <td>{profile.company || "—"}</td>
                                    <td>{profile.industry || "—"}</td>
                                    <td>
                                        <div className={styles.actions}>
                                            <Link
                                                href={`/members/admin/edit/${profile.id}`}
                                                className={styles.editBtn}
                                            >
                                                Edit
                                            </Link>
                                            <form action={deleteProfile}>
                                                <input type="hidden" name="id" value={profile.id} />
                                                <button type="submit" className={styles.deleteBtn}>
                                                    Delete
                                                </button>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {profiles.length === 0 && (
                        <div className={styles.empty}>
                            No members found.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
