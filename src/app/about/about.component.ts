import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  standalone: true
})
export class AboutComponent {

  universityPath : String = "assets/university.webp";

  engineerPath : String = "assets/engineer_school.webp";

  sopraPath : String = "assets/sopraSteria.webp";

  defensePath : String = "assets/defense.webp";

  covidPath : String = "assets/covid.webp";

  portugalPath : String = "assets/klx.webp";

  atheaPath : String = "assets/athea.webp";

  bontazPath : String = "assets/bontaz.webp";

  myselfString : String = "Et si je vous racontais mon histoire depuis mon parcours académique, ce serait intéressant pour mieux me connaître! Vous ne pensez pas?";

  dutString : String = `J'ai commencé cependant mes études en informatique et faire de la programmation réellement pendant mon <b>DUT Informatique</b> à partir de 2012 à <u>Aix-en-Provence dans la région PACA</u>.<br/>
    Cette formation nous prépare normalement à être disponible sur le marché du travail en tant que technicien supérieur mais elle ne bloque en aucun cas la poursuite en étude supérieure.<br/>
    À travers cette formation riche en connaissances, et transmise par des enseignants-chercheurs, j'ai appris mes premières notions d'algorithmie avec les langages C++, Java, PHP, Javascript, PL/SQL 
    dans cet ordre. Beaucoup de travaux pratiques, des tests d'une forte sévérité, des mathématiques avancées, j'en suis ressorti avec une panoplie solide qui m'est toujours utile aujourd'hui.`;


  engineerString : String = `J'ai ensuite poursuivi mes études en école d'ingénieur à <b>l'ENSSAT (École Nationale Supérieure des Sciences Appliquées et de Technologies)</b> à partir de 2014 <u>en Bretagne à Lannion</u>.<br/>
    Cette poursuite de formation m'a permi d'acquérir des connaissances sur plusieurs domaines en émergence comme l'intelligence artificielle, le traitement du langage et de la parole.
    J'ai également pu solidifier mes compétences en ayant une meilleure conception d'application à travers des design patterns, le multithreading; mais aussi un solide bagage théorique 
    sur les mathématiques plus poussées; notions théoriques vu par mes compagnons élèves de classes préparatoires.`;


  sopraString : String = `Sopra Stéria... une belle expérience et environnement pour débuter sa vie professionnelle. J'ai été dans cette entreprise pendant un stage d'été combiné à mon contrat de professionnalisation.<br/>
  Mission débuté le <b>4 Juillet 2016</b> sur le site de <u>Saint-Grégoire en Bretagne</u>, entrant dans une équipe de 4 personnes : un chef de projet, un adjoint, un leader technique, un développeur. L'équipe est en charge de la maintenance et de l'évolution de 3 applications pour les besoins du client OBS (Orange Business Services).<br/>
  Sur les 3, une seule est développée en Java. Les deux autres sont en cours de migration de VB.Net à C#.Net avec un peu de Javascript et JQuery pour le côté dynamique du site. C'est à travers cette expérience que j'ai appris à coder en C# et connaître .Net avec le framework Entity.
  Grâce à ce choix technologique, il est possible de convertir différentes données d'une base en un objet exploitable. Pour notre cas, c'était plus pour un affichage simplifié. Je n'avais pas un sujet de stage ou d'alternance prédéfini; je faisais le travail d'un salarié. <br/>
  Organisés en équipe projet, mon travail consistait à participer à la maintenance et l'évolution des applications à notre charge à travers les étapes du processus de livraison Sopra Stéria suivant un cycle en V :
  <ul>
    <li>Analyse du besoin client et chiffrage</li>
    <li>Écriture des spécifications fonctionnelles</li>
    <li>Implémentation et tests unitaires</li>
    <li>Écriture des feuilles de test</li>
    <li>Qualification</li>
    <li>Intégration continue</li>
    <li>Relecture de code</li>
    <li>Amélioration de la robustesse de code javascript</li>
  </ul>
  Chacun d'entre nous participait à une ou deux étapes du processus pour une feature donnée. Chaque matinée, hormis le jour de réunion hebdomaire d'avancée de projet d'actualité d'entreprise, démarrait avec un daily stand-up afin de résumé la progression de chacun. Pendant mon temps sur ce projet, l'équipe s'est agrandie (+1 à 2 personnes) et a fusionné
  avec une autre et obtenue une nouvelle application à gérer.<br/><br/>
  
  <b><u>Technologie :</u></b> C#.Net, Entity Framework, SQL, Javascript, JQuery <br/>
  <b><u>Logiciels :</u></b> Jenkins, Phabricator, SonarQube, Visual Studio Pro 2015, HP Quality Center <br/>
  <b><u>Environnement :</u></b> Windows 7, Windows Server 2003 <br/>
  <b><u>Résultats :</u></b> Augmentation de la migration des applications d'anciennes technologies à de nouvelles, satisfaction du client améliorée`;

