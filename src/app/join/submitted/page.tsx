import styles from "../join.module.css";

export default function SubmittedPage() {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <h1>Join CU-AA</h1>
                <div className={styles.statusCard}>
                    <h2>Request Submitted</h2>
                    <p>
                        Thank you for your interest in joining the CU-AA community!
                        Your request has been submitted and is pending review by an administrator.
                    </p>
                    <p>
                        Once approved, you&apos;ll receive instructions to create your account
                        and access the member directory.
                    </p>
                </div>
            </div>
        </div>
    );
}
