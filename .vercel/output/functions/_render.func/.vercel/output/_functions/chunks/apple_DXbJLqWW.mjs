import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_yI3J32nT.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Voluptatem est quaerat voluptas praesentium ipsa dolorem dignissimos nulla ratione distinctio quae maiores eligendi nostrum? Quibusdam, debitis voluptatum, lorem ipsum dolor. Sit amet consectetur adipisicing elit. Iure illo neque tempora.</p>";

				const frontmatter = {"company":"Apple","role":"Software Engineer","dateStart":"01/01/2020","dateEnd":"11/27/2022"};
				const file = "C:/Users/Mahmut/Desktop/Astro Projeler/astro-nano-mason/src/content/work/apple.md";
				const url = undefined;
				function rawContent() {
					return "\nVoluptatem est quaerat voluptas praesentium ipsa dolorem dignissimos nulla ratione distinctio quae maiores eligendi nostrum? Quibusdam, debitis voluptatum, lorem ipsum dolor. Sit amet consectetur adipisicing elit. Iure illo neque tempora.";
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
