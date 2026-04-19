import React, {memo} from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import {
  useVisibleBlogSidebarItems,
  BlogSidebarItemList,
} from '@docusaurus/plugin-content-blog/client';
import BlogSidebarContent from '@theme/BlogSidebar/Content';
import styles from '@docusaurus/theme-classic/lib/theme/BlogSidebar/Desktop/styles.module.css';

const authors = [
  {
    name: 'Ernests Ķauķis',
    title: 'Founder & Lead Developer',
    image: 'https://lurnly.fun/wp-content/uploads/2025/11/EKPFP.png',
    href: '/ernests-kaukis',
  },
  {
    name: 'Svens Olivers Ummers',
    title: 'Operations & Support Lead',
    image: 'https://lurnly.fun/wp-content/uploads/2025/11/SOUPFP.png',
    href: '/svens-olivers-ummers',
  },
];

const ListComponent = ({items}) => (
  <BlogSidebarItemList
    items={items}
    ulClassName={clsx(styles.sidebarItemList, 'clean-list')}
    liClassName={styles.sidebarItem}
    linkClassName={styles.sidebarItemLink}
    linkActiveClassName={styles.sidebarItemLinkActive}
  />
);

function BlogSidebarDesktop({sidebar}) {
  const items = useVisibleBlogSidebarItems(sidebar.items);
  return (
    <aside className="col col--3">
      <nav
        className={clsx(styles.sidebar, 'thin-scrollbar')}
        aria-label={translate({
          id: 'theme.blog.sidebar.navAriaLabel',
          message: 'Blog recent posts navigation',
          description: 'The ARIA label for recent posts in the blog sidebar',
        })}>
        <div style={{marginBottom: '1.5rem'}}>
          <div className={clsx(styles.sidebarItemTitle, 'margin-bottom--md')}>Authors</div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
            {authors.map((author) => (
              <a
                key={author.href}
                href={author.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.3rem 0',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <img
                  src={author.image}
                  alt={author.name}
                  style={{width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0}}
                />
                <div>
                  <div style={{fontWeight: '600', fontSize: '0.95rem', lineHeight: '1.3'}}>{author.name}</div>
                  <div style={{fontSize: '0.82rem', color: 'var(--ifm-color-emphasis-600)', lineHeight: '1.3'}}>{author.title}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className={clsx(styles.sidebarItemTitle, 'margin-bottom--md')}>
          {sidebar.title}
        </div>
        <BlogSidebarContent
          items={items}
          ListComponent={ListComponent}
          yearGroupHeadingClassName={styles.yearGroupHeading}
        />
      </nav>
    </aside>
  );
}

export default memo(BlogSidebarDesktop);
