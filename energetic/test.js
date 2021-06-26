// function openNav() {
//     document.getElementById("mainSidepanel").style.width = "1300px";
// }

// function closeNav() {
//     document.getElementById("mainSidepanel").style.width = "0";
// }

window.addEventListener("load", function() {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
});

function openNavbuttons() {
    document.getElementById("navButtons").style.width = "20em";

}

function closeNavbuttons() {
    document.getElementById("navButtons").style.width = "0";
}

var sec = 0;

function pad(val) { return val > 9 ? val : "0" + val; }
setInterval(function() {
    document.getElementById("seconds").innerHTML = pad(++sec % 60);
    document.getElementById("minutes").innerHTML = pad(parseInt(sec / 60, 10));
}, 1000);


var n = localStorage.getItem('on_load_counter');




