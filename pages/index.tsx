
import Head from 'next/head';
import styles from '@/styles/Marketplace.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import { getShops, Shop } from '@/lib/data';

const Hero = () => (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Your favorite food, delivered with a smile.</h1>
        <p className={styles.heroSubtitle}>The best restaurants and shops in your city, delivered to your door.</p>
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

interface FeaturedShopsProps {
    shops: Shop[];
}

const FeaturedShops = ({ shops }: FeaturedShopsProps) => (
    <section id="shops" className={styles.section}>
        <div className={styles.sectionHeader}>
            <h2>Featured Shops</h2>
        </div>
        <div className={styles.grid}>
            {shops.map(shop => (
                <Link href={`/shops/${shop.id}`} key={shop.id} className={styles.card}>
                    <Image src={shop.coverImage} alt={shop.name} width={400} height={200} className={styles.cardImage} />
                    <h3>{shop.name}</h3>
                    <p>{shop.cuisine}</p>
                </Link>
            ))}
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
                <p>"Food Crawl is the best! I can always find what I'm looking for, and the delivery is always fast."</p>
                <h4>- John Doe</h4>
            </div>
            <div className={styles.testimonialCard}>
                <p>"I love the selection of restaurants and shops on Food Crawl. I can always find something new to try."</p>
                <h4>- Jane Doe</h4>
            </div>
            <div className={styles.testimonialCard}>
                <p>"Food Crawl has made my life so much easier. I don't know what I would do without it."</p>
                <h4>- Peter Jones</h4>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.footerContent}>
            <div className={styles.footerSection}>
                <h4>Food Crawl</h4>
                <p>Your favorite food, delivered with a smile.</p>
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
        <p>&copy; 2023 Food Crawl. All rights reserved.</p>
    </footer>
);

interface MarketplaceLandingPageProps {
    shops: Shop[];
}

const MarketplaceLandingPage = ({ shops }: MarketplaceLandingPageProps) => (
  <div className={styles.container}>
    <Head>
      <title>Food Crawl - Your favorite food, delivered with a smile.</title>
      <meta name="description" content="The best restaurants and shops in your city, delivered to your door." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main>
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <FeaturedShops shops={shops} />
      <Testimonials />
    </main>
    <Footer />
  </div>
);

export async function getStaticProps() {
    const shops = getShops();
    return {
        props: {
            shops,
        },
    };
}

export default MarketplaceLandingPage;
