
import Head from 'next/head';
import styles from '@/styles/Marketplace.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header'; // Using the global header

const Hero = () => (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Your favorite food, delivered with a smile.</h1>
        <p className={styles.heroSubtitle}>The best restaurants and shops in your city, delivered to your door.</p>
        <Link href="/shops" className={styles.ctaButton}>
          Find Food
        </Link>
      </div>
    </section>
);

const WhyChooseUs = () => (
    <section className={styles.whyChooseUs}>
        <div className={styles.sectionHeader}>
            <h2>Why Choose Us?</h2>
        </div>
        <div className={styles.grid}>
            <div className={styles.featureCard}>
                <h3>Wide Selection</h3>
                <p>From local favorites to national chains, we have something for everyone.</p>
            </div>
            <div className={styles.featureCard}>
                <h3>Fast Delivery</h3>
                <p>Get your food delivered in as little as 30 minutes.</p>
            </div>
            <div className={styles.featureCard}>
                <h3>Great Prices</h3>
                <p>Enjoy the best food at the best prices, with no hidden fees.</p>
            </div>
        </div>
    </section>
);

const HowItWorks = () => (
    <section id="how-it-works" className={`${styles.section} ${styles.howItWorks}`}>
      <div className={styles.sectionHeader}>
        <h2>How It Works</h2>
      </div>
      <div className={styles.grid}>
        <div className={styles.step}>
          <h3>1. Browse</h3>
          <p>Explore shops and discover new food items.</p>
        </div>
        <div className={styles.step}>
          <h3>2. Order</h3>
          <p>Place your order and we'll handle the rest.</p>
        </div>
        <div className={styles.step}>
          <h3>3. Enjoy</h3>
          <p>Get your food delivered to your door.</p>
        </div>
      </div>
    </section>
);

const FeaturedShops = () => (
    <section id="shops" className={styles.section}>
        <div className={styles.sectionHeader}>
            <h2>Featured Shops</h2>
            <Link href="/shops">View All</Link>
        </div>
        <div className={styles.grid}>
            <Link href="/shops/1" className={styles.card}>
                <Image src="https://picsum.photos/400/200?random=1" alt="Burger Joint" width={400} height={200} className={styles.cardImage} />
                <h3>The Burger Joint</h3>
                <p>The best burgers in town. You won't be disappointed.</p>
            </Link>
            <Link href="/shops/1" className={styles.card}>
                <Image src="https://picsum.photos/400/200?random=2" alt="Pizza Palace" width={400} height={200} className={styles.cardImage} />
                <h3>Pizza Palace</h3>
                <p>Authentic Italian pizza with a modern twist.</p>
            </Link>
            <Link href="/shops/1" className={styles.card}>
                <Image src="https://picsum.photos/400/200?random=3" alt="Sushi Station" width={400} height={200} className={styles.cardImage} />
                <h3>Sushi Station</h3>
                <p>Fresh and delicious sushi, made to order.</p>
            </Link>
        </div>
    </section>
);

const FeaturedProducts = () => (
    <section id="products" className={styles.section}>
        <div className={styles.sectionHeader}>
            <h2>Featured Products</h2>
            <Link href="/shops">View All</Link>
        </div>
        <div className={styles.grid}>
            <div className={styles.card}>
                <Image src="https://picsum.photos/400/200?random=4" alt="Cheeseburger" width={400} height={200} className={styles.cardImage} />
                <h3>Cheeseburger</h3>
                <p>A classic cheeseburger with all the fixings.</p>
            </div>
            <div className={styles.card}>
                <Image src="https://picsum.photos/400/200?random=5" alt="Pepperoni Pizza" width={400} height={200} className={styles.cardImage} />
                <h3>Pepperoni Pizza</h3>
                <p>A delicious pepperoni pizza with a crispy crust.</p>
            </div>
            <div className={styles.card}>
                <Image src="https://picsum.photos/400/200?random=6" alt="California Roll" width={400} height={200} className={styles.cardImage} />
                <h3>California Roll</h3>
                <p>A refreshing California roll with crab and avocado.</p>
            </div>
        </div>
    </section>
);

const Testimonials = () => (
    <section className={styles.testimonials}>
        <div className={styles.sectionHeader}>
            <h2>What Our Customers Are Saying</h2>
        </div>
        <div className={styles.grid}>
            <div className={styles.testimonialCard}>
                <p>"Foodie is the best! I can always find what I'm looking for, and the delivery is always fast."</p>
                <h4>- John Doe</h4>
            </div>
            <div className={styles.testimonialCard}>
                <p>"I love the selection of restaurants and shops on Foodie. I can always find something new to try."</p>
                <h4>- Jane Doe</h4>
            </div>
            <div className={styles.testimonialCard}>
                <p>"Foodie has made my life so much easier. I don't know what I would do without it."</p>
                <h4>- Peter Jones</h4>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.footerContent}>
            <div className={styles.footerSection}>
                <h4>Foodie</h4>
                <p>Your favorite food, delivered with a smile.</p>
            </div>
            <div className={styles.footerSection}>
                <h4>Quick Links</h4>
                <ul>
                    <li><Link href="/shops">Shops</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className={styles.footerSection}>
                <h4>Follow Us</h4>
                <div className={styles.socials}>
                    <a href="#">Facebook</a>
                    <a href="#">Instagram</a>
                    <a href="#">Twitter</a>
                </div>
            </div>
        </div>
        <p>&copy; 2023 Foodie. All rights reserved.</p>
    </footer>
);

const MarketplaceLandingPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Foodie - Your favorite food, delivered with a smile.</title>
      <meta name="description" content="The best restaurants and shops in your city, delivered to your door." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main>
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <FeaturedShops />
      <FeaturedProducts />
      <Testimonials />
    </main>
    <Footer />
  </div>
);

export default MarketplaceLandingPage;
