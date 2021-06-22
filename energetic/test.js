// function openNav() {
//     document.getElementById("mainSidepanel").style.width = "1300px";
// }

// function closeNav() {
//     document.getElementById("mainSidepanel").style.width = "0";
// }

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


const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/florin-popcom/codepen/?amount=1')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}


