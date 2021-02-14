var numPunches = 0;
var punchesPerClick = 1;

var boxingGlovesRedBought = 0;
// var boxingGlovesBlueBought = 0;
// var boxingGlovesPinkBought = 0;
var betterSandbagBought = 0;
var muscleBought = 0;
var ironGloveBought = 0;
var thanosGloveBought = 0;

var bag = "/imgs/og_bag.png";
var bag1 = "/imgs/og_bag_effect1.png";
var bag2 = "/imgs/og_bag_effect2.png";
var bag3 = "/imgs/og_bag_effect3.png";
var bag4 = "/imgs/og_bag_broken.png";

const MUSCLE_UPGRADE_PRICE = 10;
const GLOVE_UPGRADE_PRICE = 300;
const SANDBAG_UPGRADE_PRICE = 2000;
const IRONGLOVE_UPGRADE_PRICE = 1000;
const THANOSGLOVE_UPGRADE_PRICE = 50000;

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function() {
        this.sound.play();
    }
    this.stop = function() {
        this.sound.pause();
    }
}

window.onload=function() {
    var punchingBag = document.getElementById("sandbag");
    var punchSound = new sound("/sounds/punch-sound-final.mp3");
    punchingBag.addEventListener("click", function() {
        numPunches += (punchesPerClick + punchesPerClick * boxingGlovesRedBought);
        var punchCounter = document.getElementById("punches");
        punchCounter.innerHTML = numPunches;
        punchSound.play();
        choosePunchedAnimation();
    });
}

function choosePunchedAnimation() {
    var randomInt = Math.floor(Math.random() * 3);
    if (randomInt == 0) {
        document.getElementById("sandbag").src = bag1;
    } else if (randomInt == 1) {
        document.getElementById("sandbag").src = bag2;
    } else {
        document.getElementById("sandbag").src = bag3;
    }
    setTimeout(() => {
        document.getElementById("sandbag").src = bag;
    }, 50)
        
    console.log("played animation " + randomInt); // debug
}

function buyMuscle() {
    if (numPunches >= MUSCLE_UPGRADE_PRICE) {
        numPunches -= MUSCLE_UPGRADE_PRICE;
        document.getElementById("punches").innerHTML = numPunches;
        muscleBought++;
        punchesPerClick += 1;
        document.getElementById("punchesPerClick").innerHTML = (punchesPerClick + punchesPerClick * boxingGlovesRedBought);
        console.log("bought muscle upgrade");
    } else {
        notEnoughPunches();
        console.log("not enough punches for muscle upgrade"); // debug
    }
}

function buyRedGloves() {
    if (numPunches >= GLOVE_UPGRADE_PRICE && !boxingGlovesRedBought) {
        numPunches -= GLOVE_UPGRADE_PRICE;
        document.getElementById("punches").innerHTML = numPunches;
        boxingGlovesRedBought = 1;
        document.getElementById("punchesPerClick").innerHTML = (punchesPerClick + punchesPerClick * boxingGlovesRedBought);
        document.getElementById("boxingGlovesRedBuy").disabled = true;
        console.log("bought red glove upgrade"); 
    } else {
        notEnoughPunches();
        console.log("not enough punches for red gloves upgrade"); // debug
    }
}

// function buyBlueGloves() {
//     if (numPunches >= GLOVE_UPGRADE_PRICE && !boxingGlovesBlueBought) {
//         numPunches -= GLOVE_UPGRADE_PRICE;
//         document.getElementById("punches").innerHTML = numPunches;
//         boxingGlovesBlueBought = 1;
//         document.getElementById("punchesPerClick").innerHTML = (punchesPerClick + punchesPerClick * boxingGlovesMultiplier);
//         document.getElementById("boxingGlovesBlueBuy").disabled = true;
//         console.log("bought blue glove upgrade"); 
//     } else {
//         alert("Not enough punches."); // temp
//         console.log("not enough punches for blue gloves upgrade"); // debug
//     }
// }

