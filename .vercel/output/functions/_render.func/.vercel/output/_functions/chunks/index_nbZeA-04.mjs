const id = "01-getting-started/index.md";
						const collection = "blog";
						const slug = "01-getting-started";
						const body = "\nThe basic configuration of Nano is pretty simple.\n\nEdit `src/consts.ts`\n\nCustomize the base site\n\n```ts \n// src/consts.ts\n\nexport const SITE: Site = {\n  NAME: \"Mahmut\",\n  EMAIL: \"imahmut@poton.me\",\n  NUM_POSTS_ON_HOMEPAGE: 3,\n  NUM_WORKS_ON_HOMEPAGE: 2,\n  NUM_PROJECTS_ON_HOMEPAGE: 3,\n};\n```\n\n| Field | Req | Description |\n| :---- | :-- | :-----------|\n| NAME | Yes | Displayed in header and footer. Used in SEO and RSS. |\n| EMAIL | Yes | Displayed in contact section. |\n| NUM_POSTS | Yes | Limit num of posts on home page. |\n| NUM_WORKS | Yes | Limit num of works on home page. |\n| NUM_PROJECTS | Yes | Limit num of projects on home page. |\n\nCustomize your page metadata\n\n```ts \n// src/consts.ts\n\nexport const HOME: Metadata = {\n  TITLE: \"Home\",\n  DESCRIPTION: \"Astro Nano is a minimal and lightweight blog and portfolio.\",\n};\n```\n\n| Field | Req | Description |\n| :---- | :-- | :-----------|\n| TITLE | Yes | Displayed in browser tab. Used in SEO and RSS. |\n| DESCRIPTION | Yes | Used in SEO and RSS. |\n\nCustomize your social media\n\n```ts \n// src/consts.ts\n\nexport const SOCIALS: Socials = [\n  { \n    NAME: \"twitter-x\",\n    HREF: \"https://twitter.com/markhorn_dev\",\n  },\n  { \n    NAME: \"github\",\n    HREF: \"https://github.com/markhorn-dev\"\n  },\n  { \n    NAME: \"linkedin\",\n    HREF: \"https://www.linkedin.com/in/markhorn-dev\",\n  }\n];\n```\n\n| Field | Req | Description |\n| :---- | :-- | :-----------|\n| NAME | Yes | Displayed in contact section as a link. |\n| HREF | Yes | External url to social media profile. |";
						const data = {title:"Getting started",description:"Hit the ground running.",date:new Date(1711054800000)};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/Mahmut/Desktop/Astro Projeler/astro-nano-mason/src/content/blog/01-getting-started/index.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
