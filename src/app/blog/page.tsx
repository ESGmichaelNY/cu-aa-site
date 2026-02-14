import styles from './blog.module.css';

export const metadata = {
    title: "Blog | CU-AA",
    description: "Thought leadership articles from Columbia University Africa Alumni community.",
};

const ARTICLES = [
    {
        id: 'welcome',
        title: 'Welcome to the CU-AA Blog',
        excerpt: 'We are excited to launch our blog as a platform for thought leadership, sharing insights, and amplifying the voices of our alumni community across Africa and the diaspora.',
        date: '2026-02-14',
        author: 'CU-AA Team',
    },
];

export default function BlogPage() {
    return (
        <main>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1>Blog</h1>
                    <p className={styles.heroSubtitle}>
                        Thought leadership and insights from our alumni community
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    {ARTICLES.length > 0 ? (
                        <div className={styles.grid}>
                            {ARTICLES.map((article) => (
                                <article key={article.id} className={styles.card}>
                                    <div className={styles.cardMeta}>
                                        <span>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                        <span className={styles.dot}>&middot;</span>
                                        <span>{article.author}</span>
                                    </div>
                                    <h2>{article.title}</h2>
                                    <p>{article.excerpt}</p>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className={styles.empty}>
                            <p>Articles coming soon. Check back for thought leadership content from our community.</p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
