
// components/layout/Header.tsx
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../../context/CartContext';
import CartIcon from '../icons/CartIcon';
import styles from './Header.module.css';

const Header = () => {
    const { cartSummary } = useCart();

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">
                    <Image src="/logo.png" alt="Food Fleet Logo" width={120} height={40} />
                </Link>
            </div>
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
