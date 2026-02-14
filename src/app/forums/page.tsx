import styles from './forums.module.css';

export const metadata = {
    title: "Forums | CU-AA",
    description: "CU-AA discussion forums: Advisory Board Meetings and Monthly Group Meetings for alumni engagement.",
};

const FORUMS = [
    {
        id: 'advisory',
        title: 'Advisory Board Meetings',
        icon: '🏛️',
        description: 'Strategic discussions led by the Advisory Board to set direction, review initiatives, and guide the organization toward its mission. These meetings shape the future of CU-AA and ensure we stay aligned with the needs of our community.',
        details: [
            'Quarterly strategic planning sessions',
            'Initiative review and approval',
            'Organizational governance and direction',
            'Partnership and collaboration decisions',
        ],
    },
    {
        id: 'monthly',
        title: 'Monthly Group Meetings',
        icon: '💬',
        description: 'Regular gatherings open to all CU-AA members. Each month we explore a specific topic affecting the continent, share updates, and create space for open dialogue and collaboration.',
        details: [
            'Thematic discussions on African development',
            'Guest speakers and expert panels',
            'Community updates and announcements',
            'Open floor for member initiatives',
        ],
    },
];

export default function ForumsPage() {
    return (
        <main>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1>Forums</h1>
                    <p className={styles.heroSubtitle}>
                        Regular virtual and in-person gatherings to discuss specific topics affecting the continent and members&apos; needs.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {FORUMS.map((forum) => (
                            <div key={forum.id} id={forum.id} className={styles.card}>
                                <div className={styles.cardIcon}>{forum.icon}</div>
                                <h2>{forum.title}</h2>
                                <p>{forum.description}</p>
                                <ul className={styles.details}>
                                    {forum.details.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div id="recordings" className={styles.recordingsSection}>
                        <h2>Meeting Recordings &amp; Files</h2>
                        <p className={styles.recordingsIntro}>
                            Access recordings and materials from our Monthly Group Meetings.
                        </p>

                        <div className={styles.fileList}>
                            <div className={styles.fileItem}>
                                <span className={styles.fileIcon}>📁</span>
                                <div>
                                    <h4>2026 Meetings</h4>
                                    <p>Recordings and agendas from 2026 sessions</p>
                                </div>
                            </div>
                            <div className={styles.fileItem}>
                                <span className={styles.fileIcon}>📁</span>
                                <div>
                                    <h4>2025 Meetings</h4>
                                    <p>Recordings and agendas from 2025 sessions</p>
                                </div>
                            </div>
                            <div className={styles.fileItem}>
                                <span className={styles.fileIcon}>📄</span>
                                <div>
                                    <h4>Meeting Templates &amp; Resources</h4>
                                    <p>Shared documents, templates, and reference materials</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.whatsappCta}>
                        <div className={styles.whatsappIcon}>💬</div>
                        <div>
                            <h3>Join the Conversation</h3>
                            <p>Our community discussions happen on WhatsApp. Join our group to stay connected between meetings, share ideas, and collaborate with fellow alumni.</p>
                            <a
                                href="https://chat.whatsapp.com/INVITE_LINK"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.whatsappBtn}
                            >
                                Join WhatsApp Group
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
