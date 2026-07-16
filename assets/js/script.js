/*=================================================================*\
/*   ZURG LOADING SCREEN — SCRIPT                                   */
/*   Toute la config est dans config.js, ne touche à rien ici sauf  */
/*   si tu sais ce que tu fais.                                     */
/*=================================================================*/

$(".center h1").html(name)
$(".center p").html(underName)
$(".center span").html(desc)

var serverInfo = null

function loading(num){
	num = Math.max(0, Math.min(100, Math.round(num)));
	$(".loading-bar p").text(num + "%");
	$(".loading-bar .line").width(num + "%"); // la transition CSS (voir style.css) lisse le mouvement
}

if (showStaffTeam){
	$(".panel.staffteam").show()
	staff_team.forEach(function(user){
		$(".staff_team").append(`
			<div class="staff">
				<div class="info">
					<img src="${user.image}" class="pfp">
					<p>${user.name}</p>
				</div>
				<p class="status">${user.rank}</p>
			</div>
		`)
	})
}

if (showTipList){
	$(".panel.panelInfo").show()
}

/* =================================================================
   PROGRESSION RÉELLE DU CHARGEMENT — API NATIVE GARRY'S MOD
   -----------------------------------------------------------------
   Sur FiveM la progression arrivait via un message NUI
   ("loadProgress"). Sur GMod, c'est le moteur Source qui appelle
   directement ces fonctions JS pendant le chargement des addons,
   à condition qu'elles existent dans la page :
     - SetFilesTotal(total)
     - SetFilesNeeded(needed)
     - DownloadingModule(name)
     - DownloadingFile(fileName)
     - SetStatusChanged(status)
     - GameDetails(serverName, serverURL, mapName, maxPlayers, steamID, gamemode)

   PROBLÈME : ces fonctions ne sont appelées QUE s'il y a des fichiers
   workshop à télécharger. Un joueur qui a déjà tous les addons en
   cache (le cas le plus fréquent, et quasi systématique quand tu
   testes sur ton propre serveur) ne déclenchera jamais ces
   fonctions : la barre resterait bloquée à 0% pendant tout le
   chargement (précache des modèles/sons, init du gamemode, etc.)
   même si le serveur charge normalement.

   SOLUTION : une progression "simulée" démarre dès l'ouverture de
   la page et avance toute seule (avec un ralentissement en fin de
   course) pour donner un vrai retour visuel pendant tout le
   chargement. Si de vrais téléchargements ont lieu, leurs valeurs
   prennent le dessus (la barre ne recule jamais, elle prend le
   pourcentage le plus élevé entre simulation et réel).

   Ajuste CONFIG_PROGRESS.SIM_DURATION_MS dans config.js selon le
   temps de chargement moyen de ton serveur.
================================================================= */
let __displayPercent = 0;
let __realDataSeen   = false;
let __filesTotal     = 0;
let __filesNeeded    = 0;

function __setDisplay(pct){
	pct = Math.max(0, Math.min(100, Math.round(pct)));
	if (pct > __displayPercent) {
		__displayPercent = pct;
		loading(__displayPercent);
	}
}

// --- Simulation de secours (tant qu'aucune vraie donnée n'est arrivée) ---
const __simDuration = (typeof CONFIG_PROGRESS !== "undefined" && CONFIG_PROGRESS.SIM_DURATION_MS) || 15000;
const __simMaxPct    = (typeof CONFIG_PROGRESS !== "undefined" && CONFIG_PROGRESS.SIM_MAX_PERCENT) || 92;
const __simStart = Date.now();

function __simTick(){
	if (__realDataSeen) return; // on arrête dès que du réel arrive
	const elapsed = Date.now() - __simStart;
	const t = Math.min(1, elapsed / __simDuration);
	const eased = 1 - Math.pow(1 - t, 3); // ease-out : rapide au début, ralentit à la fin
	__setDisplay(eased * __simMaxPct);
	if (t < 1) requestAnimationFrame(__simTick);
}
__simTick();

// --- Vraie progression (téléchargements workshop en attente) ---
function __updateRealProgress(){
	if (__filesTotal > 0) {
		const pct = 100 - (__filesNeeded / __filesTotal * 100);
		__setDisplay(pct);
	}
}

window.SetFilesTotal = function (total) {
	__realDataSeen = true;
	__filesTotal = parseInt(total, 10) || 0;
	__updateRealProgress();
};

