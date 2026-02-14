import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
    title: "Columbia University Africa Alumni | CU-AA",
    description: "Columbia University African Alumni — united by education, driven by Africa's potential. Join our community of alumni building Africa's future.",
};

export default function Home() {
    return (
        <div className={styles.page}>
            <main>
                <section className={styles.hero}>
                    <div className={styles.africaBg} aria-hidden="true" />
                    <div className={styles.container}>
                        <div className={styles.heroContent}>
                            <h1>Columbia University African Alumni (CU-AA)</h1>
                            <p className={styles.heroSubtitle}>
                                &mdash;united by education, driven by Africa&apos;s potential&mdash;
                            </p>
                            <div className={styles.heroButtons}>
                                <Link href="/join" className={styles.btnPrimary}>
                                    Join the Community
                                </Link>
                                <Link href="/about" className={styles.btnSecondary}>
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>Get Involved</h2>
                        <p className={styles.sectionIntro}>
                            Explore our programs, meet alumni, and dive into our story.
                        </p>
                        <div className={styles.grid}>
                            <Link href="/programs" className={styles.card}>
                                <span className={styles.cardIcon}>🎓</span>
                                <h3>Programs</h3>
                                <p>Mentorship, leadership development, community services, and events that build Africa&apos;s future.</p>
                                <span className={styles.cardCta}>Explore programs →</span>
                            </Link>
                            <Link href="/members/directory" className={styles.card}>
                                <span className={styles.cardIcon}>👥</span>
                                <h3>Members Directory</h3>
                                <p>Find and connect with fellow Columbia alumni across Africa and the diaspora.</p>
                                <span className={styles.cardCta}>View directory →</span>
                            </Link>
                            <Link href="/about" className={styles.card}>
                                <span className={styles.cardIcon}>📖</span>
                                <h3>About CU-AA</h3>
                                <p>Our mission, story, and how we&apos;re driving impact together.</p>
                                <span className={styles.cardCta}>Read our story →</span>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
