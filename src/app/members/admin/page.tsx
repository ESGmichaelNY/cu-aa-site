import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getDb } from "@/utils/db";
import { deleteProfile } from "./actions";
import styles from "./admin.module.css";

export const dynamic = 'force-dynamic';

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

    const adminId = process.env.ADMIN_USER_ID || process.env.NEXT_PUBLIC_ADMIN_USER_ID;
    if (!userId || userId !== adminId) {
        redirect("/members/directory");
    }

    if (!process.env.DATABASE_URL) {
        return <div>Database connection is not configured.</div>;
    }

    const sql = getDb();

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
