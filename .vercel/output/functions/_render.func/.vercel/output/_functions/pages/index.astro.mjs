/* empty css                                  */
import { a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DHco00c9.mjs';
import 'kleur/colors';
import { g as getCollection, S as SITE, a as SOCIALS, H as HOME } from '../chunks/consts_hh0OUwqE.mjs';
import { $ as $$Container, b as $$Link, a as $$PageLayout } from '../chunks/PageLayout_BaEagPjY.mjs';
import { $ as $$ArrowCard } from '../chunks/ArrowCard_B5-ToVUC.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  (await getCollection("blog")).filter((post) => !post.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf()).slice(0, SITE.NUM_POSTS_ON_HOMEPAGE);
  const projects = (await getCollection("projects")).filter((project) => !project.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf()).slice(0, SITE.NUM_PROJECTS_ON_HOMEPAGE);
  const equipment = (await getCollection("equipment")).filter((equipment2) => !equipment2.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf()).slice(0, SITE.NUM_EQUIPMENT_ON_HOMEPAGE);
  const allwork = (await getCollection("work")).sort((a, b) => new Date(b.data.dateStart).valueOf() - new Date(a.data.dateStart).valueOf()).slice(0, SITE.NUM_WORKS_ON_HOMEPAGE);
  await Promise.all(
    allwork.map(async (item) => {
      const { Content } = await item.render();
      return { ...item, Content };
    })
  );
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": HOME.TITLE, "description": HOME.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2 class="animate text-2xl font-semibold text-black dark:text-white">
Bonjour, je m'appelle Husamettin <span class="text-xl">👋🏻</span> </h2> <div class="space-y-16"> <section> <article class="space-y-4"> <p class="animate">
En tant qu'artisan plâtrier, je suis ici pour embellir et renforcer la durabilité de vos espaces de vie. Avec des années d'expérience, des matériaux de qualité et des techniques expertes, je réalise tous vos travaux de plâtrage avec soin.
</p> <h3 class="animate font-semibold text-black dark:text-white">
Nos Services ;
</h3> <p class="animate"></p><ul> <li> <h4 class="font-semibold text-black dark:text-white">Plâtrage Intérieur ; </h4>
Je redonne vie à l'intérieur de votre maison en créant une ambiance esthétique et spacieuse.
</li> <li> <h4 class="font-semibold text-black dark:text-white">Plâtrage Extérieur ; </h4>
Je protège vos façades pour garantir la longévité de votre structure.
</li> <li> <h4 class="font-semibold text-black dark:text-white">Effets de Texture et Éclairage ; </h4>
J'embellie vos espaces avec des textures et techniques d'éclairage uniques.
</li> </ul>  <h3 class="animate font-semibold text-black dark:text-white">
Pourquoi Choisir Nos Services ?
</h3> <p class="animate"></p><ul> <li> <h4 class="font-semibold text-black dark:text-white">Approche Professionnelle ; </h4>
Je m'engage à aborder chaque projet avec dévouement et à respecter les délais.
</li> <li> <h4 class="font-semibold text-black dark:text-white">Garantie de Qualité ; </h4>
Je ne fais jamais de compromis sur la qualité des matériaux utilisés.
</li> <li> <h4 class="font-semibold text-black dark:text-white">Effets de Texture et Éclairage ; </h4>
J'embellie vos espaces avec des textures et techniques d'éclairage uniques.
</li> <li> <h4 class="font-semibold text-black dark:text-white">Satisfaction Client ; </h4>
La satisfaction de mes clients est toujours ma priorité.
</li> </ul>  <p class="animate">
Si vous souhaitez rénover votre maison ou votre lieu de travail, n'hésitez pas à me contacter. Créons ensemble l'espace de vos rêves!
</p> </article> </section> <section class="animate space-y-6"> <div class="flex flex-wrap gap-y-2 items-center justify-between"> <h5 class="font-semibold text-black dark:text-white">
Projets récents
</h5> ${renderComponent($$result3, "Link", $$Link, { "href": "/projects" }, { "default": ($$result4) => renderTemplate`
Voir tous les projets
` })} </div> <ul class="flex flex-col gap-4"> ${projects.map((project) => renderTemplate`<li> ${renderComponent($$result3, "ArrowCard", $$ArrowCard, { "entry": project })} </li>`)} </ul> </section> <section class="animate space-y-6"> <div class="flex flex-wrap gap-y-2 items-center justify-between"> <h5 class="font-semibold text-black dark:text-white">
Mon Équipement
</h5> </div> <ul class="flex flex-col gap-4"> ${equipment.map((equipment2) => renderTemplate`<li> ${renderComponent($$result3, "ArrowCard", $$ArrowCard, { "entry": equipment2 })} </li>`)} </ul> </section> <section class="animate space-y-4"> <h5 class="font-semibold text-black dark:text-white">
Connectons-nous
</h5> <article> <p>
Si vous souhaitez me contacter à propos de quelque chose ou simplement pour me dire bonjour, contactez-moi sur les réseaux sociaux ou envoyez-moi un e-mail.
</p> </article> <ul class="flex flex-wrap gap-2"> ${SOCIALS.map((SOCIAL) => renderTemplate`<li class="flex gap-x-2 text-nowrap"> ${renderComponent($$result3, "Link", $$Link, { "href": SOCIAL.HREF, "external": true, "aria-label": `${SITE.NAME} on ${SOCIAL.NAME}` }, { "default": ($$result4) => renderTemplate`${SOCIAL.NAME}` })} ${"/"} </li>`)} <li class="line-clamp-1"> ${renderComponent($$result3, "Link", $$Link, { "href": `mailto:${SITE.EMAIL}`, "aria-label": `Email ${SITE.NAME}` }, { "default": ($$result4) => renderTemplate`${SITE.EMAIL}` })} </li> <li> ${renderComponent($$result3, "Link", $$Link, { "href": `https://www.google.com/maps/place/24+Rue+de+la+Reine+Jeanne,+06000+Nice,+Fransa/@43.7058645,7.2584455,17z/data=!3m1!4b1!4m6!3m5!1s0x12cdd0066111cfdb:0xd87c9010dd2c8cdb!8m2!3d43.7058607!4d7.2610204!16s%2Fg%2F11b8v7gg2n?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D` }, { "default": ($$result4) => renderTemplate`
Adresse ;  24 Rue de la Reine Jeanne Nice, Provence-Alpes-Côte d'Azur
` })} </li> </ul> </section> </div> ` })} ` })}`;
}, "C:/Users/Mahmut/Desktop/Astro Projeler/astro-nano-mason/src/pages/index.astro", void 0);

const $$file = "C:/Users/Mahmut/Desktop/Astro Projeler/astro-nano-mason/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
