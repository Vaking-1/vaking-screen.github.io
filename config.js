/*=================================================================*\
/*   ZURG LOADING SCREEN — CONFIGURATION                            */
/*   Tout ce qu'il y a à modifier se trouve dans ce fichier.        */
/*   Rien d'autre à toucher dans script.js / style.css / index.html */
/*=================================================================*/


/* ---------------------------------------------------------------
   1) TEXTE PRINCIPAL (centre de l'écran)
--------------------------------------------------------------- */
const name     = "<strong>Reborn</strong> Project"
const underName = "SCP <b>RolePlay</b>"
const desc     = "Bienvenue sur Reborn Project : SCP-RP ! Incarnez un agent de la sécurité, un scientifique, un classe-d et bien plus encore dans la Zone-Samekh !"


/* ---------------------------------------------------------------
   2) THÈME DE COULEUR
   Valeurs possibles : "orange", "red", "blue", "green", "pink", "purple"
   Change aussi l'image de fond assets/img/<theme>.jpg
--------------------------------------------------------------- */
const theme = "blue"


/* ---------------------------------------------------------------
   2 bis) IMAGES DE FOND PERSONNALISÉES
   Si tu remplis IMAGES ci-dessous, elles remplacent l'image du
   thème choisi juste au-dessus (le thème reste utilisé pour la
   couleur d'accent --main). Laisse le tableau vide pour ne garder
   que l'image du thème.

   - IMAGES : chemins (assets/img/xxx.jpg) ou URLs, autant que tu
     veux. Une seule image = fond fixe. Plusieurs = diaporama qui
     défile automatiquement en fondu.
   - INTERVAL_MS : temps d'affichage de chaque image (en ms) avant
     de passer à la suivante.
   - RANDOM_ORDER : true pour un ordre aléatoire, false pour suivre
     l'ordre du tableau.
--------------------------------------------------------------- */
const CONFIG_BACKGROUND = {
    IMAGES: [
        "assets/img/1.png",
        "assets/img/2.png",
        "assets/img/3.png",
		"assets/img/4.png",
    ],
    INTERVAL_MS: 8000,
    RANDOM_ORDER: false
}


/* ---------------------------------------------------------------
   3) STAFF TEAM (panneau de gauche)
--------------------------------------------------------------- */
const showStaffTeam = true

var staff_team = [
	{
		"name":  "FROST",
		"image": "https://avatars.fastly.steamstatic.com/6c29e19cd97171f550ffc70624bea6996d05e0de_full.jpg",
		"rank":  "Directeur de Reborn Project"
	},
	{
		"name":  "VAKING",
		"image": "https://avatars.fastly.steamstatic.com/9f5eba32714b69ab2361269bccb76c87a90c5f38_full.jpg",
		"rank":  "Directeur Adjoint de Reborn Project"
	},
		{
		"name":  "DITOX",
		"image": "https://cdn.discordapp.com/avatars/764240102812549121/72bcb8a0882d6acdaf242de90537ac5b.png?size=128",
		"rank":  "Responsable Technique de Reborn Project"
	},
		{
		"name":  "ALETRUX",
		"image": "https://cdn.discordapp.com/avatars/994339043087224893/b62c5778e6d8875370e885ecd7fbc291.png?size=128",
		"rank":  "Responsable de Reborn SCP-RP"
	},
			{
		"name":  "KYLAN",
		"image": "https://cdn.discordapp.com/avatars/725734360736596050/f0eca4097675046c52adcbbb55341c7c.png?size=128",
		"rank":  "Responsable Adjoint de Reborn SCP-RP"
	},
			{
		"name":  "EYOKA",
		"image": "https://cdn.discordapp.com/avatars/593349256748859402/2e67abf5d2de48e8486c9583497b3b1d.png?size=128",
		"rank":  "Responsable Adjoint de Reborn SCP-RP"
	}
]


/* ---------------------------------------------------------------
   4) ASTUCES / NEWS (panneau de droite)
   - img : chemin vers une image (locale "/tips/xxx.jpg" ou URL),
           laisse "" pour ne pas afficher d'image (texte en pleine hauteur)
   - timeout : durée d'affichage en secondes avant de passer à la
               suivante
--------------------------------------------------------------- */
const showTipList = true

