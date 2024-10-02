import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DHco00c9.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><img src=\"/villa3.jpg\" alt=\"Chantier de Lyon\"></p>\n<h1 id=\"projet-achevé--application-de-peinture-à-la-chaux-à-marseille\">Projet Achevé : Application de Peinture à la Chaux à Marseille</h1>\n<p>Je suis ravi de partager avec vous les détails de mon dernier projet, récemment achevé à Marseille. Cette application de peinture à la chaux représente le fruit de mon expertise en plâtrerie et de mon engagement envers la qualité.</p>\n<p>##Détails du Projet :</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>Lieu : Marseille</span></span>\n<span class=\"line\"><span>Durée d'Exécution : Durée</span></span>\n<span class=\"line\"><span>Matériaux Utilisés : Peintures à la chaux de haute qualité et apprêts spécifiques</span></span>\n<span class=\"line\"><span></span></span></code></pre>\n<p>Le projet a débuté par une préparation minutieuse des surfaces. Cela comprenait le nettoyage en profondeur et la réparation des imperfections, garantissant ainsi une base solide pour l’application de la peinture. J’ai opté pour une palette de couleurs soigneusement choisie, qui complète parfaitement la lumière naturelle de l’espace, créant une atmosphère à la fois accueillante et moderne.</p>\n<p>Au cours de chaque étape, j’ai veillé à respecter les attentes du client, tout en ajoutant ma touche personnelle pour assurer un rendu unique. La peinture à la chaux n’apporte pas seulement une esthétique raffinée, mais offre également des avantages fonctionnels, tels que la régulation de l’humidité et la durabilité.</p>\n<h2 id=\"résultats-finaux\">Résultats Finaux :</h2>\n<p>Les résultats parlent d’eux-mêmes. L’espace a été transformé, offrant une sensation de fraîcheur et de légèreté. Vous pouvez découvrir les photos du projet en suivant ce lien : [lien vers la galerie].</p>\n<p>Je suis fier de ce que nous avons accompli et je reste enthousiaste à l’idée de travailler sur de futurs projets. Si vous avez des questions ou si vous souhaitez discuter d’une éventuelle collaboration, n’hésitez pas à me contacter !</p>\n<h3 id=\"merci-de-votre-intérêt-pour-mon-travail\">Merci de votre intérêt pour mon travail !</h3>";

				const frontmatter = {"title":"Travaux de Peinture Marseillaise","description":"Chantier d'une belle villa vue montagne de Lyon","date":"Mar 26 2024"};
				const file = "C:/Users/Mahmut/Desktop/Astro Projeler/astro-nano-mason/src/content/projects/project-3/index.md";
				const url = undefined;
				function rawContent() {
					return "\n![Chantier de Lyon](/villa3.jpg)\n\n# Projet Achevé : Application de Peinture à la Chaux à Marseille\n\nJe suis ravi de partager avec vous les détails de mon dernier projet, récemment achevé à Marseille. Cette application de peinture à la chaux représente le fruit de mon expertise en plâtrerie et de mon engagement envers la qualité.\n\n##Détails du Projet :\n\n    Lieu : Marseille\n    Durée d'Exécution : Durée\n    Matériaux Utilisés : Peintures à la chaux de haute qualité et apprêts spécifiques\n\nLe projet a débuté par une préparation minutieuse des surfaces. Cela comprenait le nettoyage en profondeur et la réparation des imperfections, garantissant ainsi une base solide pour l'application de la peinture. J'ai opté pour une palette de couleurs soigneusement choisie, qui complète parfaitement la lumière naturelle de l'espace, créant une atmosphère à la fois accueillante et moderne.\n\nAu cours de chaque étape, j'ai veillé à respecter les attentes du client, tout en ajoutant ma touche personnelle pour assurer un rendu unique. La peinture à la chaux n'apporte pas seulement une esthétique raffinée, mais offre également des avantages fonctionnels, tels que la régulation de l'humidité et la durabilité.\n\n## Résultats Finaux :\n\nLes résultats parlent d'eux-mêmes. L'espace a été transformé, offrant une sensation de fraîcheur et de légèreté. Vous pouvez découvrir les photos du projet en suivant ce lien : [lien vers la galerie].\n\nJe suis fier de ce que nous avons accompli et je reste enthousiaste à l'idée de travailler sur de futurs projets. Si vous avez des questions ou si vous souhaitez discuter d'une éventuelle collaboration, n'hésitez pas à me contacter !\n\n### Merci de votre intérêt pour mon travail !\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"projet-achevé--application-de-peinture-à-la-chaux-à-marseille","text":"Projet Achevé : Application de Peinture à la Chaux à Marseille"},{"depth":2,"slug":"résultats-finaux","text":"Résultats Finaux :"},{"depth":3,"slug":"merci-de-votre-intérêt-pour-mon-travail","text":"Merci de votre intérêt pour mon travail !"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
