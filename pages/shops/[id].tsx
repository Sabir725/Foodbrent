
import { useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/ShopDetail.module.css';
import { useCart } from '@/context/CartContext';
import Header from '@/components/layout/Header';
import Link from 'next/link';

// --- ICONS ---
const StarIcon = () => <span>⭐</span>;
const VegIcon = ({ className }) => <span className={className}>🌱</span>;
const NonVegIcon = ({ className }) => <span className={className}>🔴</span>;

// --- MOCK DATA ---
const shopData = {
    id: 1,
    name: 'Shagun Sweets',
    coverImage: '',
    rating: 4.8,
    reviews:"8277",
    cuisine: 'Indian, Sweets, Snacks',
    deliveryTime: '20-30 mins',
    distance: '3.2km',
    address: '123 Sweet Street, Foodie City',
    timings: '11:00 AM - 10:00 PM',
    license: 'FSSAI_LIC_1234567890',
    offers: [
        { code: 'SAVE20', description: '20% off on orders above ₹500' },
        { code: 'FREEBIE', description: 'Free delivery on first order' },
    ],
    menu: {
        'Snacks': [
            { id: 201, name: 'Single Samosa with Chutney', description: 'Crispy pastry filled with spiced potatoes.', price: 25, image: '', isVeg: true },
            { id: 202, name: 'Tikki with Chutney', description: 'Spiced potato patties, shallow-fried.', price: 40, image: '', isVeg: true },
        ],
  
    }
};
const ProductCard = ({ item, cartItem, onAddToCart, onIncrease, onDecrease }) => (
    <div className={styles.productCard}>
        <div className={styles.productInfo}>
            <h4>
                {item.isVeg ? <VegIcon className={styles.vegNonVegIcon} /> : <NonVegIcon className={styles.vegNonVegIcon} />}
                {item.name}
            </h4>
            <p className={styles.productDesc}>{item.description}</p>
            <p className={styles.productPrice}>₹{item.price}</p>
        </div>
        <div className={styles.productImageContainer}>
            <Image src={item.image} alt={item.name} width={120} height={120} className={styles.productImage} />
            {cartItem ? (
                <div className={styles.quantityControl}>
                    <button onClick={() => onDecrease(item.id)}>−</button>
                    <span>{cartItem.quantity}</span>
                    <button onClick={() => onIncrease(item.id)}>+</button>
                </div>
            ) : (
                <button className={styles.addButton} onClick={() => onAddToCart(item)}>
                    ADD
                </button>
            )}
        </div>
    </div>
);

const ShopDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const [activeTab, setActiveTab] = useState('Snacks');
    const { cart, handleAddToCart, handleIncreaseQuantity, handleDecreaseQuantity, cartSummary } = useCart();

    const cartMap = useMemo(() => {
        return cart.reduce((map, item) => {
            map[item.id] = item;
            return map;
        }, {});
    }, [cart]);

    const shop = shopData;
    if (!shop) return <div>Loading...</div>;

    const menuCategories = Object.keys(shop.menu);

    return (
        <div className={styles.container}>
            <Head>
                <title>{shop.name} - Order Online</title>
            </Head>

            <Header />

            <div className={styles.shopHeader}>
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
                    {shop.menu[activeTab] && shop.menu[activeTab].map(item => (
                        <ProductCard 
                            key={item.id} 
                            item={item} 
                            cartItem={cartMap[item.id]}
                            onAddToCart={handleAddToCart}
                            onIncrease={handleIncreaseQuantity}
                            onDecrease={handleDecreaseQuantity}
                        />
                    ))}
                </div>
            </main>

            {cartSummary.totalItems > 0 && (
                <div className={styles.floatingCartBar}>
                    <span>{cartSummary.totalItems} items | ₹{cartSummary.totalPrice}</span>
                    <Link href="/cart" className={styles.viewCartButton}>View Cart</Link>
                </div>
            )}
        </div>
    );
};

export default ShopDetail;
