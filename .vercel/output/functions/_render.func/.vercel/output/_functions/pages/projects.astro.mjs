/* empty css                                  */
import { a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_yI3J32nT.mjs';
import 'kleur/colors';
import { g as getCollection, P as PROJECTS } from '../chunks/consts_CYcyDTup.mjs';
import { $ as $$Container, a as $$PageLayout } from '../chunks/PageLayout_DacYgDoJ.mjs';
import { $ as $$ArrowCard } from '../chunks/ArrowCard_C9qReQGj.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const projects = (await getCollection("projects")).filter((project) => !project.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": PROJECTS.TITLE, "description": PROJECTS.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="space-y-10"> <div class="animate font-semibold text-black dark:text-white">
Projects
</div> <ul class="animate flex flex-col gap-4"> ${projects.map((project) => renderTemplate`<li> ${renderComponent($$result3, "ArrowCard", $$ArrowCard, { "entry": project })} </li>`)} </ul> </div> ` })} ` })}`;
}, "C:/Users/Mahmut/Desktop/Astro Projeler/astro-nano-mason/src/pages/projects/index.astro", void 0);

const $$file = "C:/Users/Mahmut/Desktop/Astro Projeler/astro-nano-mason/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
