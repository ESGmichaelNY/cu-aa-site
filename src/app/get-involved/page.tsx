import Link from 'next/link';
import styles from './get-involved.module.css';

export const metadata = {
    title: "Get Involved | CU-AA",
    description: "Apply to join the Columbia University Africa Alumni community.",
};

export default function GetInvolvedPage() {
    return (
        <main>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1>Get Involved</h1>
                    <p className={styles.heroSubtitle}>
                        Join a community of Columbia alumni dedicated to positively impacting Africa.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.formIntro}>
                        <h2>Apply to Join CU-AA</h2>
                        <p>
                            Whether you&apos;re a Columbia alumnus from Africa, part of the diaspora, working in Africa,
                            or an about-to-graduate student interested in the continent, we welcome you.
                        </p>
                    </div>

                    <form className={styles.form} action="mailto:info@cu-aa.org" method="POST" encType="text/plain">
                        <div className={styles.fieldGroup}>
                            <div className={styles.field}>
                                <label htmlFor="fullName">Full Name *</label>
                                <input type="text" id="fullName" name="fullName" required />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="email">Email Address *</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                        </div>

                        <div className={styles.fieldGroup}>
                            <div className={styles.field}>
                                <label htmlFor="school">Columbia School/College *</label>
                                <input type="text" id="school" name="school" placeholder="e.g., SPS, GSAS, SIPA, Engineering" required />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="gradYear">Graduation Year *</label>
                                <input type="text" id="gradYear" name="gradYear" placeholder="e.g., 2020" required />
                            </div>
                        </div>

                        <div className={styles.fieldGroup}>
                            <div className={styles.field}>
                                <label htmlFor="country">Country of Origin / Connection to Africa *</label>
                                <input type="text" id="country" name="country" required />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="currentLocation">Current Location</label>
                                <input type="text" id="currentLocation" name="currentLocation" placeholder="City, Country" />
                            </div>
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="profession">Current Profession / Role</label>
                            <input type="text" id="profession" name="profession" />
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="interests">Areas of Interest</label>
                            <select id="interests" name="interests" multiple>
                                <option value="mentorship">Mentorship &amp; Coaching</option>
                                <option value="leadership">Leadership Development</option>
                                <option value="community">Community Services</option>
                                <option value="events">Events &amp; Workshops</option>
                                <option value="forums">Discussion Forums</option>
                            </select>
                            <small className={styles.hint}>Hold Ctrl/Cmd to select multiple</small>
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="message">Why do you want to join CU-AA?</label>
                            <textarea id="message" name="message" rows={4} placeholder="Tell us about yourself and what you hope to contribute or gain from the community..." />
                        </div>

                        <div className={styles.actions}>
                            <button type="submit" className={styles.submitBtn}>Submit Application</button>
                        </div>
                    </form>

                    <div className={styles.altContact}>
                        <p>
                            Prefer to reach out directly? Email us at{' '}
                            <a href="mailto:info@cu-aa.org">info@cu-aa.org</a> or{' '}
                            <Link href="/contact">visit our contact page</Link>.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
