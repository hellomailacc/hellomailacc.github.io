/* empty css                                     */
import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_DHco00c9.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/consts_BZEPANEe.mjs';
import { a as $$PageLayout, $ as $$Container, r as readingTime } from '../../chunks/PageLayout_3TpIZazc.mjs';
import { $ as $$FormattedDate } from '../../chunks/FormattedDate_DU5D1vku.mjs';
import { $ as $$BackToPrev } from '../../chunks/BackToPrev_DL14oA1U.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://imahmut.com");
async function getStaticPaths() {
  const posts = (await getCollection("blog")).filter((post) => !post.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": post.data.title, "description": post.data.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="animate"> ${renderComponent($$result3, "BackToPrev", $$BackToPrev, { "href": "/blog" }, { "default": ($$result4) => renderTemplate`
Back to blog
` })} </div> <div class="space-y-1 my-10"> <div class="animate flex items-center gap-1.5"> <div class="font-base text-sm"> ${renderComponent($$result3, "FormattedDate", $$FormattedDate, { "date": post.data.date })} </div>
&bull;
<div class="font-base text-sm"> ${readingTime(post.body)} </div> </div> <div class="animate text-2xl font-semibold text-black dark:text-white"> ${post.data.title} </div> </div> <article class="animate"> ${renderComponent($$result3, "Content", Content, {})} </article> ` })} ` })}`;
}, "C:/Users/Mahmut/Desktop/Astro Projeler/astro-nano-mason/src/pages/blog/[...slug].astro", void 0);

const $$file = "C:/Users/Mahmut/Desktop/Astro Projeler/astro-nano-mason/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
