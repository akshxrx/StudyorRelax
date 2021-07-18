const soundwrapper = document.querySelector(".soundwrapper"),

thunderName = soundwrapper.querySelector(".thunder-details .thunder-name"),
thunderplayPauseBtn = soundwrapper.querySelector(".thunder-play-pause"),
thundermainAudio = soundwrapper.querySelector("#thunder-main-audio"),
thundermusicList = soundwrapper.querySelector(".thunder-music-list"),
thunderclosemoreMusic = thundermusicList.querySelector("#thunderclose");

let thundere = soundwrapper.querySelector('.thunder-volume-slider-con');
let thundereInner = soundwrapper.querySelector('.thunder-volume-slider');
let thunderaudio = thundermainAudio;
let thunderdrag = false;

let thunderbtn = soundwrapper.querySelector('.thundergif');

let thunderisMusicPaused = true;
window.addEventListener("load", ()=>{
  thunderloadMusic(1);
});

function thunderloadMusic(indexNumb){
  thunderName.innerText = "Thunder";
  thundermainAudio.src = `../AnimeForHumanity/calm/sounds/thunder.mp3`;
}

//play music function
function thunderplayMusic(){
  soundwrapper.classList.add("paused");
  thunderplayPauseBtn.querySelector("i").innerText = "pause";
  thundermainAudio.play();
  thundermainAudio.loop = true;
}

//pause music function
function thunderpauseMusic(){
  soundwrapper.classList.remove("paused");
  thunderplayPauseBtn.querySelector("i").innerText = "play_arrow";
  thundermainAudio.pause();
}

// play or pause button event
thunderplayPauseBtn.addEventListener("click", ()=>{
  const thunderisMusicPlay = soundwrapper.classList.contains("paused");
  // if (thunderisMusicPlay) {
  //   thunderpauseMusic();
  //   document.body.style.backgroundImage = "url('../AnimeForHumanity/calm/calm_pic/med-back.gif')";    //code for toggling the background image when pressed on the sound
  // } else {
  //   thunderplayMusic();
  //   document.body.style.backgroundImage = "url('../AnimeForHumanity/calm/calm_pic/thunder-back.gif')"; 
  // }
  thunderisMusicPlay ? thunderpauseMusic() : thunderplayMusic();
});

const thunderulTag = soundwrapper.querySelector("thunderul");
// let create li tags according to array length for list
for (let i = 0; i < 1; i++) {
  //let's pass the song name, artist from the array
  let thunderliTag = `<li li-index="${i + 1}">
                <div class="row">
                  <span>Thunder</span>
                </div>
                <audio class="thunder" src="../AnimeForHumanity/calm/sounds/thunder.mp3"></audio>
              </li>`;
  
}


thundere.addEventListener('mousedown',function(thunderev){
  thunderdrag = true;
  thunderupdateBar(thunderev.clientX);
});
document.addEventListener('mousemove',function(thunderev){
  if(thunderdrag){
    thunderupdateBar(thunderev.clientX);
  }
});
document.addEventListener('mouseup',function(thunderev){
  thunderdrag = false;
});


var thunderupdateBar = function (thunderx, thundervol) {
  var thundervolume = thundere;
       var thunderpercentage;
       //if only volume have specificed
       //then direct update volume
       if (thundervol) {
        thunderpercentage = thundervol * 100;
       } else {
           var thunderposition = thunderx - thundervolume.offsetLeft;
           thunderpercentage = 100 * thunderposition / thundervolume.clientWidth;
       } 

       if (thunderpercentage > 100) {
        thunderpercentage = 100;
       }
       if (thunderpercentage < 0) {
        thunderpercentage = 0;
       }
       
       //update volume bar and video volume
       thundereInner.style.width = thunderpercentage +'%';
       thunderaudio.volume = thunderpercentage / 100;
};


thunderbtn.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('../AnimeForHumanity/calm/calm_pic/thunder-back.gif')"; 
})

// -----------------------------------------------------------------------------------------------------

let cityName = soundwrapper.querySelector(".city-details .city-name"),
cityplayPauseBtn = soundwrapper.querySelector(".city-play-pause"),
citymainAudio = soundwrapper.querySelector("#city-main-audio"),
citymusicList = soundwrapper.querySelector(".city-music-list"),
cityclosemoreMusic = soundwrapper.querySelector("#cityclose");

let citye = soundwrapper.querySelector('.city-volume-slider-con');
let cityeInner = soundwrapper.querySelector('.city-volume-slider');
let cityaudio = citymainAudio;
let citydrag = false;

let citybtn = soundwrapper.querySelector('.citygif');

let cityisMusicPaused = true;
window.addEventListener("load", ()=>{
  cityloadMusic();
});

function cityloadMusic(){
  cityName.innerText = "City";
  citymainAudio.src = `../AnimeForHumanity/calm/sounds/city.mp3`;
}

