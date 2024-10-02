import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DHco00c9.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Sit amet consectetur adipisicing elit. Iure illo neque tempora, voluptatem est quaerat voluptas praesentium ipsa dolorem dignissimos nulla ratione distinctio quae maiores eligendi nostrum? Quibusdam, debitis voluptatum, lorem ipsum dolor.</p>";

				const frontmatter = {"company":"Google","role":"Staff Software Engineer","dateStart":"11/27/2022","dateEnd":"Current"};
				const file = "C:/Users/Mahmut/Desktop/Astro Projeler/astro-nano-mason/src/content/work/google.md";
				const url = undefined;
				function rawContent() {
					return "\nSit amet consectetur adipisicing elit. Iure illo neque tempora, voluptatem est quaerat voluptas praesentium ipsa dolorem dignissimos nulla ratione distinctio quae maiores eligendi nostrum? Quibusdam, debitis voluptatum, lorem ipsum dolor.";
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
