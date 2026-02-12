import styles from './programs.module.css';

export const metadata = {
    title: "Programs | CU-AA",
    description: "CU-AA programs: Mentorship & Coaching, Leadership Development, Community Services, and Events & Workshops.",
};

const PROGRAMS = [
    {
        id: 'mentorship',
        title: 'Mentorship & Coaching',
        icon: '🎯',
        description: 'Connect with experienced Columbia alumni who can guide your professional and personal growth. Our mentorship program pairs emerging leaders with seasoned professionals across diverse fields.',
        highlights: [
            'One-on-one mentoring relationships',
            'Career guidance and professional development',
            'Cross-industry knowledge sharing',
            'Coaching for entrepreneurs and startup founders',
        ],
    },
    {
        id: 'leadership',
        title: 'Leadership Development',
        icon: '🌟',
        description: 'Develop the leadership skills needed to drive meaningful change across the continent. Our programs prepare the next generation of true African leaders.',
        highlights: [
            'Leadership workshops and seminars',
            'Executive education partnerships',
            'Peer learning circles',
            'Leadership case studies from African contexts',
        ],
    },
    {
        id: 'community',
        title: 'Community Services',
        icon: '🤝',
        description: 'Give back to communities across Africa through collaborative service initiatives. We leverage our collective expertise to create lasting impact.',
        highlights: [
            'Skills-based volunteering opportunities',
            'Community development projects',
            'Pro-bono consulting for African NGOs',
            'Knowledge transfer initiatives',
        ],
    },
    {
        id: 'events',
        title: 'Events & Workshops',
        icon: '📅',
        description: 'Engage with fellow alumni through regular events that foster learning, networking, and collaboration on issues that matter to the continent.',
        highlights: [
            'Virtual and in-person networking events',
            'Thematic workshops on African development',
            'Annual alumni gatherings',
            'Speaker series with industry leaders',
        ],
    },
];

export default function ProgramsPage() {
    return (
        <main>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1>Programs</h1>
                    <p className={styles.heroSubtitle}>
                        Using our experiences to develop impactful initiatives that build the human capital needs of the continent.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    {PROGRAMS.map((program) => (
                        <div key={program.id} id={program.id} className={styles.programBlock}>
                            <div className={styles.programHeader}>
                                <span className={styles.programIcon}>{program.icon}</span>
                                <h2>{program.title}</h2>
                            </div>
                            <p className={styles.programDesc}>{program.description}</p>
                            <ul className={styles.highlights}>
                                {program.highlights.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className={styles.ctaBlock}>
                        <h2>Interested in our programs?</h2>
                        <p>
                            Whether you want to participate, mentor, or help shape our initiatives, we&apos;d love to hear from you.
                        </p>
                        <a href="mailto:info@cu-aa.org" className={styles.primaryBtn}>
                            Get in Touch
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