  defenseString : String = `Cette expérience fut mon premier travail : je fus prestataire chez AUSY <b>dès début Septembre 2017</b>, société de conseil sous Randstad, en tant qu'ingénieur banc de test. Pourquoi ce revirement de spécialisation? Jeune je voulais faire du C++ (language jeu vidéo, blablabla...), et en observant que les missions étaient rares avec cette technologie, je cherchais à me rapprocher de la robotique.
  Je me suis laissé convaincre que le banc de test pouvait être une transition intéressante... Une grosse erreur de ma part, mais je ne la regrette pas. <br/>
  Durant cette expérience, j'ai appris à distingué ce que je pourrais aimer exercer ou non. Plusieurs missives ont été effectuées pendant cette expérience. Les clients majoritaires furent <b>SAFRAN et Thalès</b> sur de nombreux sites. <br/>
  La première a été d'être une personne du plateau présent chez le client <b>SAFRAN</b> sur le site de <u>Fougères</u>, où j'agissais sur bon nombre de tâches diverses et variées majoritairement fonctionnelles en compte de résultats. <br/>
  Par la suite, un besoin plus poussé se rapprochant de mes compétences de dev était disponible. Sous la supervision d'un chef de projet AUSY, supporté par une équipe de support d'intégration SAFRAN, j'ai pris en charge un projet en tant qu'unique développeur dans lequel je devais créer la batterie de test en C permettant de tester un système électronique complet avionique. Cette batterie devait suivre un cahier des charges bien défini, puis le travail devait être intégré sur 
  les bancs de tests dédiés sur le site de <u>Montluçon</u>. J'étais en charge de l'avancée, de l'organisation de mes déplacements et de l'intégration jusqu'à la finalité du projet. <br/>
  Une fois achevée, pendant les phases de tests, j'ai fait des missives en plateau pour <b>Thalès</b> sur le site <u>d'Étrelles</u> où mes intervention était également de la programmation en C pour divers petits systèmes électroniques.<br/>
  Après un premier succès, j'ai pu, grâce à la conception du nouveau cahier des charges, organiser le coût et le temps du deuxième projet pour <b>SAFRAN</b> <u>Montluçon</u>. Ce projet s'accomplissa jusqu'à une certaine limite dans le sens où les demandes clientes pouvait être en désynchro avec la technologie utilisée. Le temps de trouver une solution, j'ai décidé de saisir une nouvelle opportunité. <br/>
  Je me suis porté volontaire pour contribuer au besoin exprimé par <b>Thalès</b> <u>Mérignac</u>, campus non loin de Bordeaux. Le besoin fut le développement et l'intégration d'une batterie de test toujours pour un système avionique sous le logiciel TestStand permettant de se passer de language de programmation. La mission dura 5 mois, car je me suis rendu compte que développer des logiciels avec un langage de programmation était vraiment la profession que j'aime, et que je sais exercer. <br/>
  Ma dernière mission chez <b>AUSY</b> fut être développeur testeur Python et C++ pour le client <b>Thalès</b> sur le site de <u>Cholet</u> où j'ai effectué une batterie de test d'un composant électronique tout en apprenant le language Python. J'ai participé à une meilleure automatisation, une réparation des processus d'intégration continue, un nettoyage du code C++ (fuites mémoires). <br/><br/>

  <ul>
    <li>Constitution de projet et chiffrage</li>
    <li>Résolutions de problèmes fonctionnels</li>
    <li>Implémentation de tests en C, TestStand, Python</li>
    <li>Intégration des batteries de test dans les bancs</li>
    <li>Tests réels</li>
    <li>Rédaction des rapports de validation</li>
    <li>Automatisation de certains processus</li>
    <li>Formation à Git de collègues</li>
    <li>Réparation de l'intégration continue</li>
  </ul>

  <b><u>Technologie :</u></b> C, Python, C++ <br/>
  <b><u>Logiciels :</u></b> C IDE, TestStand, MobXTerm, Eclipse, Git, Gitlab <br/>
  <b><u>Environnement :</u></b> Windows 7, Linux <br/>
  <b><u>Résultats :</u></b> Accomplissement des projets, avancées du client, augmentation de sa satisfaction.`;