window.SetFilesNeeded = function (needed) {
	__realDataSeen = true;
	__filesNeeded = parseInt(needed, 10) || 0;
	__updateRealProgress();
};

// Optionnel : affiche le module en cours de téléchargement dans la console CEF
window.DownloadingModule = function (moduleName) {
	console.log("[LoadingScreen] Module: " + moduleName);
};

window.DownloadingFile = function (fileName) {
	console.log("[LoadingScreen] Fichier: " + fileName);
};

window.SetStatusChanged = function (status) {
	console.log("[LoadingScreen] Statut: " + status);
};

// Rempli automatiquement le nom du serveur si GMod le fournit
window.GameDetails = function (serverName, serverURL, mapName, maxPlayers, steamID, gamemode) {
	if (serverName) {
		serverInfo = { serverName, serverURL, mapName, maxPlayers, steamID, gamemode };
	}
};

if (theme == "orange"){
	$("body").append(`<style>:root{--main:255, 150, 0;}</style>`)
	$("body").css("background-image","url('assets/img/orange.jpg')")
	$(".winter").css("background","linear-gradient(0deg, rgb(255 150 0 / 10%) 0%, rgba(255, 150, 0, 0.0) 100%)")
}
if (theme == "red"){
	$("body").append(`<style>:root{--main:255,0,0;}</style>`)
	$("body").css("background-image","url('assets/img/red.jpg')")
	$(".winter").css("background","linear-gradient(0deg, rgb(255 0 0 / 10%) 0%, rgba(255, 0, 0, 0.0) 100%)")
}
if (theme == "blue"){
	$("body").append(`<style>:root{--main:0, 163, 255;}</style>`)
	$("body").css("background-image","url('assets/img/blue.jpg')")
	$(".winter").css("background","linear-gradient(0deg, rgb(0 163 255 / 10%) 0%, rgba(0, 163, 255, 0.0) 100%)")
}
if (theme == "green"){
	$("body").append(`<style>:root{--main:65, 255, 0;}</style>`)
	$("body").css("background-image","url('assets/img/green.jpg')")
	$(".winter").css("background","linear-gradient(0deg, rgb(65 255 0 / 10%) 0%, rgba(65, 255, 0, 0.0) 100%)")
}
if (theme == "pink"){
	$("body").append(`<style>:root{--main:255, 122, 237;}</style>`)
	$("body").css("background-image","url('assets/img/pink.jpg')")
	$(".winter").css("background","linear-gradient(0deg, rgb(255 122 237 / 10%) 0%, rgba(255, 122, 237, 0.0) 100%)")
}
if (theme == "purple"){
	$("body").append(`<style>:root{--main:193, 67, 255;}</style>`)
	$("body").css("background-image","url('assets/img/purple.jpg')")
	$(".winter").css("background","linear-gradient(0deg, rgb(193 67 255 / 10%) 0%, rgba(193, 67, 255, 0.0) 100%)")
}

