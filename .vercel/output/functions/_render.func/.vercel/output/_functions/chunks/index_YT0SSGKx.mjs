const id = "04-work-collection/index.md";
						const collection = "blog";
						const slug = "04-work-collection";
						const body = "\nThe `work` collections is found in `src/content/work`.\n\nWorking with the `work` collection:\n\n```\n📁 /src/content/work\n└── 📄 apple.md\n└── 📄 facebook.md\n└── 📄 google.md\n└── 📄 mcdonalds.md\n```\n\nIn the above example, four entries on the /work page will be generated.\n\n`apple`, `facebook`, `google`, `mcdonalds`\n\nAll content must be preceded by required metadata in the markdown file in `yaml` format, and be enclosed by triple dashes. --- ---\n\n```mdx\n---\ncompany: \"McDonalds\"\nrole: \"French Fryer\"\ndateStart: \"01/01/2020\"\ndateEnd: \"11/27/2022\"\n---\n```\n\nMetadata fields\n\n| Field       | Req | Type    | Remarks                                          |\n| :---------- | :-- | :------ | :----------------------------------------------- |\n| company     | Yes | string  | Company name.                                    |\n| role        | Yes | string  | Role at the company. Ex: Full stack developer.   |\n| dateStart   | Yes | string  | Date string that can be parsed to a date.        |\n| dateEnd     | Yes | string  | Date string that can be parsed to a date.        |\n\n\\* _Note: If you are still employed at company, for dateEnd you can enter Current, \nNow or Present instead of a date._\n\nAll that's left to do is write your content under the metadata.\n\n```mdx\n---\ntitle: \"My awesome project\"\ndescription: \"A description of my project.\"\ndate: \"Mar 22 2024\"\ndraft: false\n---\n\n### Woot\n\nThis is a paragraph about my role at this company.\n```\n\n🎉 Congrats, you are now a blogger, _and_ developer, _and_ employed.";
						const data = {title:"Work Collection",description:"How to add work experience.",date:new Date(1710795600000)};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/Mahmut/Desktop/Astro Projeler/astro-nano-mason/src/content/blog/04-work-collection/index.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