  covidString : String = `Petit creux fin 2019 et 2020 entier... j'avais tenté de démarrer une nouvelle étape en Belgique à travers un <b>V.I.E</b> à <u>Bruxelles</u>, mais les circonstances + le covid font que je n'ai pas eu vraiment d'activités. Je devais être embauché dans une entreprise à Valbonne mais le covid a fait fermer l'agence; annulant le recrutement. <br/>
  J'ai tenté une reconversion en tant que RSSI en alternance par le programme <b>Openclassroom</b>, postulé pour être officier aviateur (armée de l'air) en cybersécurité. J'aurais pu partir dans cette direction si je n'avais pas eu la surprise d'être contacté sous LinkedIn par une recruteuse de l'entreprise <b>Extia</b> pour un nouveau V.I.E. `;

  portugalString : String = `Cette mission fut un énorme tournant pour moi du point de vue confiance personnelle. Après ce lourd épisode d'échec du V.I.E et le covid combiné, j'avais une grande perte de confiance en moi et une anxiété forte présente. J'avais déjà eu des contacts avec Extia et avait retenu une belle impression respectueuse et humaine. J'ai accepté de les rejoindre et partir au Portugal pour faire cette expérience. Et quelle expérience riche!<br/>
  Après 2 entretiens, j'ai pu vraiment exercer et entamer ma mission avec le client <b>Klx</b> à <u>Lisbonne</u>, centre de compétences née par le groupement d'Accenture et Crédit Agricole. J'ai rejoins une équipe d'environ une dizaine de personnes, supervisée par une cheffe de domaine, responsable du développement et de l'évolution de deux applications pour les besoins de leur client nommé <b>"La Médicale de France"</b> Une partie de l'équipe était concentré sur l'application web développée en C#.Net, tandis que l'autre était sur l'application tablette IOs développée en AngularJS. <br/>
  J'ai été sélectionné pour aider le leader technique sur l'application tablette. Dans la sous-équipe de 4 personnes, nous étions en charge des développements et améliorations de l'application IOS en AngularJS qui devait proposer les mêmes fonctionnalités et calculs des différents devis d'assurance. Ce dispositif devait permettre aux agents de l'assurance de pouvoir exécuter leur travail même dans des conditions déconnectés. Une fois de retour en agence, il pouvait uploader les devis pour les comparer au système maison. <br/>
  Mes premières tâches, données avec confiance et patience, ont été fortes efficaces pour reprendre confiance en moi, montrer mes compétences et améliorer le projet. J'ai appris à manier le framework AngularJS directement sur le terrain! Au fur et à mesure que le projet avança, mon leader technique passa chef de projet et notre équipe devint autonome tandis que je montais en tant que leader technique moi-même et Product Owner à la fois.<br/>
  En plus de faire évoluer l'applications, nous avons aussi démarrer sa transformation. D'abord sur tablettes IOs, il y a eu l'ambition que l'application puisse être déployable sur des tablettes Windows. Pour ce faire, nous avons démarrer un changement de structure de base du projet grâce à de nouveaux frameworks : Electron.Js et Node.Js. Grâce à Électron, il est possible de deployer nativement des applications développées en Javascript comme des applications de bureautique. Grâce à ce changement, nous avons pu également passer aux dernières versions du framework AngularJS, proposer de nouvelles solutions non implémentées pour correspondre au système maison. <br/>
  Pendant cette missive, j'ai également été responsable d'un petit projet secondaire, toujours pour <b>La Médicale De France</b> et particulièrement les cellules de conformité et vigilance. La demande de ce projet était de concevoir une petite moulinette prenant des données clientes en entrée par forcément bien formatée pour les 'nettoyer' et obtenir un résultat plus visible. Le choix de technologie était libre, j'ai décidé que le projet serait développé en C#, language que j'apprécie et que je trouvais simple et efficace pour ce besoin. En tant qu'unique développeur, en étroite collaboration avec le client et supervisé par ma cheffe de domaine, nous avons pu aboutir
  efficacement à ce projet avec fierté de l'accomplissement sans anomalies! <br/><br/>

  <ul>
    <li>Analyses des besoins clients et chiffrage</li>
    <li>Résolutions de problèmes complexes</li>
    <li>Implémentation des fonctionnalités AngularJS</li>
    <li>Mise en place des tests unitaires karma/Jasmine</li>
    <li>Corrections des anomalies en collaboration avec les équipes de recette</li>
    <li>Livraison des nouvelles versions</li>
    <li>Propositions d'améliorations de l'existant au client</li>
    <li>Forte participation de la migration de l'application vers de nouvelles technologies</li>
    <li>Formation des nouveaux collègues</li>
    <li>Réalisation du projet de filtrage sans difficultés, avec une étroite collaboration avec le client</li>
  </ul>

  <b><u>Technologie :</u></b> Javascript, C#, AngularJS, Node.Js, Electron.js, Git, Karma/Jasmine <br/>
  <b><u>Logiciels :</u></b> Visual Studio Code, Visual Studio Pro, Jira, Gitlab, Chromium <br/>
  <b><u>Environnement :</u></b> Windows 7<br/>
  <b><u>Résultats :</u></b> Corrections de bugs importants de calcul, migration de l'application vers de nouveaux framework, instauration du filtre de données pour la cellule de vigilance, suggestion et amélioration de l'existant pour coller à l'application maison.`;

