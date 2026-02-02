
import { GetStaticPaths, GetStaticProps } from 'next';
import { useMemo, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/ShopDetail.module.css';
import { useCart, CartItem } from '@/context/CartContext';
import Link from 'next/link';
import CartIcon from '@/components/icons/CartIcon';
import { getShops, getShopById, Shop, MenuItem } from '@/lib/data';

// --- INTERFACES ---
interface IconProps {
    className: string;
}

interface ProductCardProps {
    item: MenuItem;
    cartItem: CartItem | undefined;
    serviceOption: 'takeout' | 'dine_in';
    onAddToCart: (item: Omit<CartItem, 'quantity'>) => void;
    onIncrease: (id: string) => void;
    onDecrease: (id: string) => void;
}

// --- ICONS ---
const StarIcon = () => <span>⭐</span>;
const VegIcon = ({ className }: IconProps) => <span className={className}>🟢</span>;
const NonVegIcon = ({ className }: IconProps) => <span className={className}>🔴</span>;

const ProductCard = ({ item, cartItem, serviceOption, onAddToCart, onIncrease, onDecrease }: ProductCardProps) => {
    const price = item.options[serviceOption].price;

    const handleAddToCartClick = () => {
        onAddToCart({ ...item, id: String(item.id), price });
    };

    return (
        <div className={styles.productCard}>
            <div className={styles.productInfo}>
                <h4>
                    {item.isVeg ? <VegIcon className={styles.vegNonVegIcon} /> : <NonVegIcon className={styles.vegNonVegIcon} />}
                    {item.name}
                </h4>
                <p className={styles.productDesc}>{item.description}</p>
                <p className={styles.productPrice}>${price}</p>
            </div>
            <div className={styles.productImageContainer}>
                <Image src={item.image} alt={item.name} width={120} height={120} className={styles.productImage} />
                {cartItem ? (
                    <div className={styles.quantityControl}>
                        <button onClick={() => onDecrease(String(item.id))}>−</button>
                        <span>{cartItem.quantity}</span>
                        <button onClick={() => onIncrease(String(item.id))}>+</button>
                    </div>
                ) : (
                    <button className={styles.addButton} onClick={handleAddToCartClick}>
                        ADD
                    </button>
                )}
            </div>
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const shops = getShops();
    const paths = shops.map((shop) => ({
        params: { id: String(shop.id) },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id;
    const shopId = parseInt(id as string, 10);
    const shop = getShopById(shopId);

    if (!shop) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            shop,
        },
    };
};

const ShopDetail = ({ shop }: { shop: Shop }) => {
    const [activeTab, setActiveTab] = useState(Object.keys(shop.menu)[0] || '');
    const cartContext = useCart();

    const {
        cart = [],
        handleAddToCart = () => {},
        handleIncreaseQuantity = () => {},
        handleDecreaseQuantity = () => {},
        cartSummary = { totalItems: 0, totalPrice: 0 },
        orderType = 'Take Away',
        setOrderType = () => {}
    } = cartContext || {};

    const cartMap = useMemo(() => {
        return cart.reduce((map: { [key: string]: CartItem }, item) => {
            map[item.id] = item;
            return map;
        }, {});
    }, [cart]);

    if (!shop) {
        return <div>Loading...</div>;
    }

    const menuCategories = Object.keys(shop.menu);
    const serviceOption = orderType === 'Take Away' ? 'takeout' : 'dine_in';

    return (
        <div className={styles.container}>
            <Head>
                <title>{shop.name} - Order Online</title>
            </Head>

            <div className={styles.shopHeader}>
                <div className={styles.topBar}>
                    <Link href="/">
                        <Image src="/logo.svg" alt="Food Crawl Logo" width={120} height={40} />
                    </Link>
                    <Link href="/cart" className={styles.cartContainer}>
                        <CartIcon className={styles.cartIcon} />
                        {cartSummary.totalItems > 0 && (
                            <span className={styles.cartBadge}>{cartSummary.totalItems}</span>
                        )}
                    </Link>
                </div>
                 <Image
                    src={shop.coverImage}
                    alt={`${shop.name} cover image`}
                    layout="fill"
                    objectFit="cover"
                    priority
                    sizes="100vw"
                    className={styles.coverImage}
                />
                <div className={styles.headerInfoContainer}>
                    <div className={styles.headerInfo}>
                        <h1>{shop.name}</h1>
                        <p>{shop.cuisine}</p>
                    </div>
                    <div className={styles.shopMeta}>
                        <div className={styles.rating}><StarIcon /> {shop.rating}</div>
                        <span>•</span>
                        <div>{shop.deliveryTime}</div>
                        <span>•</span>
                        <div>{shop.distance}</div>
                    </div>
                </div>
            </div>

            <main className={styles.mainContent}>
                <div className={styles.serviceOptionToggle}>
                    <button 
                        className={`${styles.toggleButton} ${orderType === 'Take Away' ? styles.activeToggle : ''}`}
                        onClick={() => setOrderType('Take Away')}
                    >
                        Take Out
                    </button>
                    <button 
                        className={`${styles.toggleButton} ${orderType === 'Dine In' ? styles.activeToggle : ''}`}
                        onClick={() => setOrderType('Dine In')}
                    >
                        Dine In
                    </button>
                </div>

                 <nav className={styles.menuTabs}>
                    {menuCategories.map(category => (
                        <button
                            key={category}
                            className={`${styles.tabButton} ${activeTab === category ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab(category)}
                        >
                            {category}
                        </button>
                    ))}
                </nav>

                <div className={styles.menuItems}>
                    {shop.menu[activeTab] && (shop.menu[activeTab] as MenuItem[]).map(item => (
                        <ProductCard
                            key={item.id}
                            item={item}
                            cartItem={cartMap[String(item.id)]}
                            serviceOption={serviceOption}
                            onAddToCart={handleAddToCart}
                            onIncrease={handleIncreaseQuantity}
                            onDecrease={handleDecreaseQuantity}
                        />
                    ))}
                </div>
            </main>

            {cartSummary.totalItems > 0 && (
                <div className={styles.floatingCartBar}>
                    <span>{cartSummary.totalItems} items | ${cartSummary.totalPrice.toFixed(2)}</span>
                    <Link href="/cart" className={styles.viewCartButton}>View Cart</Link>
                </div>
            )}
        </div>
    );
};

export default ShopDetail;
