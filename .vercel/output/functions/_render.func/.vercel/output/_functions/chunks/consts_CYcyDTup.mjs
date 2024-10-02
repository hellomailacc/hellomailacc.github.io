import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { r as removeBase, i as isRemotePath, V as VALID_INPUT_FORMATS, A as AstroError, U as UnknownContentCollectionError, p as prependForwardSlash } from './astro/assets-service_Djo8X02C.mjs';
import { a as createComponent, i as renderUniqueStylesheet, j as renderScriptElement, k as createHeadAndContent, r as renderTemplate, e as renderComponent, u as unescapeHTML } from './astro/server_yI3J32nT.mjs';
import 'kleur/colors';
import * as devalue from 'devalue';

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc) || imageSrc.startsWith("/")) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BcEe_9wP.mjs');
      if (data.default instanceof Map) {
        return DataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://imahmut.com", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/01-getting-started/index.md": () => import('./index_nbZeA-04.mjs'),"/src/content/blog/02-blog-collection/index.md": () => import('./index_CueLrwaS.mjs'),"/src/content/blog/03-projects-collection/index.md": () => import('./index_Lv9suWIu.mjs'),"/src/content/blog/04-work-collection/index.md": () => import('./index_YT0SSGKx.mjs'),"/src/content/blog/05-markdown-syntax/index.md": () => import('./index_DMNWR0Dm.mjs'),"/src/content/blog/06-mdx-syntax/index.mdx": () => import('./index_Be0onpnS.mjs'),"/src/content/blog/07-year-sorting-example/index.md": () => import('./index_aEDwbVWW.mjs'),"/src/content/blog/08-draft-example/index.md": () => import('./index_Y8gxSPNH.mjs'),"/src/content/equipment/equipment-1/index.md": () => import('./index_AR3gaGBK.mjs'),"/src/content/equipment/equipment-2/index.md": () => import('./index_C-gf_ApK.mjs'),"/src/content/equipment/equipment-3/index.md": () => import('./index_-bF4EXK3.mjs'),"/src/content/projects/project-1/index.md": () => import('./index_DZK0NeZZ.mjs'),"/src/content/projects/project-2/index.md": () => import('./index_DHZDBc_C.mjs'),"/src/content/projects/project-3/index.md": () => import('./index_H96hOGQy.mjs'),"/src/content/work/apple.md": () => import('./apple_C_cVxJQP.mjs'),"/src/content/work/facebook.md": () => import('./facebook_BK4ioaiY.mjs'),"/src/content/work/google.md": () => import('./google_uiyPwfxn.mjs'),"/src/content/work/mcdonalds.md": () => import('./mcdonalds_C2DadhSP.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"work":{"type":"content","entries":{"facebook":"/src/content/work/facebook.md","apple":"/src/content/work/apple.md","mcdonalds":"/src/content/work/mcdonalds.md","google":"/src/content/work/google.md"}},"blog":{"type":"content","entries":{"01-getting-started":"/src/content/blog/01-getting-started/index.md","02-blog-collection":"/src/content/blog/02-blog-collection/index.md","03-projects-collection":"/src/content/blog/03-projects-collection/index.md","06-mdx-syntax":"/src/content/blog/06-mdx-syntax/index.mdx","04-work-collection":"/src/content/blog/04-work-collection/index.md","05-markdown-syntax":"/src/content/blog/05-markdown-syntax/index.md","07-year-sorting-example":"/src/content/blog/07-year-sorting-example/index.md","08-draft-example":"/src/content/blog/08-draft-example/index.md"}},"equipment":{"type":"content","entries":{"equipment-1":"/src/content/equipment/equipment-1/index.md","equipment-2":"/src/content/equipment/equipment-2/index.md","equipment-3":"/src/content/equipment/equipment-3/index.md"}},"projects":{"type":"content","entries":{"project-1":"/src/content/projects/project-1/index.md","project-3":"/src/content/projects/project-3/index.md","project-2":"/src/content/projects/project-2/index.md"}}};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/01-getting-started/index.md": () => import('./index_S0pBBC9i.mjs'),"/src/content/blog/02-blog-collection/index.md": () => import('./index_7GoDo71p.mjs'),"/src/content/blog/03-projects-collection/index.md": () => import('./index_D518X24N.mjs'),"/src/content/blog/04-work-collection/index.md": () => import('./index_DeQVKIM3.mjs'),"/src/content/blog/05-markdown-syntax/index.md": () => import('./index_B5vVsC_4.mjs'),"/src/content/blog/06-mdx-syntax/index.mdx": () => import('./index_DnEPY4m6.mjs'),"/src/content/blog/07-year-sorting-example/index.md": () => import('./index_jraddtJI.mjs'),"/src/content/blog/08-draft-example/index.md": () => import('./index_CgydXj7u.mjs'),"/src/content/equipment/equipment-1/index.md": () => import('./index_I5pscPYW.mjs'),"/src/content/equipment/equipment-2/index.md": () => import('./index_Dplqqi5O.mjs'),"/src/content/equipment/equipment-3/index.md": () => import('./index_BYbveQI8.mjs'),"/src/content/projects/project-1/index.md": () => import('./index_hl_zKgTd.mjs'),"/src/content/projects/project-2/index.md": () => import('./index_v2vYut9F.mjs'),"/src/content/projects/project-3/index.md": () => import('./index_WP7lGeoA.mjs'),"/src/content/work/apple.md": () => import('./apple_D03Myu8W.mjs'),"/src/content/work/facebook.md": () => import('./facebook_DDU7n-jM.mjs'),"/src/content/work/google.md": () => import('./google_CKsvUJQd.mjs'),"/src/content/work/mcdonalds.md": () => import('./mcdonalds_BNh5Fl35.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const SITE = {
  NAME: "Husamettin",
  EMAIL: "husamettin@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
  NUM_EQUIPMENT_ON_HOMEPAGE: 3
};
const HOME = {
  TITLE: "Home",
  DESCRIPTION: "."
};
const BLOG = {
  TITLE: "Blog",
  DESCRIPTION: ""
};
const WORK = {
  TITLE: "Work",
  DESCRIPTION: ""
};
const PROJECTS = {
  TITLE: "Projects",
  DESCRIPTION: ""
};
const EQUIPMENT = {
  TITLE: "Equipment",
  DESCRIPTION: ""
};
const SOCIALS = [];

export { BLOG as B, EQUIPMENT as E, HOME as H, PROJECTS as P, SITE as S, WORK as W, SOCIALS as a, getCollection as g };
