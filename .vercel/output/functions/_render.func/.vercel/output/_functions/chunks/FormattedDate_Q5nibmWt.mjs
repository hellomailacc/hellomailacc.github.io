import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_yI3J32nT.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://imahmut.com");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric"
  })} </time>`;
}, "C:/Users/Mahmut/Desktop/Astro Projeler/astro-nano-mason/src/components/FormattedDate.astro", void 0);

export { $$FormattedDate as $ };
