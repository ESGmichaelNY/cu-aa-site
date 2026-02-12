import Link from 'next/link';
import styles from './about.module.css';

export const metadata = {
    title: "About Us | CU-AA",
    description: "Columbia University Africa Alumni — fostering meaningful dialogue, generating solutions, building connections, and empowering future leaders across Africa.",
};

export default function AboutPage() {
    return (
        <main>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1>About Columbia University African Alumni</h1>
                    <p className={styles.heroSubtitle}>united by education, driven by Africa&apos;s potential</p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.contentBlock}>
                        <h2>Our Story</h2>
                        <p>
                            Columbia University Africa Alumni (CU-AA) was formed in 2023 by a group of passionate Columbia
                            graduates who recognized the need for a platform where African alumni could come together to
                            discuss the pressing issues facing our continent. What started as informal conversations among
                            friends has grown into a vibrant community of alumni from different African countries across
                            the continent.
                        </p>
                        <p>
                            We believe that Columbia&apos;s diverse African alumni network represents an untapped resource
                            for addressing Africa&apos;s challenges. By bringing together professionals from various
                            fields &mdash; startups, corporate, policy, non-profit, governments, public private
                            partnerships, and more &mdash; we create a unique space for interdisciplinary dialogue and
                            solution-building.
                        </p>
                    </div>

                    <div className={styles.contentBlock}>
                        <h2>Our Mission</h2>
                        <div className={styles.grid}>
                            <div className={styles.card}>
                                <h3>Foster Meaningful Dialogue</h3>
                                <p>
                                    Create spaces for alumni to discuss critical issues affecting the continent and various
                                    African countries, from governance, leadership, geopolitics, economic development, NGOs,
                                    climate change, healthcare, digital transformation, and more.
                                </p>
                            </div>

                            <div className={styles.card}>
                                <h3>Generate Solutions</h3>
                                <p>
                                    Move beyond discussion to action by developing practical, implementable solutions that
                                    leverage our collective expertise and networks.
                                </p>
                            </div>

                            <div className={styles.card}>
                                <h3>Build Connections</h3>
                                <p>
                                    Strengthen ties between Columbia alumni across Africa and with the broader diaspora,
                                    and people doing business on the continent to create opportunities for collaboration
                                    and mutual support.
                                </p>
                            </div>

                            <div className={styles.card}>
                                <h3>Empower Future Leaders</h3>
                                <p>
                                    Through mentorship, coaching, and knowledge sharing, prepare the next generation of
                                    true African leaders to tackle the challenges facing the continent with confidence
                                    and competence.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.contentBlock}>
                        <h2>What We Do</h2>
                        <p>
                            Our activities center around creating platforms for engagement and action:
                        </p>
                        <ul className={styles.activityList}>
                            <li>
                                <strong>Group Chat:</strong> A space for alumni to share perspectives on issues, propose
                                solutions, and engage in constructive dialogue
                            </li>
                            <li>
                                <strong>Programs:</strong> Using our experiences to develop impactful initiatives that
                                develop the human capital needs of the continent
                            </li>
                            <li>
                                <strong>Discussion Forums:</strong> Regular virtual and in-person gatherings to discuss
                                specific topics affecting the continent and members&apos; needs
                            </li>
                            <li>
                                <strong>Resource Sharing:</strong> Creating a repository of knowledge, contacts, and
                                opportunities for our community to share or solicit help
                            </li>
                        </ul>
                    </div>

                    <div className={styles.contentBlock}>
                        <h2>Our Values</h2>
                        <div className={styles.grid}>
                            <div className={styles.valueCard}>
                                <h3>Leadership</h3>
                                <p>We lead by example through actions and holding ourselves accountable.</p>
                            </div>
                            <div className={styles.valueCard}>
                                <h3>Collaboration</h3>
                                <p>We believe in the power of collective intelligence and cross-border cooperation.</p>
                            </div>
                            <div className={styles.valueCard}>
                                <h3>Innovation</h3>
                                <p>We embrace creative solutions and new approaches to age-old challenges.</p>
                            </div>
                            <div className={styles.valueCard}>
                                <h3>Impact</h3>
                                <p>We focus on creating tangible, measurable change across the continent.</p>
                            </div>
                            <div className={styles.valueCard}>
                                <h3>Dedication</h3>
                                <p>We are committed to bringing about the needed changes across the continent.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.contentBlock}>
                        <h2>Our Leadership</h2>
                        <h3 className={styles.leadershipSubhead}>Advisory Board</h3>
                        <p>Overseeing and providing strategic guidance and support.</p>
                        <ul className={styles.leadershipList}>
                            <li>Kafui Kutsinyah, SPS&apos;17</li>
                            <li>Klubosumo Borh, SW&apos;15</li>
                            <li>Michael Wills, SPS&apos;20</li>
                            <li>Katerine Perry, PH&apos;03</li>
                        </ul>
                    </div>

                    <div className={styles.contentBlock}>
                        <h2>Join Our Community</h2>
                        <p>
                            Whether you&apos;re a Columbia alumnus from Africa, part of the diaspora, working in Africa,
                            with a passion for the continent, or an about-to-graduate student interested in Africa, we
                            welcome you to join our community.
                        </p>
                        <p>
                            We bring together alumni from Africa or who have connections to Africa to share relevant
                            information, help members, build a network, and positively impact Africa.
                        </p>
                        <p>
                            Together, we can harness the power of our collective experience and expertise to build a
                            brighter future for Africa.
                        </p>
                        <div className={styles.cta}>
                            <Link href="/sign-up" className={styles.primaryBtn}>Get Involved</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
