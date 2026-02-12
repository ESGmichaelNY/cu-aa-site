import Link from 'next/link';
import styles from './donate.module.css';

export const metadata = {
    title: "Donate | CU-AA",
    description: "Support Columbia University Africa Alumni in our mission to positively impact Africa.",
};

export default function DonatePage() {
    return (
        <main>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1>Support CU-AA</h1>
                    <p className={styles.heroSubtitle}>
                        Your contribution helps us build programs, connect alumni, and drive impact across Africa.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.impactGrid}>
                        <div className={styles.impactCard}>
                            <span className={styles.impactIcon}>🎓</span>
                            <h3>Programs</h3>
                            <p>Fund mentorship, leadership development, and community service initiatives.</p>
                        </div>
                        <div className={styles.impactCard}>
                            <span className={styles.impactIcon}>🌍</span>
                            <h3>Community</h3>
                            <p>Support events, workshops, and forums that bring alumni together.</p>
                        </div>
                        <div className={styles.impactCard}>
                            <span className={styles.impactIcon}>🚀</span>
                            <h3>Growth</h3>
                            <p>Help us expand our reach and impact across the continent.</p>
                        </div>
                    </div>

                    <div className={styles.donateBlock}>
                        <h2>Make a Contribution</h2>
                        <p>
                            CU-AA is building the infrastructure to accept donations. In the meantime, please reach out
                            to us directly to discuss how you can support our mission.
                        </p>
                        <div className={styles.actions}>
                            <a href="mailto:info@cu-aa.org" className={styles.primaryBtn}>
                                Contact Us to Donate
                            </a>
                            <Link href="/about" className={styles.secondaryBtn}>
                                Learn About Our Mission
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
