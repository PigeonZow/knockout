var numPunches = 0;
var punchesPerClick = 1;

function punch() {
    numPunches += punchesPerClick;
    var punches = document.getElementById("punches")
    punches.innerHTML = numPunches;
}

