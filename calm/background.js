let sunsetButton = document.querySelector("#sunset");
let youNamebutton = document.querySelector("#youName");
let bloodbutton = document.querySelector("#blood");
let cherrybutton = document.querySelector("#cherry");
let nightbutton = document.querySelector("#night");
let blackbutton = document.querySelector("#black");

sunsetButton.addEventListener("click", () => {
  document.body.style.backgroundImage =
    "url('../AnimeForHumanity/calm/backgrounds/sunset.gif')";
});

youNamebutton.addEventListener("click", () => {
  document.body.style.backgroundImage =
    "url('../AnimeForHumanity/calm//backgrounds/youName.gif')";
});

bloodbutton.addEventListener("click", () => {
  document.body.style.backgroundImage =
    "url('../AnimeForHumanity/calm//backgrounds/blood.gif')";
});

cherrybutton.addEventListener("click", () => {
  document.body.style.backgroundImage =
    "url('../AnimeForHumanity/calm/backgrounds/cherry.gif')";
});

nightbutton.addEventListener("click", () => {
  document.body.style.backgroundImage =
    "url('../AnimeForHumanity/calm/backgrounds/night.gif')";
});

blackbutton.addEventListener("click", () => {
  document.body.style.backgroundImage =
    "url('../AnimeForHumanity/calm/backgrounds/weathering.gif')";
});

let fullS = document.getElementsByClassName("buttonFull");

function getFullscreenElement() {
  return (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullscreenElement ||
    document.msFullscreenElement
  );
}

function toggleFullscreen() {
  if (getFullscreenElement()) {
    document.exitFullscreen();
    fulls.setAttribute("src", "../AnimeForHumanity/calm/icon/exit.png");
  } else {
    document.documentElement.requestFullscreen().catch(console.log);
  }
}

document.addEventListener("dblclick", () => {
  if (getFullscreenElement()) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen().catch((e) => {
      console.log(e);
    });
  }
});
