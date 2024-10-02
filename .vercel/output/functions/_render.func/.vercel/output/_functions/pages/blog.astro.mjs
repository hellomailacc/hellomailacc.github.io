/* empty css                                  */
import { a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_yI3J32nT.mjs';
import 'kleur/colors';
import { g as getCollection, B as BLOG } from '../chunks/consts_BrlzcrFA.mjs';
import { $ as $$Container, a as $$PageLayout } from '../chunks/PageLayout_B2Qe7L0a.mjs';
import { $ as $$ArrowCard } from '../chunks/ArrowCard_C9qReQGj.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const data = (await getCollection("blog")).filter((post) => !post.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const posts = data.reduce((acc, post) => {
    const year = post.data.date.getFullYear().toString();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {});
  const years = Object.keys(posts).sort((a, b) => parseInt(b) - parseInt(a));
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": BLOG.TITLE, "description": BLOG.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="space-y-10"> <div class="animate font-semibold text-black dark:text-white">
Blog
</div> <div class="space-y-4"> ${years.map((year) => renderTemplate`<section class="animate space-y-4"> <div class="font-semibold text-black dark:text-white"> ${year} </div> <div> <ul class="flex flex-col gap-4"> ${posts[year].map((post) => renderTemplate`<li> ${renderComponent($$result3, "ArrowCard", $$ArrowCard, { "entry": post })} </li>`)} </ul> </div> </section>`)} </div> </div> ` })} ` })}`;
}, "C:/Users/Mahmut/Desktop/Astro Projeler/astro-nano-mason/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/Mahmut/Desktop/Astro Projeler/astro-nano-mason/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
