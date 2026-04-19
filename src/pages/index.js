import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { usePluginData } from '@docusaurus/useGlobalData';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function Hero() {
  return (
    <div className={styles.heroBanner}>
      <div className={styles.dotLeft} />
      <div className={styles.dotRight} />
      <div className={styles.heroGlow} />
      <div className={styles.heroContent}>
        <img
          src="/img/Lurnly-LOGO+BRANDNAME.png"
          alt="Lurnly"
          className={styles.heroLogo}
        />
        <p className={styles.heroTagline}>Official Documentation</p>
        <Link to="/docs/welcome" className={styles.heroBtn}>
          Get Started →
        </Link>
      </div>
    </div>
  );
}

const DOC_CARDS = [
  {
    icon: '❓',
    title: 'FAQ',
    desc: 'Answers to the most common questions about Lurnly.',
    to: '#',
  },
  {
    icon: '🚀',
    title: 'Getting Started',
    desc: 'Set up Lurnly and create your very first deck.',
    to: '/docs/intro',
  },
  {
    icon: '⚙️',
    title: 'Advanced Guide',
    desc: 'Dive deep into every feature Lurnly has to offer.',
    to: '#',
  },
];

function DocCards() {
  return (
    <section className={styles.docCards}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Explore the Docs</h2>
        <div className={styles.cardsGrid}>
          {DOC_CARDS.map(({ icon, title, desc, to }) => (
            <Link key={title} to={to} className={styles.card}>
              {to === '#' && (
                <span className={styles.cardBadge}>Coming Soon</span>
              )}
              <span className={styles.cardIcon}>{icon}</span>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{desc}</p>
              <span className={styles.cardArrow}>Learn more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function LatestNews() {
  const data = usePluginData('blog-metadata-plugin');
  const posts = (data?.posts ?? []).slice(0, 3);

  return (
    <section className={styles.latestNews}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Latest News</h2>
        {posts.length === 0 ? (
          <p className={styles.noNews}>No posts published yet.</p>
        ) : (
          <div className={styles.newsGrid}>
            {posts.map((post) => (
              <Link key={post.id} to={post.permalink} className={styles.newsCard}>
                {post.image && (
                  <div className={styles.newsThumb}>
                    <img src={post.image} alt={post.title} />
                  </div>
                )}
                <div className={styles.newsBody}>
                  <span className={styles.newsDate}>{post.formattedDate}</span>
                  <h3 className={styles.newsTitle}>{post.title}</h3>
                  <p className={styles.newsDesc}>{post.description}</p>
                  <span className={styles.newsReadMore}>Read more →</span>
                </div>
              </Link>
            ))}
          </div>
        )}
        <div className={styles.newsFooter}>
          <Link to="/blog" className={styles.allNewsBtn}>
            View All Updates →
          </Link>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaDots} />
      <div className={styles.container}>
        <h2 className={styles.ctaTitle}>Ready to start learning?</h2>
        <p className={styles.ctaSubtitle}>
          Lurnly is 100% free — no account needed.
        </p>
        <Link to="https://lurnly.fun" className={styles.ctaBtn}>
          Open Lurnly →
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <Hero />
      <main>
        <DocCards />
        <LatestNews />
        <CTA />
      </main>
    </Layout>
  );
}
