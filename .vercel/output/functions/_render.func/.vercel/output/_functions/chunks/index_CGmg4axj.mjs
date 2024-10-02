import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_yI3J32nT.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><img src=\"/e2.webp\" alt=\"Chantier de Lyon\"></p>\n<h1 id=\"chantier-dune-belle-villa-avec-vue-sur-les-montagnes-de-lyon\">Chantier d’une Belle Villa avec Vue sur les Montagnes de Lyon</h1>\n<p>Dans le cadre enchanteur des montagnes de Lyon, nous avons commencé les travaux pour construire la villa de vos rêves. Sur ce chantier entouré de la beauté unique de la nature, nous nous engageons à réaliser un projet où chaque détail est soigneusement planifié et exécuté.</p>\n<h2 id=\"emplacement-idéal\">Emplacement Idéal :</h2>\n<p>Cette villa est située dans l’un des plus beaux coins de Lyon, offrant une vue imprenable sur les montagnes. Le lever et le coucher du soleil rendent ce panorama encore plus fascinant.</p>\n<h2 id=\"matériaux-de-qualité\">Matériaux de Qualité :</h2>\n<p>Nous n’utilisons que des matériaux de la plus haute qualité pour construire une structure à la fois durable et esthétique. À chaque étape, nous assurons un contrôle rigoureux, de la sélection des matériaux à la qualité de l’artisanat.</p>\n<h2 id=\"design-innovant\">Design Innovant :</h2>\n<p>La villa a été conçue avec une approche architecturale moderne. Les espaces ouverts, les grandes fenêtres et l’utilisation de la lumière naturelle visent à rendre les espaces de vie plus aérés.</p>\n<h2 id=\"durabilité\">Durabilité :</h2>\n<p>En adoptant une approche respectueuse de la nature, nous menons notre processus de construction avec des solutions écologiques. En utilisant des matériaux à haute efficacité énergétique, nous visons à créer un espace de vie confortable et respectueux de l’environnement.</p>\n<h2 id=\"travail-déquipe\">Travail d’Équipe :</h2>\n<p>Notre équipe d’experts vise l’excellence à chaque étape. Nous travaillons pour compléter le projet dans les délais et selon les normes les plus élevées.</p>\n<p>Cette villa avec vue sur les montagnes de Lyon ne sera pas seulement un espace de vie, mais aussi une expérience unique pour profiter de la nature. Pour suivre l’évolution de notre projet et construire la maison de vos rêves, contactez-nous !</p>";

				const frontmatter = {"title":"Échafaudage Layher","description":"Chantier d'une belle villa vue montagne de Lyon","date":"Mar 26 2024"};
				const file = "C:/Users/Mahmut/Desktop/Astro Projeler/astro-nano-mason/src/content/equipment/equipment-2/index.md";
				const url = undefined;
				function rawContent() {
					return "\n![Chantier de Lyon](/e2.webp)\n\n# Chantier d'une Belle Villa avec Vue sur les Montagnes de Lyon\n\nDans le cadre enchanteur des montagnes de Lyon, nous avons commencé les travaux pour construire la villa de vos rêves. Sur ce chantier entouré de la beauté unique de la nature, nous nous engageons à réaliser un projet où chaque détail est soigneusement planifié et exécuté.\n\n## Emplacement Idéal :\nCette villa est située dans l'un des plus beaux coins de Lyon, offrant une vue imprenable sur les montagnes. Le lever et le coucher du soleil rendent ce panorama encore plus fascinant.\n\n## Matériaux de Qualité :\nNous n'utilisons que des matériaux de la plus haute qualité pour construire une structure à la fois durable et esthétique. À chaque étape, nous assurons un contrôle rigoureux, de la sélection des matériaux à la qualité de l'artisanat.\n\n## Design Innovant :\nLa villa a été conçue avec une approche architecturale moderne. Les espaces ouverts, les grandes fenêtres et l'utilisation de la lumière naturelle visent à rendre les espaces de vie plus aérés.\n\n## Durabilité :\nEn adoptant une approche respectueuse de la nature, nous menons notre processus de construction avec des solutions écologiques. En utilisant des matériaux à haute efficacité énergétique, nous visons à créer un espace de vie confortable et respectueux de l'environnement.\n\n## Travail d'Équipe :\nNotre équipe d'experts vise l'excellence à chaque étape. Nous travaillons pour compléter le projet dans les délais et selon les normes les plus élevées.\n\nCette villa avec vue sur les montagnes de Lyon ne sera pas seulement un espace de vie, mais aussi une expérience unique pour profiter de la nature. Pour suivre l'évolution de notre projet et construire la maison de vos rêves, contactez-nous !\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"chantier-dune-belle-villa-avec-vue-sur-les-montagnes-de-lyon","text":"Chantier d’une Belle Villa avec Vue sur les Montagnes de Lyon"},{"depth":2,"slug":"emplacement-idéal","text":"Emplacement Idéal :"},{"depth":2,"slug":"matériaux-de-qualité","text":"Matériaux de Qualité :"},{"depth":2,"slug":"design-innovant","text":"Design Innovant :"},{"depth":2,"slug":"durabilité","text":"Durabilité :"},{"depth":2,"slug":"travail-déquipe","text":"Travail d’Équipe :"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
