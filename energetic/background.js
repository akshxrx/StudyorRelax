
let sunsetButton = document.querySelector('#sunset');
let youNamebutton = document.querySelector('#youName'); 
let cherrybutton = document.querySelector('#cherry'); 
let nightbutton = document.querySelector('#night'); 

sunsetButton.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('../AnimeForHumanity/energetic/backgrounds/sunset.gif')"; 
})

youNamebutton.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('../AnimeForHumanity/energetic//backgrounds/youName.gif')"; 
})

cherrybutton.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('../AnimeForHumanity/energetic/backgrounds/cherry.gif')"; 
})

nightbutton.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('../AnimeForHumanity/energetic/backgrounds/night.gif')"; 
})

let fullS = document.getElementsByClassName("buttonFull");

function getFullscreenElement() {
    return document.fullscreenElement
        || document.webkitFullscreenElement
        || document.mozFullscreenElement
        || document.msFullscreenElement
}

function toggleFullscreen() {
    if (getFullscreenElement()) {
        document.exitFullscreen();
        fulls.setAttribute('src', "../AnimeForHumanity/energetic/icon/exit.png")
    } else {
        document.documentElement.requestFullscreen().catch(console.log);
    }
}

document.addEventListener("dblclick", () => {
    document.documentElement.requestFullscreen().catch((e) => {
        console.log(e);
    });
});