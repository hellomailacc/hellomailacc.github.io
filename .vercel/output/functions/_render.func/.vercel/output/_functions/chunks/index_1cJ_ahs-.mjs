import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DHco00c9.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>This post is to demonstrate the year sorting capabilities.</p>";

				const frontmatter = {"title":"Year sorting example","description":"Nano groups posts by year.","date":"12/31/2023"};
				const file = "C:/Users/Mahmut/Desktop/Astro Projeler/astro-nano-mason/src/content/blog/07-year-sorting-example/index.md";
				const url = undefined;
				function rawContent() {
					return "\nThis post is to demonstrate the year sorting capabilities.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
