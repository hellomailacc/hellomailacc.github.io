import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DHco00c9.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>This post is to demonstrate the year sorting capabilities.</p>\n<p>If you are seeing this post, edit <code>src/content/08-draft-example</code> and enter <code>draft: true</code> in the metadata.</p>";

				const frontmatter = {"title":"Draft example","description":"Setting draft flag to true to hide this post.","date":"12/31/2022","draft":false};
				const file = "C:/Users/Mahmut/Desktop/Astro Projeler/astro-nano-mason/src/content/blog/08-draft-example/index.md";
				const url = undefined;
				function rawContent() {
					return "\nThis post is to demonstrate the year sorting capabilities.\n\nIf you are seeing this post, edit `src/content/08-draft-example` and enter `draft: true` in the metadata.\n\n";
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
