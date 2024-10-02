/* empty css                                  */
import { a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DHco00c9.mjs';
import 'kleur/colors';
import { g as getCollection, E as EQUIPMENT } from '../chunks/consts_hh0OUwqE.mjs';
import { $ as $$Container, a as $$PageLayout } from '../chunks/PageLayout_BaEagPjY.mjs';
import { $ as $$ArrowCard } from '../chunks/ArrowCard_B5-ToVUC.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const equipment = (await getCollection("equipment")).filter((equipment2) => !equipment2.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": EQUIPMENT.TITLE, "description": EQUIPMENT.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="space-y-10"> <div class="animate font-semibold text-black dark:text-white">
Equipment
</div> <ul class="animate flex flex-col gap-4"> ${equipment.map((equipment2) => renderTemplate`<li> ${renderComponent($$result3, "ArrowCard", $$ArrowCard, { "entry": equipment2 })} </li>`)} </ul> </div> ` })} ` })}`;
}, "C:/Users/Mahmut/Desktop/Astro Projeler/astro-nano-mason/src/pages/equipment/index.astro", void 0);

const $$file = "C:/Users/Mahmut/Desktop/Astro Projeler/astro-nano-mason/src/pages/equipment/index.astro";
const $$url = "/equipment";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
