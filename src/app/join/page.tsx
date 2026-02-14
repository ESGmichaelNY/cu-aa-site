import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getDb } from "@/utils/db";
import { submitJoinRequest } from "./actions";
import styles from "./join.module.css";

export const dynamic = 'force-dynamic';

export default async function JoinPage() {
    const { userId } = await auth();

    if (!userId) {
        redirect("/sign-in");
    }

    const user = await currentUser();
    const sql = getDb();

    // If already a member, go to directory
    const existing = await sql`SELECT id FROM profiles WHERE clerk_user_id = ${userId} LIMIT 1`;
    if (existing.length > 0) {
        redirect("/members/directory");
    }

    // Check for existing join request
    const requests = await sql`SELECT status FROM join_requests WHERE clerk_user_id = ${userId} LIMIT 1`;
    const request = requests[0];

    if (request) {
        return (
            <div className={styles.page}>
                <div className={styles.container}>
                    <h1>Join CU-AA</h1>
                    <div className={styles.statusCard}>
                        {request.status === 'pending' && (
                            <>
                                <h2>Request Pending</h2>
                                <p>
                                    Your request to join the CU-AA community has been submitted
                                    and is awaiting review. We&apos;ll notify you once it&apos;s been processed.
                                </p>
                            </>
                        )}
                        {request.status === 'rejected' && (
                            <>
                                <h2>Request Not Approved</h2>
                                <p>
                                    Unfortunately, your request was not approved at this time.
                                    Please contact an administrator if you believe this was in error.
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    const defaultName = user?.fullName || "";

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <h1>Join CU-AA</h1>
                <p className={styles.subtitle}>
                    Fill out the form below to request membership in the Columbia University Africa Alumni community.
                </p>

                <form action={submitJoinRequest} className={styles.form}>
                    <div className={styles.section}>
                        <h2>Basic Info</h2>
                        <div className={styles.grid}>
                            <div className={styles.field}>
                                <label htmlFor="full_name">Full Name</label>
                                <input
                                    id="full_name"
                                    name="full_name"
                                    required
                                    defaultValue={defaultName}
                                    placeholder="e.g. Jane Doe"
                                />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="linkedin_url">LinkedIn URL</label>
                                <input
                                    id="linkedin_url"
                                    name="linkedin_url"
                                    placeholder="https://linkedin.com/in/..."
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2>Columbia Affiliation</h2>
                        <div className={styles.grid}>
                            <div className={styles.field}>
                                <label htmlFor="school">School</label>
                                <select id="school" name="school">
                                    <option value="">Select a school...</option>
                                    <option value="CC">Columbia College</option>
                                    <option value="SEAS">Fu Foundation School of Engineering (SEAS)</option>
                                    <option value="GS">School of General Studies</option>
                                    <option value="GSAS">Graduate School of Arts and Sciences (GSAS)</option>
                                    <option value="CBS">Columbia Business School</option>
                                    <option value="LAW">Columbia Law School</option>
                                    <option value="SIPA">School of International and Public Affairs (SIPA)</option>
                                    <option value="TC">Teachers College</option>
                                    <option value="JRN">Graduate School of Journalism</option>
                                    <option value="PH">Mailman School of Public Health</option>
                                    <option value="SOA">School of the Arts</option>
                                    <option value="GSAPP">Graduate School of Architecture, Planning and Preservation</option>
                                    <option value="VP&S">Vagelos College of Physicians and Surgeons</option>
                                    <option value="CDM">College of Dental Medicine</option>
                                    <option value="NURSING">School of Nursing</option>
                                    <option value="SSW">School of Social Work</option>
                                    <option value="SPS">School of Professional Studies</option>
                                    <option value="CLIMATE">Columbia Climate School</option>
                                    <option value="BARNARD">Barnard College</option>
                                    <option value="UTS">Union Theological Seminary</option>
                                    <option value="JTS">Jewish Theological Seminary</option>
                                </select>
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="class_year">Class Year</label>
                                <input
                                    id="class_year"
                                    name="class_year"
                                    placeholder="e.g. 2015"
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2>Professional</h2>
                        <div className={styles.grid}>
                            <div className={styles.field}>
                                <label htmlFor="industry">Industry</label>
                                <input
                                    id="industry"
                                    name="industry"
                                    placeholder="e.g. Finance, Tech, Healthcare"
                                />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="company">Current Company / Org</label>
                                <input
                                    id="company"
                                    name="company"
                                    placeholder="e.g. Google"
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2>Bio</h2>
                        <div className={styles.field}>
                            <label htmlFor="bio">Short Bio</label>
                            <textarea
                                id="bio"
                                name="bio"
                                rows={4}
                                placeholder="Tell the community about your work and interests..."
                            />
                        </div>
                    </div>

                    <div className={styles.submitArea}>
                        <button type="submit" className={styles.submitBtn}>
                            Submit Request
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
