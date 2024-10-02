import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DHco00c9.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>The <code>blog</code> collections is found in <code>src/content/blog</code>.</p>\n<p>Working with the <code>blog</code> collection:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>📁 /src/content/blog</span></span>\n<span class=\"line\"><span>└── 📁 post-1</span></span>\n<span class=\"line\"><span>      └── 📄 index.md</span></span>\n<span class=\"line\"><span>└── 📁 post-2</span></span>\n<span class=\"line\"><span>      └── 📄 index.mdx</span></span>\n<span class=\"line\"><span></span></span></code></pre>\n<p>In the above example, two static pages will be generated, based on the existence of a classic markdown <code>.md</code> file or a jsx compatible markdown <code>.mdx</code> file. The folder name represents the slug:</p>\n<ul>\n<li><code>https://example.com/blog/post-1</code></li>\n<li><code>https://example.com/blog/post-2</code></li>\n</ul>\n<p>All content must be preceded by required metadata in the markdown file in <code>yaml</code> format, and be enclosed by triple dashes. --- ---</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"mdx\"><code><span class=\"line\"><span style=\"color:#79B8FF;font-weight:bold\">---</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">title: \"My cool new title\"</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">description: \"A description of my content.\"</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">date: \"Mar 22 2024\"</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">draft: false</span></span>\n<span class=\"line\"><span style=\"color:#79B8FF;font-weight:bold\">---</span></span>\n<span class=\"line\"></span></code></pre>\n<p>Metadata fields</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th align=\"left\">Field</th><th align=\"left\">Req</th><th align=\"left\">Type</th><th align=\"left\">Remarks</th></tr></thead><tbody><tr><td align=\"left\">title</td><td align=\"left\">Yes</td><td align=\"left\">string</td><td align=\"left\">Title of the content. Used in SEO and RSS.</td></tr><tr><td align=\"left\">description</td><td align=\"left\">Yes</td><td align=\"left\">string</td><td align=\"left\">Description of the content. Used in SEO and RSS.</td></tr><tr><td align=\"left\">date</td><td align=\"left\">Yes</td><td align=\"left\">string</td><td align=\"left\">Must be a valid date string (able to be parsed).</td></tr><tr><td align=\"left\">draft</td><td align=\"left\">No*</td><td align=\"left\">boolean</td><td align=\"left\">draft: true, content will not be published.</td></tr></tbody></table>\n<p>All that’s left to do is write your content under the metadata.</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"mdx\"><code><span class=\"line\"><span style=\"color:#79B8FF;font-weight:bold\">---</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">title: \"My cool new title\"</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">description: \"A description of my content.\"</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">date: \"Mar 22 2024\"</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">draft: false</span></span>\n<span class=\"line\"><span style=\"color:#79B8FF;font-weight:bold\">---</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#79B8FF;font-weight:bold\">### Woot</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">This is a paragraph.</span></span>\n<span class=\"line\"></span></code></pre>\n<p>🎉 Congrats, you are now a blogger.</p>";

				const frontmatter = {"title":"Blog Collection","description":"How to add posts to your blog.","date":"Mar 21 2024"};
				const file = "C:/Users/Mahmut/Desktop/Astro Projeler/astro-nano-mason/src/content/blog/02-blog-collection/index.md";
				const url = undefined;
				function rawContent() {
					return "\nThe `blog` collections is found in `src/content/blog`.\n\nWorking with the `blog` collection:\n\n```\n📁 /src/content/blog\n└── 📁 post-1\n      └── 📄 index.md\n└── 📁 post-2\n      └── 📄 index.mdx\n```\n\nIn the above example, two static pages will be generated, based on the existence of a classic markdown `.md` file or a jsx compatible markdown `.mdx` file. The folder name represents the slug:\n\n- `https://example.com/blog/post-1`\n- `https://example.com/blog/post-2`\n\n\nAll content must be preceded by required metadata in the markdown file in `yaml` format, and be enclosed by triple dashes. --- ---\n\n```mdx\n---\ntitle: \"My cool new title\"\ndescription: \"A description of my content.\"\ndate: \"Mar 22 2024\"\ndraft: false\n---\n```\n\nMetadata fields\n\n| Field       | Req | Type    | Remarks                                          |\n| :---------- | :-- | :------ | :----------------------------------------------- |\n| title       | Yes | string  | Title of the content. Used in SEO and RSS.       |\n| description | Yes | string  | Description of the content. Used in SEO and RSS. |\n| date        | Yes | string  | Must be a valid date string (able to be parsed). |\n| draft       | No* | boolean | draft: true, content will not be published.      |\n\nAll that's left to do is write your content under the metadata.\n\n```mdx\n---\ntitle: \"My cool new title\"\ndescription: \"A description of my content.\"\ndate: \"Mar 22 2024\"\ndraft: false\n---\n\n### Woot\n\nThis is a paragraph.\n```\n\n🎉 Congrats, you are now a blogger.";
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
