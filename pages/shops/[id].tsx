
import { useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/ShopDetail.module.css';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import CartIcon from '@/components/icons/CartIcon';

// --- ICONS ---
const StarIcon = () => <span>⭐</span>;
const VegIcon = ({ className }) => <span className={className}>🟢</span>;
const NonVegIcon = ({ className }) => <span className={className}>🔴</span>;

// --- MOCK DATA ---
const shopData = {
    id: 1,
    name: 'Shagun Sweets',
    coverImage: 'https://source.unsplash.com/1740x400/?indian-sweets',
    rating: 4.8,
    reviews: "8277",
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
            { id: 201, name: 'Single Samosa with Chutney', description: 'Crispy pastry filled with spiced potatoes and peas, served with tangy tamarind chutney.', price: 25, image: 'https://source.unsplash.com/400x300/?samosa', isVeg: true },
            { id: 202, name: 'Tikki with Chutney', description: 'Spiced potato patties, shallow-fried to perfection and served with mint and tamarind chutneys.', price: 40, image: 'https://source.unsplash.com/400x300/?tikki', isVeg: true },
            { id: 203, name: 'Chole Bhature', description: 'A classic Punjabi combo of spicy chickpea curry and fluffy, deep-fried bread.', price: 150, image: 'https://source.unsplash.com/400x300/?chole-bhature', isVeg: true },
            { id: 204, name: 'Golgappe (Pani Puri)', description: 'Crisp hollow balls filled with a spicy mixture of potato, chickpeas, and tangy flavored water.', price: 60, image: 'https://source.unsplash.com/400x300/?pani-puri', isVeg: true },
            { id: 205, name: 'Dahi Bhalla', description: 'Soft lentil dumplings soaked in creamy yogurt, topped with sweet and spicy chutneys.', price: 80, image: 'https://source.unsplash.com/400x300/?dahi-bhalla', isVeg: true },
        ],
        'Sweets': [
            { id: 301, name: 'Gulab Jamun (2 pcs)', description: 'Soft, spongy balls made of milk solids, deep-fried and soaked in a light sugar syrup.', price: 50, image: 'https://source.unsplash.com/400x300/?gulab-jamun', isVeg: true },
            { id: 302, name: 'Jalebi (100g)', description: 'A spiral-shaped sweet made from deep-fried batter, soaked in saffron-infused sugar syrup.', price: 70, image: 'https://source.unsplash.com/400x300/?jalebi', isVeg: true },
            { id: 303, name: 'Rasmalai (2 pcs)', description: 'Soft paneer dumplings soaked in chilled, creamy milk flavored with cardamom and pistachios.', price: 90, image: 'https://source.unsplash.com/400x300/?rasmalai', isVeg: true },
            { id: 304, name: 'Kaju Katli (250g)', description: 'A diamond-shaped fudge made from cashew nuts, sugar, and ghee.', price: 250, image: 'https://source.unsplash.com/400x300/?kaju-katli', isVeg: true },
        ],
        'Drinks': [
            { id: 401, name: 'Sweet Lassi', description: 'A refreshing yogurt-based drink, sweetened and topped with a dollop of cream.', price: 60, image: 'https://source.unsplash.com/400x300/?lassi', isVeg: true },
            { id: 402, name: 'Masala Chai', description: 'Aromatic Indian tea brewed with a blend of spices like cardamom, ginger, and cloves.', price: 40, image: 'https://source.unsplash.com/400x300/?masala-chai', isVeg: true },
            { id: 403, name: 'Badam Milk', description: 'Creamy and rich almond-flavored milk, garnished with slivered almonds and saffron.', price: 80, image: 'https://source.unsplash.com/400x300/?badam-milk', isVeg: true },
        ]
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

            <div className={styles.shopHeader}>
                <div className={styles.topBar}>
                    <Link href="/">
                        <Image src="/logo.png" alt="Food Fleet Logo" width={120} height={40} />
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
