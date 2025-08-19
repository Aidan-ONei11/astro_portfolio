import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: 'ONeill Web Dev | Portfolio',
    description: 'My journey as a web developer',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}