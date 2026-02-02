
import Link from 'next/link';
import styles from '@/styles/Custom404.module.css';

const Custom404 = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404 - Page Not Found</h1>
            <p className={styles.description}>
                Oops! The page you are looking for does not exist.
            </p>
            <Link href="/" className={styles.homeLink}>
                Go back to the homepage
            </Link>
        </div>
    );
};

export default Custom404;