// function buyPinkGloves() {
//     if (numPunches >= GLOVE_UPGRADE_PRICE && !boxingGlovesPinkBought) {
//         numPunches -= GLOVE_UPGRADE_PRICE;
//         document.getElementById("punches").innerHTML = numPunches;
//         boxingGlovesPinkBought = 1;
//         document.getElementById("punchesPerClick").innerHTML = (punchesPerClick + punchesPerClick * boxingGlovesMultiplier);
//         document.getElementById("boxingGlovesPinkBuy").disabled = true;
//         console.log("bought pink glove upgrade"); 
//     } else {
//         alert("Not enough punches."); // temp
//         console.log("not enough punches for pink gloves upgrade"); // debug
//     }
// }

function buySandbag() {
    if (numPunches >= SANDBAG_UPGRADE_PRICE && !betterSandbagBought) {
        numPunches -= SANDBAG_UPGRADE_PRICE;
        document.getElementById("punches").innerHTML = numPunches;
        betterSandbagBought = 1;
        document.getElementById("betterSandbagBuy").disabled = true;
        console.log("bought sandbag upgrade");

        bag = "/imgs/gold_bag.png";
        bag1 = "/imgs/gold_bag_effect1.png";
        bag2 = "/imgs/gold_bag_effect2.png";
        bag3 = "/imgs/gold_bag_effect3.png";
        bag4 = "/imgs/gold_bag_broken.png";
        document.getElementById("sandbag").src = bag;    
    } else {
        // alert("Not enough punches."); // temp
        notEnoughPunches();
        console.log("not enough punches for sandbag upgrade"); // debug
    }
}

function notEnoughPunches(){
    document.getElementById("punches-text").style.color = '#7B0202';
    
    setTimeout(() => {
        document.getElementById("punches-text").style.color = '#000000';
    }, 200)
}

function buyIronGloves() {
    if (numPunches >= IRONGLOVE_UPGRADE_PRICE && !ironGloveBought) {
        numPunches -= IRONGLOVE_UPGRADE_PRICE;
        document.getElementById("punches").innerHTML = numPunches;
        ironGloveBought = 1;
        document.getElementById("ironGloveBuy").disabled = true;
        console.log("bought iron glove");

        var punchingBag = document.getElementById("sandbag");
        var interval_;
        punchSound = new sound("/sounds/punch-sound-final.mp3");
        
        punchingBag.onmousedown = function() {
            interval_ = setInterval( function() { 
                numPunches += (punchesPerClick + punchesPerClick * boxingGlovesRedBought);
                var punchCounter = document.getElementById("punches");
                punchCounter.innerHTML = numPunches;
                punchSound.play();
                choosePunchedAnimation();
            }, 100);;
        }
        punchingBag.onmouseup = function() {
            clearInterval(interval_);
        }
    } else {
        notEnoughPunches();
        console.log("not enough punches for iron glove upgrade"); // debug
    }
}

function buyThanos() {
    if (numPunches >= THANOSGLOVE_UPGRADE_PRICE && !thanosGloveBought) {
        numPunches -= THANOSGLOVE_UPGRADE_PRICE;
        document.getElementById("punches").innerHTML = numPunches;
        ironGloveBought = 1;
        document.getElementById("thanosGloveBuy").disabled = true;
        console.log("bought thanos glove");

        var punchingBag = document.getElementById("sandbag");
        var explosionSound = new sound("./sounds/Explosion.mp3");
        punchingBag.addEventListener("click", function() {
            explosionSound.play();
            victory();
        });
    } else {
        notEnoughPunches();
        console.log("not enough punches for thanos glove upgrade");
    }
}

function victory() {
    document.getElementById("sandbag").src = bag4;

    // remove all event listeners
    var element = document.getElementById('sandbag'),
        elementClone = element.cloneNode(true);
    element.parentNode.replaceChild(elementClone, element);
    document.getElementById("sandbag").src = bag4;
    document.getElementById("punches-text").innerHTML = "YOU WIN";
    setTimeout(function() {
        document.getElementById("sandbag").src = bag4;
    }, 50) // bad fix but no time left
}