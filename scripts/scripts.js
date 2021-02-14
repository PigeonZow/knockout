var numPunches = 100;
var punchesPerClick = 1;

var boxingGlovesBought = 0;
var betterSandbagBought = 0;
var muscleBought = 0;

var punchesUntilBreak = 25;
var sandbagDurability = 25;

const MUSCLE_UPGRADE_PRICE = 10;
const GLOVE_UPGRADE_PRICE = 300;
const SANDBAG_UPGRADE_PRICE = 500;

function punch() {
    numPunches += (punchesPerClick + punchesPerClick * boxingGlovesBought);
    var punchCounter = document.getElementById("punches");
    punchCounter.innerHTML = numPunches;
    punchesUntilBreak--;

    // if (punchesUntilBreak <= 0) {
    //     breakPunchingBag();
    // }

    choosePunchedAnimation();
}

function choosePunchedAnimation() {
    var randomInt = Math.floor(Math.random() * 3);
    if (randomInt == 0) {
        document.getElementById("sandbag").src = "./imgs/og_bag_effect1.png";
    } else if (randomInt == 1) {
        document.getElementById("sandbag").src = "./imgs/og_bag_effect2.png";
    } else {
        document.getElementById("sandbag").src = "./imgs/og_bag_effect3.png";
    }
    setTimeout(() => {
        document.getElementById("sandbag").src = "./imgs/og_bag.png";
    }, 100)
        
    console.log("played animation " + randomInt); // debug
}

// function breakPunchingBag() {

// }

function buyMuscle() {
    if (numPunches >= MUSCLE_UPGRADE_PRICE) {
        numPunches -= MUSCLE_UPGRADE_PRICE;
        document.getElementById("punches").innerHTML = numPunches;
        muscleBought++;
        punchesPerClick += 1;
        document.getElementById("punchesPerClick").innerHTML = (punchesPerClick + punchesPerClick * boxingGlovesBought);
        console.log("bought muscle upgrade");
    } else {
        notEnoughPunches();
        console.log("not enough punches for muscle upgrade"); // debug
    }
}

function buyGloves() {
    if (numPunches >= GLOVE_UPGRADE_PRICE && !boxingGlovesBought) {
        numPunches -= GLOVE_UPGRADE_PRICE;
        document.getElementById("punches").innerHTML = numPunches;
        boxingGlovesBought = 1;
        document.getElementById("punchesPerClick").innerHTML = (punchesPerClick + punchesPerClick * boxingGlovesBought);
        document.getElementById("boxingGlovesBuy").disabled = true;
        console.log("bought glove upgrade"); 
    } else {
        alert("Not enough punches."); // temp
        console.log("not enough punches for gloves upgrade"); // debug
    }
}

function buySandbag() {
    if (numPunches >= SANDBAG_UPGRADE_PRICE && !betterSandbagBought) {
        numPunches -= SANDBAG_UPGRADE_PRICE;
        betterSandbagBought = 1;
        console.log("bought sandbag upgrade");
    } else {
        alert("Not enough punches."); // temp
        console.log("not enough punches for sandbag upgrade"); // debug
    }
}

function notEnoughPunches(){
    var i;
    document.getElementById("punches-text").style.color = '#7B0202';
    
    setTimeout(() => {
        document.getElementById("punches-text").style.color = '#000000';
    }, 300)

    
}

