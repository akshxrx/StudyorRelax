function openNavbuttons() {
    document.getElementById("navButtons").style.width = "22em";
}
function closeNavbuttons() {
    document.getElementById("navButtons").style.width = "0";
}

var sec = 0;
function pad(val) { return val > 9 ? val : "0" + val; }
setInterval(function() {
    document.getElementById("sec").innerHTML = pad(++sec % 60);
    document.getElementById("minutes").innerHTML = pad(parseInt(sec / 60, 10));
}, 1000);
var n = localStorage.getItem('on_load_counter');