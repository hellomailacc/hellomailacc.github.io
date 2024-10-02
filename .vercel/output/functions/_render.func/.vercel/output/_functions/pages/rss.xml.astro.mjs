import rss from '@astrojs/rss';
import { g as getCollection, H as HOME } from '../chunks/consts_CYcyDTup.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  const blog = (await getCollection("blog")).filter((post) => !post.data.draft);
  const projects = (await getCollection("projects")).filter((project) => !project.data.draft);
  const items = [...blog, ...projects].sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf());
  return rss({
    title: HOME.TITLE,
    description: HOME.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.date,
      link: `/${item.collection}/${item.slug}/`
    }))
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
