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
  const projects = (await getCollection("projects")).filter((post) => !post.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return projects.map((project) => ({
    params: { slug: project.slug },
    props: project
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const project = Astro2.props;
  const { Content } = await project.render();
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": project.data.title, "description": project.data.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="animate"> ${renderComponent($$result3, "BackToPrev", $$BackToPrev, { "href": "/projects" }, { "default": ($$result4) => renderTemplate`
Back to projects
` })} </div> <div class="space-y-1 my-10"> <div class="animate flex items-center gap-1.5"> <div class="font-base text-sm"> ${renderComponent($$result3, "FormattedDate", $$FormattedDate, { "date": project.data.date })} </div>
&bull;
<div class="font-base text-sm"> ${readingTime(project.body)} </div> </div> <div class="animate text-2xl font-semibold text-black dark:text-white"> ${project.data.title} </div> ${(project.data.demoURL || project.data.repoURL) && renderTemplate`<nav class="animate flex gap-1"> ${project.data.demoURL && renderTemplate`${renderComponent($$result3, "Link", $$Link, { "href": project.data.demoURL, "external": true }, { "default": ($$result4) => renderTemplate`
demo
` })}`} ${project.data.demoURL && project.data.repoURL && renderTemplate`<span>/</span>`} ${project.data.repoURL && renderTemplate`${renderComponent($$result3, "Link", $$Link, { "href": project.data.repoURL, "external": true }, { "default": ($$result4) => renderTemplate`
repo
` })}`} </nav>`} </div> <article class="animate"> ${renderComponent($$result3, "Content", Content, {})} </article> ` })} ` })}`;
}, "C:/Users/Mahmut/Desktop/Astro Projeler/astro-nano-mason/src/pages/projects/[...slug].astro", void 0);

const $$file = "C:/Users/Mahmut/Desktop/Astro Projeler/astro-nano-mason/src/pages/projects/[...slug].astro";
const $$url = "/projects/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
