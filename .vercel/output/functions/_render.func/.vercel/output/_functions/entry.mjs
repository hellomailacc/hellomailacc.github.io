import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BFpx6NV0.mjs';
import { manifest } from './manifest_BQ_Jx_O4.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/blog.astro.mjs');
const _page2 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page3 = () => import('./pages/equipment.astro.mjs');
const _page4 = () => import('./pages/equipment/_---slug_.astro.mjs');
const _page5 = () => import('./pages/projects.astro.mjs');
const _page6 = () => import('./pages/projects/_---slug_.astro.mjs');
const _page7 = () => import('./pages/robots.txt.astro.mjs');
const _page8 = () => import('./pages/rss.xml.astro.mjs');
const _page9 = () => import('./pages/work.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/blog/index.astro", _page1],
    ["src/pages/blog/[...slug].astro", _page2],
    ["src/pages/equipment/index.astro", _page3],
    ["src/pages/equipment/[...slug].astro", _page4],
    ["src/pages/projects/index.astro", _page5],
    ["src/pages/projects/[...slug].astro", _page6],
    ["src/pages/robots.txt.ts", _page7],
    ["src/pages/rss.xml.ts", _page8],
    ["src/pages/work/index.astro", _page9],
    ["src/pages/index.astro", _page10]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "39b71b1c-6a8c-4d1e-9fc8-c678188c1866",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
