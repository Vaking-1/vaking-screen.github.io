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
        title: "Reste groupé en changeant de niveau",
        text: "Un niveau vide n'est jamais vraiment vide. Mieux vaut y entrer à plusieurs que seul.",
        img: "",
        timeout: 10
    },
    {
        title: "L'Almond Water, ça se garde",
        text: "Ne bois pas tout d'un coup en début de run, tu vas le regretter plus tard.",
        img: "",
        timeout: 10
    },
    {
        title: "Chaque faction a ses règles",
        text: "Renseigne-toi avant de foncer : certaines actions comptent comme du RDM selon ta faction.",
        img: "",
        timeout: 10
    },
    {
        title: "Les entités ne pardonnent pas",
        text: "Un bruit derrière un mur, ce n'est probablement pas un joueur.",
        img: "/tips/tip1.jpg",
        timeout: 10
    },
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
const audioVolume   = 0.4
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
