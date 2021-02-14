var numPunches = 0;
var punchesPerClick = 1;
var muscleBought = 0;
var boxingGlovesBought = 0;

function punch() {
    numPunches += (punchesPerClick + punchesPerClick * boxingGlovesBought);
    var punchCounter = document.getElementById("punches")
    punchCounter.innerHTML = numPunches;
}

function notEnoughPunchesAnim() {

}

function buyMuscle() {
    if (numPunches >= 10) {
        numPunches -= 10;
        var punchCounter = document.getElementById("punches")
        punchCounter.innerHTML = numPunches;
        muscleBought++;
        punchesPerClick += 1;
        var punchMeter = document.getElementById("punchesPerClick") 
        punchMeter.innerHTML = (punchesPerClick + punchesPerClick * boxingGlovesBought);
    } else {
        console.log("not enough punches for muscle")
        alert("Not enough punches.") // temp
    }
}

function buyGloves() {
    if (numPunches >= 300 && boxingGlovesBought != 1) {
        numPunches -= 300;
        var punchCounter = document.getElementById("punches")
        punchCounter.innerHTML = numPunches;
        boxingGlovesBought = 1;
        var punchMeter = document.getElementById("punchesPerClick") 
        punchMeter.innerHTML = (punchesPerClick + punchesPerClick * boxingGlovesBought);
        document.getElementById("boxingGlovesBuy").disabled = true;
    } else {
        console.log("not enough punches for gloves")
        alert("Not enough punches.")
    }
}