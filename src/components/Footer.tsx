import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <h3>About CU-AA</h3>
                        <p>Columbia University Africa Alumni is dedicated to positively impacting Africa by finding solutions to Africa&apos;s challenges.</p>
                    </div>

                    <div className={styles.column}>
                        <h4>Community</h4>
                        <Link href="/about">About Us</Link>
                        <Link href="/members/directory">Members Directory</Link>
                        <Link href="/programs">Programs</Link>
                        <Link href="/forums">Forums</Link>
                        <Link href="/contact">Contact</Link>
                    </div>

                    <div className={styles.column}>
                        <h4>Connect</h4>
                        <a href="https://discord.gg/buzRNDjggr" target="_blank" rel="noopener noreferrer">Discord Server</a>
                        <a href="https://linkedin.com/company/cu-africa-alumni" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="mailto:info@cu-aa.org">Contact Us</a>
                        <Link href="/donate">Donate</Link>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Columbia University Africa Alumni. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
