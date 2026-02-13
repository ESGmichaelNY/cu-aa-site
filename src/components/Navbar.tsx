import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import styles from './navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoText}>
                        Columbia University <span className={styles.logoDivider}>|</span> Africa Alumni
                    </span>
                </Link>

                <div className={styles.links}>
                    <Link href="/about" className={styles.link}>About</Link>
                    <Link href="/members/directory" className={styles.link}>Members Directory</Link>

                    <div className={styles.dropdown}>
                        <span className={styles.link}>Programs</span>
                        <div className={styles.dropdownMenu}>
                            <Link href="/programs#mentorship">Mentorship &amp; Coaching</Link>
                            <Link href="/programs#leadership">Leadership Development</Link>
                            <Link href="/programs#community">Community Services</Link>
                            <Link href="/programs#events">Events &amp; Workshops</Link>
                        </div>
                    </div>

                    <div className={styles.dropdown}>
                        <span className={styles.link}>Forums</span>
                        <div className={styles.dropdownMenu}>
                            <Link href="/forums#advisory">Advisory Board Meetings</Link>
                            <Link href="/forums#monthly">Monthly Group Meetings</Link>
                        </div>
                    </div>

                    <Link href="/contact" className={styles.link}>Contact</Link>
                    <Link href="/donate" className={styles.link}>Donate</Link>

                    <div className={styles.divider}></div>

                    <SignedIn>
                        <Link href="/members/admin" className={styles.link}>Admin</Link>
                        <Link href="/profile" className={styles.link}>Profile</Link>
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>

                    <SignedOut>
                        <Link href="/sign-in" className={styles.loginBtn}>Log In</Link>
                    </SignedOut>
                </div>
            </div>
        </nav>
    );
}
