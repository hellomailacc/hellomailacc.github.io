/* empty css                                     */
import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_yI3J32nT.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/consts_CYcyDTup.mjs';
import { a as $$PageLayout, $ as $$Container, r as readingTime, b as $$Link } from '../../chunks/PageLayout_DacYgDoJ.mjs';
import { $ as $$FormattedDate } from '../../chunks/FormattedDate_Q5nibmWt.mjs';
import { $ as $$BackToPrev } from '../../chunks/BackToPrev_BGul7wvX.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://imahmut.com");
async function getStaticPaths() {
  const equipment = (await getCollection("equipment")).filter((post) => !post.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return equipment.map((equipment2) => ({
    params: { slug: equipment2.slug },
    props: equipment2
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const equipment = Astro2.props;
  const { Content } = await equipment.render();
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": equipment.data.title, "description": equipment.data.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="animate"> ${renderComponent($$result3, "BackToPrev", $$BackToPrev, { "href": "/equipment" }, { "default": ($$result4) => renderTemplate`
Back to equipment
` })} </div> <div class="space-y-1 my-10"> <div class="animate flex items-center gap-1.5"> <div class="font-base text-sm"> ${renderComponent($$result3, "FormattedDate", $$FormattedDate, { "date": equipment.data.date })} </div>
&bull;
<div class="font-base text-sm"> ${readingTime(equipment.body)} </div> </div> <div class="animate text-2xl font-semibold text-black dark:text-white"> ${equipment.data.title} </div> ${(equipment.data.demoURL || equipment.data.repoURL) && renderTemplate`<nav class="animate flex gap-1"> ${equipment.data.demoURL && renderTemplate`${renderComponent($$result3, "Link", $$Link, { "href": equipment.data.demoURL, "external": true }, { "default": ($$result4) => renderTemplate`
demo
` })}`} ${equipment.data.demoURL && equipment.data.repoURL && renderTemplate`<span>/</span>`} ${equipment.data.repoURL && renderTemplate`${renderComponent($$result3, "Link", $$Link, { "href": equipment.data.repoURL, "external": true }, { "default": ($$result4) => renderTemplate`
repo
` })}`} </nav>`} </div> <article class="animate"> ${renderComponent($$result3, "Content", Content, {})} </article> ` })} ` })}`;
}, "C:/Users/Mahmut/Desktop/Astro Projeler/astro-nano-mason/src/pages/equipment/[...slug].astro", void 0);

const $$file = "C:/Users/Mahmut/Desktop/Astro Projeler/astro-nano-mason/src/pages/equipment/[...slug].astro";
const $$url = "/equipment/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