// Effet "hiver" (particules qui tombent)
if (enableWinterUpdate){
	particlesJS("particles-js", { "particles": { "number": { "value": 160, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 1.5, "direction": "bottom", "random": true, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": true, "rotateX": 100, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false, "mode": "repulse" }, "onclick": { "enable": false, "mode": "repulse" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 223.7762237762238, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });
	$("body").css("background-image","url('assets/img/winter.jpg')")
	$(".winter").css("display","flex")
	$("#particles-js").css("opacity",1)
}

let a, vl, yt;

if (youtubeVideo.startsWith("https://www.youtube.com")) {
	if (!enableLocalVideo){
		let videoId = youtubeVideo.split('/').pop().split('=')[1];
		if (!showYoutubeVideo){
			videoOpacity = 0
		}
		$("iframe").attr("src", `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&enablejsapi=1&disablekb=1`)
				   .css({ filter: `blur(${videoBlur}px)`, opacity: videoOpacity });
		if (showYoutubeVideo) $("body").css("background", "#000");
		if (enableLocalVideo){
			$("iframe").attr("src","")
		}
	}
}
if (localAudio) {
	let sources = "";
	if (audioFileM4A) sources += `<source src="${audioFileM4A}" type="audio/mp4">`;
	if (audioFileMP3) sources += `<source src="${audioFileMP3}" type="audio/mpeg">`;

	$('body').append(`<audio id="audioPlayer" loop>${sources}</audio>`);
	a = $('#audioPlayer');

	const audioEl = a[0];
	audioEl.play().catch(() => {
		console.warn("[LoadingScreen] Lecture audio bloquée par le navigateur (autoplay).");
	});
	audioEl.addEventListener('error', () => {
		console.warn("[LoadingScreen] Le fichier audio en cours a échoué, tentative avec la source suivante si disponible.");
	});
}

if (enableLocalVideo) {
	$('body').append('<video id="videoPlayer" autoplay loop><source src="video.webm" type="video/webm"></video>');
	$('#videoPlayer')[0].play();
	vl = $('#videoPlayer');
	if (localAudio){
		vl[0].muted = true
	}
	$("body").css("background", "#000");
}

function onYouTubeIframeAPIReady() {
	yt = new YT.Player('youtube-video', {
		events: { 'onReady': onPlayerReady }
	});
}

function onPlayerReady() {
	if (localAudio) { yt.mute(); }
}

audioEl.volume = (typeof audioVolume !== "undefined") ? audioVolume : 1;

let currentTipIndex = 0;
let progressStartTime = 0;
let progressTimeout;
let remaining = 0;

function load_tips(config) {
    const container = document.getElementById('tipsContainer');
    const dotsContainer = document.getElementById('dotsContainer');
    container.innerHTML = '';
    dotsContainer.innerHTML = '';

    config.forEach((tip, i) => {
        const panelItem = document.createElement('div');
        panelItem.classList.add('panelItem');
        panelItem.style.opacity = 0;
        var img = ""
        if (tip.img && tip.img != ""){img = `<img src="${tip.img}">`}
        if (tip.img == ""){img = `<img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=">`}
        if (tip.img && tip.img.startsWith("/tips")){
        	img = `<img src="assets/img${tip.img}">`
        }
        var pClass = ''
        if (img == ''){
        	pClass = 'long'
        }
        panelItem.innerHTML = `
            ${img}
            <div class="bg">
	            <div class="content">
	                <h2>${tip.title}</h2>
	                <p class='${pClass}'>${tip.text}</p>
	            </div>
        	</div>
        `;
        container.appendChild(panelItem);

        const dot = document.createElement('span');
        dot.classList.add('dot');
        dotsContainer.appendChild(dot);
    });

    showTip(0);
}

function showTip(index) {
    const items = document.querySelectorAll('.panelItem');
    const dots = document.querySelectorAll('.dot');

    items.forEach((item, i) => {
        if (i === index) {
            fadeIn(item, 100);
            item.classList.add('active');
        } else {
            fadeOut(item, 100);
            item.classList.remove('active');
        }
    });

    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));

    currentTipIndex = index;
    remaining = tipsConfig[index].timeout * 1000;
    startProgress();
}

function fadeIn(element, duration) {
    element.style.display = '';
    element.style.opacity = 0;
    let last = +new Date();
    const tick = function() {
        element.style.opacity = +element.style.opacity + (new Date() - last) / duration;
        last = +new Date();

        if (+element.style.opacity < 1) {
            requestAnimationFrame(tick);
        } else {
            element.style.opacity = 1;
        }
    };
    tick();
}

function fadeOut(element, duration) {
    element.style.opacity = 1;
    let last = +new Date();
    const tick = function() {
        element.style.opacity = +element.style.opacity - (new Date() - last) / duration;
        last = +new Date();

        if (+element.style.opacity > 0) {
            requestAnimationFrame(tick);
        } else {
            element.style.opacity = 0;
            element.style.display = 'none';
        }
    };
    tick();
}

function startProgress() {
    const bar = document.getElementById('progressBar');
    const tip = tipsConfig[currentTipIndex];
    const total = remaining;

    clearTimeout(progressTimeout);
    bar.style.transition = 'none';
    bar.style.width = `${ ((tip.timeout*1000 - remaining)/(tip.timeout*1000)) * 100 }%`;

    progressStartTime = Date.now();

    setTimeout(() => {
        bar.style.transition = `width ${total/1000}s linear`;
        bar.style.width = '100%';
    }, 20);

    progressTimeout = setTimeout(nextTip, total);
}

function nextTip() {
    remaining = 0;
    showTip((currentTipIndex + 1) % tipsConfig.length);
}

load_tips(tipsConfig);
