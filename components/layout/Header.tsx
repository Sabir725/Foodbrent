
// components/layout/Header.tsx
import Link from 'next/link';
import { useCart } from '../../context/CartContext';
import CartIcon from '../icons/CartIcon';
import styles from './Header.module.css';

const Header = () => {
    const { cartSummary } = useCart();

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">Food Fleet</Link>
            </div>
            <nav className={styles.nav}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </nav>
            <Link href="/cart" className={styles.cartContainer}>
                <CartIcon className={styles.cartIcon} />
                {cartSummary.totalItems > 0 && (
                    <span className={styles.cartBadge}>{cartSummary.totalItems}</span>
                )}
            </Link>
        </header>
    );
};

export default Header;
