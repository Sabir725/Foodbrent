
// components/layout/Header.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../../context/CartContext';
import CartIcon from '../icons/CartIcon';
import styles from './Header.module.css';

const Header = () => {
    const cartContext = useCart();

    // Handle case where context might be null on initial render
    if (!cartContext) {
        return (
            <header className={styles.header}>
                <div className={styles.logo}>
                    <div>
                        <Image src="/logo.svg" alt="Food Crawl Logo" width={120} height={40} />
                    </div>
                </div>
                <Link href="/cart" className={styles.cartContainer}>
                    <CartIcon className={styles.cartIcon} />
                </Link>
            </header>
        );
    }

    const { cartSummary } = cartContext;

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <div>
                    <Image src="/logo.svg" alt="Food Crawl Logo" width={120} height={40} />
                </div>
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
