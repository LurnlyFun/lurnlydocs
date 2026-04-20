import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
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
        <p className={styles.heroTagline}>
          {translate({id: 'homepage.hero.tagline', message: 'Official Documentation'})}
        </p>
        <Link to="/docs/welcome" className={styles.heroBtn}>
          {translate({id: 'homepage.hero.cta', message: 'Get Started →'})}
        </Link>
      </div>
    </div>
  );
}

function DocCards() {
  const cards = [
    {
      icon: '❓',
      title: translate({id: 'homepage.docs.faq.title', message: 'FAQ'}),
      desc: translate({id: 'homepage.docs.faq.desc', message: 'Answers to the most common questions about Lurnly.'}),
      to: '#',
    },
    {
      icon: '🚀',
      title: translate({id: 'homepage.docs.gettingStarted.title', message: 'Getting Started'}),
      desc: translate({id: 'homepage.docs.gettingStarted.desc', message: 'Set up Lurnly and create your very first deck.'}),
      to: '/docs/createdecks/getting-started',
    },
    {
      icon: '⚙️',
      title: translate({id: 'homepage.docs.advanced.title', message: 'Advanced Guide'}),
      desc: translate({id: 'homepage.docs.advanced.desc', message: 'Dive deep into every feature Lurnly has to offer.'}),
      to: '#',
    },
  ];

  return (
    <section className={styles.docCards}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          {translate({id: 'homepage.docs.title', message: 'Explore the Docs'})}
        </h2>
        <div className={styles.cardsGrid}>
          {cards.map(({ icon, title, desc, to }) => (
            <Link key={title} to={to} className={styles.card}>
              {to === '#' && (
                <span className={styles.cardBadge}>
                  {translate({id: 'homepage.docs.comingSoon', message: 'Coming Soon'})}
                </span>
              )}
              <span className={styles.cardIcon}>{icon}</span>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{desc}</p>
              <span className={styles.cardArrow}>
                {translate({id: 'homepage.docs.learnMore', message: 'Learn more →'})}
              </span>
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
        <h2 className={styles.sectionTitle}>
          {translate({id: 'homepage.news.title', message: 'Latest News'})}
        </h2>
        {posts.length === 0 ? (
          <p className={styles.noNews}>
            {translate({id: 'homepage.news.noPosts', message: 'No posts published yet.'})}
          </p>
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
                  <span className={styles.newsReadMore}>
                    {translate({id: 'homepage.news.readMore', message: 'Read more →'})}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
        <div className={styles.newsFooter}>
          <Link to="/blog" className={styles.allNewsBtn}>
            {translate({id: 'homepage.news.viewAll', message: 'View All Updates →'})}
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
        <h2 className={styles.ctaTitle}>
          {translate({id: 'homepage.cta.title', message: 'Ready to start learning?'})}
        </h2>
        <p className={styles.ctaSubtitle}>
          {translate({id: 'homepage.cta.subtitle', message: 'Lurnly is 100% free — no account needed.'})}
        </p>
        <Link to="https://lurnly.fun" className={styles.ctaBtn}>
          {translate({id: 'homepage.cta.btn', message: 'Open Lurnly →'})}
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