  atheaString : String = `Première mission de retour en France après un bon moment au Portugal. Je fus embauché par l'entreprise avec laquelle j'étais parti en V.I.E : <b>Extia</b>. Retour aux sources comme il est souvent dit. Pendant le temps d'intercontrat que j'ai eu avant, j'ai appris à manier le framework Angular et concevoir une applications pour mes besoins que vous verrez dans la section 'Projets'.<br/>
  Grâce à ce projet, j'ai pu obtenir une mission de développeur Angular pour la société <b>Atos devenu Eviden</b> à <u>La Seyne-Sur-Mer</u> dont le projet de développement est pour la société <b>Athéa</b>, sous-branche de <b>Thalès</b>. J'ai donc rejoins une équipe de plus de 20 personnes découpées en 3 squads nous permettant d'être entre 6 à 8 personnes par petite squades. 2 étaient à Paris et une dans le Sud de la France. J'ai donc rejoins celle dans le Sud. Cette mission fut très riche en expérience car je me suis retrouvé dans un réel environnement où les personnes travaillent en Agile, avec les cérémonies associées. 
  De plus, notre squad disposait d'un Product Owner "de chez nous", nous permettons nous développeur de mieux cerner le besoin. La composition de notre squad était donc : 3 développeurs fron-end, 1 développeur back-end, 1 Product Owner, 1 Scrum Master & Leader Technique. <br/>
  Notre mission fut l'amélioration et la maintenance de l'application de gestion de données, dans le domaine du Big Data, pour <b>Athéa</b> située à <u>Paris</u>. Chaque élan était donc décomposé en Sprints de 2 mois; et chaque planification de sprint était faite à Paris, dont notre présence physique était nécessaire. En y repensant, ayant passé ma Professional Scrum Product Owner I (PSPO1) maintenant, je me suis rendu compte que je ne savais pas tant que ça travailler en Agile. Et j'ai découvert que c'est potentiellement ma manière de travailler favorite : conciliante, en tant réel, en entraide, même entre squads bien que la difficulté était élevée. <br/>
  Pour simuler nos bureaux et oublier la distance, nous étions beaucoup en communication grâce à Gather Town, plateforme efficace pour combiner un aspect gaming et réunir les gens avec des intéractions. En plus de prendre en charge chaque tâche de développement, nous étions tous actifs sur les tâches secondaires telles les revues de code, l'intégration continue, les tests unitaires avec karma/jasmine, la propreté de code avec SonarQube. <br/><br/>
  
  <ul>
    <li>Analyses des besoins clients et chiffrage</li>
    <li>Collaboration avec le Product Owner pour bien orienter le développement</li>
    <li>Implémentation des fonctionnalités Angular</li>
    <li>Mise en place des tests unitaires karma/Jasmine</li>
    <li>Accomplissement des diverses cérémonie selon la méthode Scrum</li>
  </ul>

  <b><u>Technologie :</u></b> Javascript, Angular, Git, Karma/Jasmine <br/>
  <b><u>Logiciels :</u></b> Visual Studio Code, Redmine, Gitlab, Chromium, SonarQube <br/>
  <b><u>Environnement :</u></b> Windows 7<br/>
  <b><u>Résultats :</u></b> Corrections de bugs important, amélioration du front de l'application, msie en place d'un système de session.`;