//play music function
function cityplayMusic(){
  soundwrapper.classList.add("paused");
  cityplayPauseBtn.querySelector("i").innerText = "pause";
  citymainAudio.play();
  citymainAudio.loop = true;
}

//pause music function
function citypauseMusic(){
  soundwrapper.classList.remove("paused");
  cityplayPauseBtn.querySelector("i").innerText = "play_arrow";
  citymainAudio.pause();
}

// play or pause button event
cityplayPauseBtn.addEventListener("click", ()=>{
  const cityisMusicPlay = soundwrapper.classList.contains("paused");
  // if (cityisMusicPlay) {
  //   citypauseMusic();
  //   document.body.style.backgroundImage = "url('../AnimeForHumanity/calm/calm_pic/med-back.gif')"; 
  // } else {
  //   cityplayMusic();
  //   document.body.style.backgroundImage = "url('../AnimeForHumanity/calm/calm_pic/city-back.gif')"; 
  // }
  cityisMusicPlay ? citypauseMusic() : cityplayMusic();
});

const cityulTag = soundwrapper.querySelector("cityul");
// let create li tags according to array length for list
for (let i = 0; i < 1; i++) {
  //let's pass the song name, artist from the array
  let cityliTag = `<li li-index="${i + 1}">
                <div class="row">
                  <span>City</span>
                </div>
                <audio class="city" src="../AnimeForHumanity/calm/sounds/city.mp3"></audio>
              </li>`;
  
}


citye.addEventListener('mousedown',function(cityev){
  citydrag = true;
  cityupdateBar(cityev.clientX);
});
document.addEventListener('mousemove',function(cityev){
  if(citydrag){
    cityupdateBar(cityev.clientX);
  }
});
document.addEventListener('mouseup',function(cityev){
  citydrag = false;
});


var cityupdateBar = function (cityx, cityvol) {
  var cityvolume = citye;
       var citypercentage;
       //if only volume have specificed
       //then direct update volume
       if (cityvol) {
        citypercentage = cityvol * 100;
       } else {
           var cityposition = cityx - cityvolume.offsetLeft;
           citypercentage = 100 * cityposition / cityvolume.clientWidth;
       } 

       if (citypercentage > 100) {
        citypercentage = 100;
       }
       if (citypercentage < 0) {
        citypercentage = 0;
       }
       
       //update volume bar and video volume
       cityeInner.style.width = citypercentage +'%';
       cityaudio.volume = citypercentage / 100;
};

citybtn.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('../AnimeForHumanity/calm/calm_pic/city-back.gif')"; 
})

// -----------------------------------------------------------------------------------------------------

let oceanName = soundwrapper.querySelector(".ocean-details .ocean-name"),
oceanplayPauseBtn = soundwrapper.querySelector(".ocean-play-pause"),
oceanmainAudio = soundwrapper.querySelector("#ocean-main-audio"),
oceanmusicList = soundwrapper.querySelector(".ocean-music-list"),
oceanclosemoreMusic = soundwrapper.querySelector("#cityclose");

let oceane = soundwrapper.querySelector('.ocean-volume-slider-con');
let oceaneInner = soundwrapper.querySelector('.ocean-volume-slider');
let oceanaudio = oceanmainAudio;
let oceandrag = false;

let oceanbtn = document.querySelector('.oceangif');

let oceanisMusicPaused = true;
window.addEventListener("load", ()=>{
  oceanloadMusic();
});

function oceanloadMusic(){
  oceanName.innerText = "Ocean";
  oceanmainAudio.src = `../AnimeForHumanity/calm/sounds/ocean.mp3`;
}

//play music function
function oceanplayMusic(){
  soundwrapper.classList.add("paused");
  oceanplayPauseBtn.querySelector("i").innerText = "pause";
  oceanmainAudio.play();
  oceanmainAudio.loop = true;
}

//pause music function
function oceanpauseMusic(){
  soundwrapper.classList.remove("paused");
  oceanplayPauseBtn.querySelector("i").innerText = "play_arrow";
  oceanmainAudio.pause();
}

// play or pause button event
oceanplayPauseBtn.addEventListener("click", ()=>{
  const oceanisMusicPlay = soundwrapper.classList.contains("paused");
  // if (oceanisMusicPlay) {
  //    oceanpauseMusic();
  //    document.body.style.backgroundImage = "url('../calm/calm_pic/med-back.gif')"; 
  // } else {
  //    oceanplayMusic();
  //    document.body.style.backgroundImage = "url('../calm/calm_pic/ocean-back.gif')"; 
  // }
  oceanisMusicPlay ? oceanpauseMusic() : oceanplayMusic();
});

const oceanulTag = soundwrapper.querySelector("oceanul");
// let create li tags according to array length for list
for (let i = 0; i < 1; i++) {
  //let's pass the song name, artist from the array
  let oceanliTag = `<li li-index="${i + 1}">
                <div class="row">
                  <span>Ocean</span>
                </div>
                <audio class="ocean" src="../AnimeForHumanity/calm/sounds/ocean.mp3"></audio>
              </li>`;
  
}


