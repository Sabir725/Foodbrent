
import Head from 'next/head';
import styles from '../styles/Products.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>Foodie</div>
    <nav className={styles.nav}>
      <Link href="/shops">Shops</Link>
      <Link href="/products">Products</Link>
      <Link href="#">About</Link>
      <Link href="#">Contact</Link>
    </nav>
    <Link href="#" legacyBehavior>
        <a className={styles.ctaButton}>Get Started</a>
    </Link>
  </header>
);

interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
}

const ProductCard = ({ product }: { product: Product }) => (
    <div className={styles.card}>
        <Image src={product.image} alt={product.name} width={400} height={200} className={styles.cardImage} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className={styles.cardFooter}>
            <p className={styles.price}>{product.price}</p>
            <Link href="#" legacyBehavior>
                <a className={styles.ctaButton}>Add to Cart</a>
            </Link>
        </div>
    </div>
);

const Products = () => {
    const products: Product[] = [
        {
            id: 1,
            name: 'Cheeseburger',
            description: 'A classic cheeseburger with all the fixings.',
            price: '$10',
            image: 'https://picsum.photos/400/200?random=p11',
        },
        {
            id: 2,
            name: 'Pepperoni Pizza',
            description: 'A delicious pepperoni pizza with a crispy crust.',
            price: '$12',
            image: 'https://picsum.photos/400/200?random=p12',
        },
        {
            id: 3,
            name: 'California Roll',
            description: 'A refreshing California roll with crab and avocado.',
            price: '$15',
            image: 'https://picsum.photos/400/200?random=p13',
        },
        {
            id: 4,
            name: 'Taco',
            description: 'A delicious taco with your choice of meat and toppings.',
            price: '$8',
            image: 'https://picsum.photos/400/200?random=p14',
        },
        {
            id: 5,
            name: 'Pasta',
            description: 'Authentic Italian pasta with a modern twist.',
            price: '$18',
            image: 'https://picsum.photos/400/200?random=p15',
        },
        {
            id: 6,
            name: 'Salad',
            description: 'A fresh and delicious salad, made to order.',
            price: '$9',
            image: 'https://picsum.photos/400/200?random=p16',
        },
    ];

    return (
        <div className={styles.container}>
            <Head>
                <title>Products - Foodie</title>
                <meta name="description" content="Browse our selection of products and find your next meal." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className={styles.main}>
                <div className={styles.sectionHeader}>
                    <h1>Products</h1>
                    <p>Browse our selection of products and find your next meal.</p>
                </div>
                <div className={styles.filters}>
                    <input type="text" placeholder="Search products..." className={styles.searchInput} />
                    <select className={styles.filterSelect}>
                        <option value="">All Categories</option>
                        <option value="burgers">Burgers</option>
                        <option value="pizza">Pizza</option>
                        <option value="sushi">Sushi</option>
                        <option value="tacos">Tacos</option>
                        <option value="pasta">Pasta</option>
                        <option value="salads">Salads</option>
                    </select>
                </div>
                <div className={styles.grid}>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Products;