  bontazString : String = `Après une mission dans le Sud-Est de la France, la plage, la chaleur, la mer... j'ai décidé de migrer entre les montagnes, le froid, la neige, en Haute-Savoie; pour une mission en C#.Net dans l'entreprise <b>Bontaz</b>, à <u>Marnaz</u>. Société leader dans le monde du décolletage, et présent dans le domaine de l'automobile en tant que fournisseur de pièces, j'ai rejoins le plateau de la DSI pour les aider dans leurs besoins. <br/>
  Ma mission consistait à la base à soutenir sur la migration de leur ERP maison, vers un ERP plus commercialisé du nom d'Infor. Prenant uen avance de phase de 6 mois pour comprendre la complexité et les enjeux de l'ERP maison, mon début d'exercice ne collait pas à la mission vendue mais était nécessaire. En effet, l'ERP que <b>Bontaz</b> possède centralise toutes les opérations de l'entreprise afin qu'elle gère au mieux et rapidement ses affaires de commandes, paiement, imports/exports.
  Ce sont des notions et environnement dont je n'avais jamais été exposé dans ma carrière et furent donc instructive. En plus de comprendre, j'étais membre actif du support utilisateur de l'application afin que chaque membre de l'entreprise puisse exercer sa profession dans les meilleures conditions possibles. Quelques fois c'était le déblocage d'un problème, une incompréhension; d'autres fois c'était des demandes de nouvelles fonctionnalités. Avec la connaissance fonctionnelle et le code sous les yeux, il m'était possible d'ajouter de nouvelles fonctionnalités. <br/>
  Nous n'étions pas vraiment une équipe; plutôt un plateau de plusieurs sous-ensembles d'équipe : ERP, Master Data, BI, EDI. Il m'est arrivé, suite à des départs et manque de ressources, d'avoir fait un peu d'EDI mais... ce n'est vraiment pas ma tasse de thé. Il m'était impossible de me concentrer sur les tâches associées à ce thème sans avoir mal à la tête... Les délais non respectés et les surprises d'avancées globales dans l'entreprise font que je n'ai jamais réellement fait la mission qui m'a été vendue. <br/>
  De plus, l'ambiance se dégradait énormément. Joyeux de démarrer une nouvelle mission et rencontrer de nouvelles personnes après un passage difficile dans ma vie, je ne m'étais pas rendu compte que certaines personnes était l'incarnation de la toxicité, et que même avec eux je ne pourrais travailler avec joie et à l'aise... Ils m'auront appris cette limite. <br/><br/>
  
  <ul>
    <li>Analyses du problème utilisateur</li>
    <li>Implémentation de la solution liée au problème</li>
    <li>Support utilisateur</li>
    <li>Intégration continue</li>
  </ul>

  <b><u>Technologie :</u></b> C#, .Net, SQL Server, Git <br/>
  <b><u>Logiciels :</u></b> Visual Studio Pro, iTop, Azure DevOps, Microsoft SQL Server Management <br/>
  <b><u>Environnement :</u></b> Windows 11<br/>
  <b><u>Résultats :</u></b> Corrections de bugs, améliorations de l'application, utilisateurs assistés.`;

}