oceane.addEventListener('mousedown',function(oceanev){
  oceandrag = true;
  oceanupdateBar(oceanev.clientX);
});
document.addEventListener('mousemove',function(oceanev){
  if(oceandrag){
    oceanupdateBar(oceanev.clientX);
  }
});
document.addEventListener('mouseup',function(oceanev){
  oceandrag = false;
});


var oceanupdateBar = function (oceanx, oceanvol) {
  var oceanvolume = oceane;
       var oceanpercentage;
       //if only volume have specificed
       //then direct update volume
       if (oceanvol) {
        oceanpercentage = oceanvol * 100;
       } else {
           var oceanposition = oceanx - oceanvolume.offsetLeft;
           oceanpercentage = 100 * oceanposition / oceanvolume.clientWidth;
       } 

       if (oceanpercentage > 100) {
        oceanpercentage = 100;
       }
       if (oceanpercentage < 0) {
        oceanpercentage = 0;
       }
       
       //update volume bar and video volume
       oceaneInner.style.width = oceanpercentage +'%';
       oceanaudio.volume = oceanpercentage / 100;
};

oceanbtn.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('../AnimeForHumanity/calm/calm_pic/ocean-back.gif')"; 
})

// -----------------------------------------------------------------------------------------------------

let birdName = soundwrapper.querySelector(".bird-details .bird-name"),
birdplayPauseBtn = soundwrapper.querySelector(".bird-play-pause"),
birdmainAudio = soundwrapper.querySelector("#bird-main-audio"),
birdmusicList = soundwrapper.querySelector(".bird-music-list"),
birdclosemoreMusic = soundwrapper.querySelector("#birdclose");

let birde = soundwrapper.querySelector('.bird-volume-slider-con');
let birdeInner = soundwrapper.querySelector('.bird-volume-slider');
let birdaudio = birdmainAudio;
let birddrag = false;

let birdbtn = document.querySelector('.birdgif');

let birdisMusicPaused = true;
window.addEventListener("load", ()=>{
  birdloadMusic();
});

function birdloadMusic(){
  birdName.innerText = "Birds";
  birdmainAudio.src = `../AnimeForHumanity/calm/sounds/birds.mp3`;
}

//play music function
function birdplayMusic(){
  soundwrapper.classList.add("paused");
  birdplayPauseBtn.querySelector("i").innerText = "pause";
  birdmainAudio.play();
  birdmainAudio.loop = true;
}

//pause music function
function birdpauseMusic(){
  soundwrapper.classList.remove("paused");
  birdplayPauseBtn.querySelector("i").innerText = "play_arrow";
  birdmainAudio.pause();
}

// play or pause button event
birdplayPauseBtn.addEventListener("click", ()=>{
  const birdisMusicPlay = soundwrapper.classList.contains("paused");
  // if (birdisMusicPlay) {
  //   birdpauseMusic();
  //   document.body.style.backgroundImage = "url('../calm/calm_pic/med-back.gif')"; 
  // } else {
  //   birdplayMusic();
  //   document.body.style.backgroundImage = "url('../calm/calm_pic/birds-back.gif')"; 
  // }
  birdisMusicPlay ? birdpauseMusic() : birdplayMusic();
});

const birdulTag = soundwrapper.querySelector("birdul");
// let create li tags according to array length for list
for (let i = 0; i < 1; i++) {
  //let's pass the song name, artist from the array
  let birdliTag = `<li li-index="${i + 1}">
                <div class="row">
                  <span>Birds</span>
                </div>
                <audio class="bird" src="../AnimeForHumanity/calm/sounds/birds.mp3"></audio>
              </li>`;
  
}


birde.addEventListener('mousedown',function(birdev){
  birddrag = true;
  birdupdateBar(birdev.clientX);
});
document.addEventListener('mousemove',function(birdev){
  if(birddrag){
    birdupdateBar(birdev.clientX);
  }
});
document.addEventListener('mouseup',function(birdev){
  birddrag = false;
});


var birdupdateBar = function (birdx, birdvol) {
  var birdvolume = birde;
       var birdpercentage;
       //if only volume have specificed
       //then direct update volume
       if (birdvol) {
        birdpercentage = birdvol * 100;
       } else {
           var birdposition = birdx - birdvolume.offsetLeft;
           birdpercentage = 100 * birdposition / birdvolume.clientWidth;
       } 

       if (birdpercentage > 100) {
        birdpercentage = 100;
       }
       if (birdpercentage < 0) {
        birdpercentage = 0;
       }
       
       //update volume bar and video volume
       birdeInner.style.width = birdpercentage +'%';
       birdaudio.volume = birdpercentage / 100;
};

birdbtn.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('../AnimeForHumanity/calm/calm_pic/birds-back.gif')"; 
})

// ------------------------------------------------------------------------------------------