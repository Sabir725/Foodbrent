
import Head from 'next/head';
import styles from '../../styles/Shops.module.css';
import Link from 'next/link';
import Image from 'next/image';

import LocationIcon from '../../components/icons/LocationIcon';
import StarIcon from '../../components/icons/StarIcon';
import FastDeliveryIcon from '../../components/icons/FastDeliveryIcon';
import OffersIcon from '../../components/icons/OffersIcon';
import VegIcon from '../../components/icons/VegIcon';

const ShopCard = ({ shop }) => (
    <Link href={`/shops/${shop.id}`} passHref>
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image
                    src={shop.image}
                    alt={shop.name}
                    layout="fill"
                    className={styles.cardImage}
                />
                <div className={styles.badgeContainer}>
                    {shop.badges.map(badge => (
                        <span key={badge} className={styles.badge}>{badge}</span>
                    ))}
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.titleLine}>
                    <h3 className={styles.cardTitle}>{shop.name}</h3>
                    <div className={styles.rating}>
                        <StarIcon />
                        <span>{shop.rating} ({shop.reviews} reviews)</span>
                    </div>
                </div>
                <div className={styles.tags}>
                    {shop.tags.join(', ')}
                </div>
                <div className={styles.details}>
                    <span>{shop.deliveryTime}</span>
                    <span>•</span>
                    <span>{shop.priceRange}</span>
                </div>
            </div>
        </div>
    </Link>
);

const FoodCategoryCard = ({ category }) => (
    <div className={styles.categoryCard}>
        <Image
            src={category.image}
            alt={category.name}
            width={80}
            height={80}
            className={styles.categoryImage}
        />
        <h4>{category.name}</h4>
    </div>
);

const Shops = () => {
    const shops = [
        {
            id: 1,
            name: 'Bento Box',
            image: '',
            tags: ['Japanese', 'Sushi', 'Asian'],
            rating: 4.8,
            reviews: '320+',
            deliveryTime: '20-30 mins',
            priceRange: '₹₹ for two',
            badges: ['New', 'Best Seller'],
        },
        {
            id: 2,
            name: 'Taco Town',
            image:"",
            tags: ['Mexican', 'Tacos', 'Fast Food'],
            rating: 4.6,
            reviews: '500+',
            deliveryTime: '15-25 mins',
            priceRange: '₹ for two',
            badges: ['Pure Veg'],
        },
        {
            id: 3,
            name: 'Pasta Palace',
            image:"",
            tags: ['Italian', 'Pasta', 'European'],
            rating: 4.9,
            reviews: '700+',
            deliveryTime: '30-40 mins',
            priceRange: '₹₹₹ for two',
            badges: ['Best Seller'],
        },
    ];

    const foodCategories = [
      
        { name: 'Chinese', image: "" },
  
  
    ];

    return (
        <div className={styles.container}>
            <Head>
                <title>Find Restaurants - Foodie</title>
                <meta name="description" content="Discover the best local restaurants and get food delivered to your door." />
            </Head>

            <header className={styles.header}>
                <div className={styles.locationSelector}>
                    <LocationIcon />
                    <div>
                        <h4>Delivering to</h4>
                        <p>123 Main Street, Anytown...</p>
                    </div>
                </div>
                <div className={styles.searchBar}>
                    <input type="text" placeholder="Search restaurants, dishes, cuisines" />
                </div>
            </header>

            <main>
                <section className={styles.filters}>
                    <button className={styles.filterChip}><VegIcon /> Veg / Non-Veg</button>
                    <button className={styles.filterChip}><StarIcon /> Rating</button>
                    <button className={styles.filterChip}><FastDeliveryIcon /> Fast delivery</button>
                    <button className={styles.filterChip}><OffersIcon /> Offers</button>
                    <button className={styles.filterChip}>Open now</button>
                </section>

                <section className={styles.promoSection}>
                     <div className={styles.promoBanner}>
                        <h3>Flat 30% OFF</h3>
                        <p>on orders above ₹500</p>
                    </div>
                </section>

                <section className={styles.categorySection}>
                    <h2 className={styles.sectionTitle}>Food Categories</h2>
                    <div className={styles.categoryGrid}>
                        {foodCategories.map((category) => (
                            <FoodCategoryCard key={category.name} category={category} />
                        ))}
                    </div>
                </section>

                <h2 className={styles.sectionTitle}>Restaurants For You</h2>
                <div className={styles.grid}>
                    {shops.map((shop) => (
                        <ShopCard key={shop.id} shop={shop} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Shops;
