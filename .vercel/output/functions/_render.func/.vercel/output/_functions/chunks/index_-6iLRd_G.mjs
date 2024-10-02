import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DHco00c9.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>The <code>projects</code> collections is found in <code>src/content/projects</code>.</p>\n<p>Working with the <code>projects</code> collection:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>📁 /src/content/projects</span></span>\n<span class=\"line\"><span>└── 📁 project-1</span></span>\n<span class=\"line\"><span>      └── 📄 index.md</span></span>\n<span class=\"line\"><span>└── 📁 projects-2</span></span>\n<span class=\"line\"><span>      └── 📄 index.mdx</span></span>\n<span class=\"line\"><span></span></span></code></pre>\n<p>In the above example, two static pages will be generated, based on the existence of a classic markdown <code>.md</code> file or a jsx compatible markdown <code>.mdx</code> file. The folder name represents the slug:</p>\n<ul>\n<li><code>https://example.com/projects/project-1</code></li>\n<li><code>https://example.com/projects/project-2</code></li>\n</ul>\n<p>All content must be preceded by required metadata in the markdown file in <code>yaml</code> format, and be enclosed by triple dashes. --- ---</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"mdx\"><code><span class=\"line\"><span style=\"color:#79B8FF;font-weight:bold\">---</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">title: \"My awesome project\"</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">description: \"A description of my project.\"</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">date: \"Mar 22 2024\"</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">draft: false</span></span>\n<span class=\"line\"><span style=\"color:#79B8FF;font-weight:bold\">---</span></span>\n<span class=\"line\"></span></code></pre>\n<p>Metadata fields</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th align=\"left\">Field</th><th align=\"left\">Req</th><th align=\"left\">Type</th><th align=\"left\">Remarks</th></tr></thead><tbody><tr><td align=\"left\">title</td><td align=\"left\">Yes</td><td align=\"left\">string</td><td align=\"left\">Title of the content. Used in SEO and RSS.</td></tr><tr><td align=\"left\">description</td><td align=\"left\">Yes</td><td align=\"left\">string</td><td align=\"left\">Description of the content. Used in SEO and RSS.</td></tr><tr><td align=\"left\">date</td><td align=\"left\">Yes</td><td align=\"left\">string</td><td align=\"left\">Must be a valid date string (able to be parsed).</td></tr><tr><td align=\"left\">draft</td><td align=\"left\">No</td><td align=\"left\">boolean</td><td align=\"left\">draft: true, content will not be published.</td></tr><tr><td align=\"left\">demoURL</td><td align=\"left\">No</td><td align=\"left\">string</td><td align=\"left\">Link to live project demo, if applicable.</td></tr><tr><td align=\"left\">repoURL</td><td align=\"left\">No</td><td align=\"left\">string</td><td align=\"left\">Link to project repo, if applicable.</td></tr></tbody></table>\n<p>All that’s left to do is write your content under the metadata.</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"mdx\"><code><span class=\"line\"><span style=\"color:#79B8FF;font-weight:bold\">---</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">title: \"My awesome project\"</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">description: \"A description of my project.\"</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">date: \"Mar 22 2024\"</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">draft: false</span></span>\n<span class=\"line\"><span style=\"color:#79B8FF;font-weight:bold\">---</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#79B8FF;font-weight:bold\">### Woot</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">This is a paragraph about my project.</span></span>\n<span class=\"line\"></span></code></pre>\n<p>🎉 Congrats, you are now a blogger, <em>and</em> developer.</p>";

				const frontmatter = {"title":"Projects Collection","description":"How to add projects to your portfolio.","date":"Mar 20 2024"};
				const file = "C:/Users/Mahmut/Desktop/Astro Projeler/astro-nano-mason/src/content/blog/03-projects-collection/index.md";
				const url = undefined;
				function rawContent() {
					return "\nThe `projects` collections is found in `src/content/projects`.\n\nWorking with the `projects` collection:\n\n```\n📁 /src/content/projects\n└── 📁 project-1\n      └── 📄 index.md\n└── 📁 projects-2\n      └── 📄 index.mdx\n```\n\nIn the above example, two static pages will be generated, based on the existence of a classic markdown `.md` file or a jsx compatible markdown `.mdx` file. The folder name represents the slug:\n\n- `https://example.com/projects/project-1`\n- `https://example.com/projects/project-2`\n\n\nAll content must be preceded by required metadata in the markdown file in `yaml` format, and be enclosed by triple dashes. --- ---\n\n```mdx\n---\ntitle: \"My awesome project\"\ndescription: \"A description of my project.\"\ndate: \"Mar 22 2024\"\ndraft: false\n---\n```\n\nMetadata fields\n\n| Field       | Req | Type    | Remarks                                          |\n| :---------- | :-- | :------ | :----------------------------------------------- |\n| title       | Yes | string  | Title of the content. Used in SEO and RSS.       |\n| description | Yes | string  | Description of the content. Used in SEO and RSS. |\n| date        | Yes | string  | Must be a valid date string (able to be parsed). |\n| draft       | No  | boolean | draft: true, content will not be published.      |\n| demoURL     | No  | string  | Link to live project demo, if applicable.        |\n| repoURL     | No  | string  | Link to project repo, if applicable.             |\n\nAll that's left to do is write your content under the metadata.\n\n```mdx\n---\ntitle: \"My awesome project\"\ndescription: \"A description of my project.\"\ndate: \"Mar 22 2024\"\ndraft: false\n---\n\n### Woot\n\nThis is a paragraph about my project.\n```\n\n🎉 Congrats, you are now a blogger, _and_ developer.";
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
