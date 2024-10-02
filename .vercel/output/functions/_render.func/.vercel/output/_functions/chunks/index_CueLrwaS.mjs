const id = "02-blog-collection/index.md";
						const collection = "blog";
						const slug = "02-blog-collection";
						const body = "\nThe `blog` collections is found in `src/content/blog`.\n\nWorking with the `blog` collection:\n\n```\n📁 /src/content/blog\n└── 📁 post-1\n      └── 📄 index.md\n└── 📁 post-2\n      └── 📄 index.mdx\n```\n\nIn the above example, two static pages will be generated, based on the existence of a classic markdown `.md` file or a jsx compatible markdown `.mdx` file. The folder name represents the slug:\n\n- `https://example.com/blog/post-1`\n- `https://example.com/blog/post-2`\n\n\nAll content must be preceded by required metadata in the markdown file in `yaml` format, and be enclosed by triple dashes. --- ---\n\n```mdx\n---\ntitle: \"My cool new title\"\ndescription: \"A description of my content.\"\ndate: \"Mar 22 2024\"\ndraft: false\n---\n```\n\nMetadata fields\n\n| Field       | Req | Type    | Remarks                                          |\n| :---------- | :-- | :------ | :----------------------------------------------- |\n| title       | Yes | string  | Title of the content. Used in SEO and RSS.       |\n| description | Yes | string  | Description of the content. Used in SEO and RSS. |\n| date        | Yes | string  | Must be a valid date string (able to be parsed). |\n| draft       | No* | boolean | draft: true, content will not be published.      |\n\nAll that's left to do is write your content under the metadata.\n\n```mdx\n---\ntitle: \"My cool new title\"\ndescription: \"A description of my content.\"\ndate: \"Mar 22 2024\"\ndraft: false\n---\n\n### Woot\n\nThis is a paragraph.\n```\n\n🎉 Congrats, you are now a blogger.";
						const data = {title:"Blog Collection",description:"How to add posts to your blog.",date:new Date(1710968400000)};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/Mahmut/Desktop/Astro Projeler/astro-nano-mason/src/content/blog/02-blog-collection/index.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
