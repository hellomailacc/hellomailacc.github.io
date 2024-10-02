const id = "03-projects-collection/index.md";
						const collection = "blog";
						const slug = "03-projects-collection";
						const body = "\nThe `projects` collections is found in `src/content/projects`.\n\nWorking with the `projects` collection:\n\n```\n📁 /src/content/projects\n└── 📁 project-1\n      └── 📄 index.md\n└── 📁 projects-2\n      └── 📄 index.mdx\n```\n\nIn the above example, two static pages will be generated, based on the existence of a classic markdown `.md` file or a jsx compatible markdown `.mdx` file. The folder name represents the slug:\n\n- `https://example.com/projects/project-1`\n- `https://example.com/projects/project-2`\n\n\nAll content must be preceded by required metadata in the markdown file in `yaml` format, and be enclosed by triple dashes. --- ---\n\n```mdx\n---\ntitle: \"My awesome project\"\ndescription: \"A description of my project.\"\ndate: \"Mar 22 2024\"\ndraft: false\n---\n```\n\nMetadata fields\n\n| Field       | Req | Type    | Remarks                                          |\n| :---------- | :-- | :------ | :----------------------------------------------- |\n| title       | Yes | string  | Title of the content. Used in SEO and RSS.       |\n| description | Yes | string  | Description of the content. Used in SEO and RSS. |\n| date        | Yes | string  | Must be a valid date string (able to be parsed). |\n| draft       | No  | boolean | draft: true, content will not be published.      |\n| demoURL     | No  | string  | Link to live project demo, if applicable.        |\n| repoURL     | No  | string  | Link to project repo, if applicable.             |\n\nAll that's left to do is write your content under the metadata.\n\n```mdx\n---\ntitle: \"My awesome project\"\ndescription: \"A description of my project.\"\ndate: \"Mar 22 2024\"\ndraft: false\n---\n\n### Woot\n\nThis is a paragraph about my project.\n```\n\n🎉 Congrats, you are now a blogger, _and_ developer.";
						const data = {title:"Projects Collection",description:"How to add projects to your portfolio.",date:new Date(1710882000000)};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/Mahmut/Desktop/Astro Projeler/astro-nano-mason/src/content/blog/03-projects-collection/index.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