const tipsConfig = [
    {
        title: "Une porte fermée est une porte heureuse",
        text: "Une porte laissée ouverte peut compromettre le confinement, la sécurité du personnel et l'intégrité de la Zone. Pensez toujours à la refermer derrière vous !",
        img: "assets/img/tips/tips-4.jpg",
        timeout: 10
    },
    {
        title: "Les alarmes ne sont jamais décoratives",
        text: "Chaque alarme a une raison d'être. Réagissez rapidement, suivez les procédures et restez attentif aux consignes diffusées.",
        img: "assets/img/tips/tips-8.jpg",
        timeout: 10
    },
    {
        title: "Le silence radio peut sauver des vies",
        text: "Évitez les communications inutiles. Gardez les fréquences libres afin que les informations essentielles puissent être transmises sans délai !",
        img: "assets/img/tips/tips-7.jpg",
        timeout: 10
    },
    {
        title: "Sécuriser. Contenir. Protéger.",
        text: "Ces trois principes sont au cœur de chaque mission. Vos actions doivent toujours contribuer à préserver le confinement et la sécurité de la Fondation.",
        img: "assets/img/tips/tips-1.png",
        timeout: 10
    },
    {
        title: "Respectez les protocoles",
        text: "Les procédures de la Fondation sont le fruit de nombreuses expériences. Les suivre réduit les risques pour vous et vos collègues !",
        img: "assets/img/tips/tips-2.png",
        timeout: 10
    },
    {
        title: "Respectez votre hiérarchie",
        text: "La chaîne de commandement garantit une réponse rapide et efficace. Les ordres doivent être respectés afin d'assurer le bon fonctionnement des installations.",
        img: "",
        timeout: 10
    },
    {
        title: "Un rapport clair facilite le travail",
        text: "Des informations précises et complètes permettent aux équipes d'agir efficacement et d'assurer un meilleur suivi des incidents !",
        img: "",
        timeout: 10
    },
    {
        title: "Le règlement est votre meilleur équipement",
        text: "Connaître et appliquer le règlement est aussi important que votre équipement. Il constitue votre première protection face aux anomalies.",
        img: "assets/img/tips/tips-9.jpg",
        timeout: 10
    },
    {
        title: "N'agissez pas dans la précipitation",
        text: "Prenez le temps d'évaluer la situation avant d'intervenir. Une décision réfléchie vaut mieux qu'une réaction irréfléchie !",
        img: "assets/img/tips/tips-5.jpg",
        timeout: 10
    },
    {
        title: "Les classes de confinement",
        text: "La classe d'un SCP reflète la complexité de son confinement. Elle ne représente pas nécessairement son niveau de dangerosité.",
        img: "assets/img/tips/tips-6.jpg",
        timeout: 10
    },
    {
        title: "Ignorez le froid, pas le danger",
        text: "Peu importe la Zone où vous vous trouvez, gardez votre concentration. Chaque décision peut avoir des conséquences sur la sécurité de la Fondation !",
        img: "assets/img/tips/tips-3.png",
        timeout: 10
    }
];


/* ---------------------------------------------------------------
   5) EFFET "HIVER" (particules qui tombent, façon neige)
--------------------------------------------------------------- */
const enableWinterUpdate = false


/* ---------------------------------------------------------------
   6) VIDÉO DE FOND
   - youtubeVideo : lien complet vers une vidéo YouTube
     (ex: "https://www.youtube.com/watch?v=abcdefgh")
     Nécessite que le client ait accès à internet (comme sur FiveM).
   - showYoutubeVideo : true pour VOIR la vidéo, false pour ne
     garder que le son (fond masqué)
   - enableLocalVideo : true pour utiliser html/video.webm à la
     place (prioritaire sur YouTube si activé)
--------------------------------------------------------------- */
const youtubeVideo      = ""
const showYoutubeVideo  = false
const enableLocalVideo  = false
const videoBlur         = 0
var   videoOpacity      = 0.3


/* ---------------------------------------------------------------
   7) AUDIO DE FOND
   - localAudio : true pour jouer une ambiance en boucle (sinon
     c'est le son de la vidéo YouTube qui est utilisé, si une vidéo
     YouTube est configurée)
   - audioFileM4A / audioFileMP3 : place tes fichiers dans html/ et
     renseigne leur nom ici. Le M4A est tenté en premier (meilleure
     qualité en général), le MP3 sert de secours automatique si le
     navigateur CEF de GMod ne sait pas lire l'AAC. Tu peux laisser
     audioFileMP3 vide si tu n'as qu'un M4A, mais garde un MP3 sous
     le coude si jamais le M4A ne joue pas en jeu.
   - audioVolume : volume de 0 (muet) à 1 (max). Pas de bouton en jeu
     pour le régler (fait exprès), donc ajuste la valeur ici et
     redéploie si besoin.
--------------------------------------------------------------- */
const localAudio    = true
const audioVolume   = 0.1
const audioFileM4A  = "audio.m4a"
const audioFileMP3  = "audio.mp3"


/* ---------------------------------------------------------------
   8) PROGRESSION DE CHARGEMENT
   Sur GMod, la barre écoute les vrais téléchargements d'addons
   workshop quand il y en a (SetFilesTotal / SetFilesNeeded, appelés
   nativement par le moteur). Mais si le joueur a déjà tout en cache
   (cas le plus courant, notamment quand TU testes sur ton propre
   serveur), ces fonctions ne se déclenchent jamais et la barre
   resterait bloquée à 0%.

   Pour éviter ça, une progression simulée avance toute seule dès
   l'ouverture de la page. Si de vrais téléchargements ont lieu,
   leur valeur prend le dessus automatiquement.

   - SIM_DURATION_MS : durée (en ms) pour atteindre SIM_MAX_PERCENT
     si aucun téléchargement n'est détecté. Mets une valeur proche
     du temps de chargement moyen de ton serveur (précache des
     addons, init du gamemode, etc.).
   - SIM_MAX_PERCENT : la simulation ne dépasse jamais ce %, pour
     ne pas donner l'impression que c'est fini alors que ça charge
     encore. L'écran disparaît de toute façon dès que le joueur
     spawn, la barre n'a pas besoin d'atteindre 100% pile.
--------------------------------------------------------------- */
const CONFIG_PROGRESS = {
    SIM_DURATION_MS: 15000,
    SIM_MAX_PERCENT: 92
}
