import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { addProfile } from "../actions";
import styles from "../admin.module.css";

export const dynamic = 'force-dynamic';

export default async function AddMemberPage() {
    const { userId } = await auth();

    if (!userId) {
        redirect("/sign-in");
    }

    const user = await currentUser();
    const role = (user?.publicMetadata as { role?: string })?.role;
    if (role !== 'admin') {
        redirect("/members/directory");
    }

    return (
        <div className={styles.page} style={{ padding: "2rem 1rem" }}>
            <div className={styles.container} style={{ maxWidth: 800 }}>
                <Link href="/members/admin" className={styles.backLink}>
                    &larr; Back to Members
                </Link>
                <h1 style={{ marginBottom: "0.5rem" }}>Add Member</h1>
                <p style={{ color: "var(--text-light)", marginBottom: "2rem" }}>
                    Manually add a new member to the directory.
                </p>

                <form action={addProfile} className={styles.form}>
                    <div className={styles.section}>
                        <h2>Basic Info</h2>
                        <div className={styles.grid}>
                            <div className={styles.field}>
                                <label htmlFor="full_name">Full Name</label>
                                <input
                                    id="full_name"
                                    name="full_name"
                                    required
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
                                    <option value="VP&amp;S">Vagelos College of Physicians and Surgeons</option>
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
                        <Link href="/members/admin" className={styles.cancelBtn}>
                            Cancel
                        </Link>
                        <button type="submit" className={styles.saveBtn}>
                            Add Member
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
