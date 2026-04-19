export default function blogMetadataPlugin() {
  return {
    name: 'blog-metadata-plugin',
    async allContentLoaded({ allContent, actions }) {
      const blogPosts =
        allContent['docusaurus-plugin-content-blog']?.default?.blogPosts ?? [];

      actions.setGlobalData({
        posts: blogPosts.map(({ id, metadata }) => ({
          id,
          permalink: metadata.permalink,
          title: metadata.title,
          description: metadata.description,
          date: metadata.date,
          formattedDate: metadata.formattedDate,
          image: metadata.frontMatter?.image ?? null,
          tags: metadata.tags,
        })),
      });
    },
  };
}
