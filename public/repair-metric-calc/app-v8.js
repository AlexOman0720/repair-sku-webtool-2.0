
window.onbeforeunload = function() {
    return "Data will be lost if you leave the page, are you sure?";
  };

// Functionality of the metric calculator itself
let diags = 0
let comps = 0
let total = comps/15 + diags/30

function plusOneComp() {
    // add one
    comps = comps +1;
    //update total
    total = comps/15 + diags/30

    document.getElementById('percent').innerText = Math.round(total*100) +"%"
    document.getElementById('totalcomps').innerText = "Comps: " + comps
}
function minusOneComp() {
    // add one
    comps = comps -1;
    //update total
    total = comps/15 + diags/30

    document.getElementById('totalcomps').innerText ="Comps: " + comps
    document.getElementById('percent').innerText = Math.round(total*100) +"%"
}
function plusOneDiag() {
    // add one
    diags = diags +1;
    //update total
    total = comps/15 + diags/30
    document.getElementById('totaldiags').innerText = "Diags: " + diags
    document.getElementById('percent').innerText = Math.round(total*100) +"%"
}
function minusOneDiag() {
    // add one
    diags = diags -1;
    //update total
    total = comps/15 + diags/30
    document.getElementById('totaldiags').innerText = "Diags: " + diags
    document.getElementById('percent').innerText = Math.round(total*100) +"%"
}

//enter values manually when clicked
  function enterComps() {
    enterC = prompt("How many completes have you done?")
    while(isNaN(parseInt(enterC))){
        if (enterC === ''){
            return
        } else if(enterC === null){
            return
        }
    enterC = prompt('Try again buddy...number pleaseeee')
   }
   comps = parseInt(enterC)
   total = comps/15 + diags/30
   document.getElementById('percent').innerText = Math.round(total*100) +"%"
   document.getElementById('totalcomps').innerText = "Comps: " + comps
   increase();
   updateBars();
}
function enterDiags(){
    enterD = prompt("How many diags have you done?")
    while(isNaN(parseInt(enterD))){
        if (enterD === ''){
            return
        } else if (enterD === null){
            return
        }
        enterD = prompt("Try again buddy...need a number..")
    }
    diags = parseInt(enterD)
    total = comps/15 + diags/30
    document.getElementById('totaldiags').innerText = "Diags: " + diags
    document.getElementById('percent').innerText = Math.round(total*100) +"%"
    increase();
    updateBars();
}



//Status par Div selection/////////////////////////////////////////
// let statusBar= document.querySelector("#statusBar");

// let twoPer = document.querySelector("#two");
// let fivePer = document.querySelector("#five");
// let sevenPer = document.querySelector("#seven");
// let tenPer = document.querySelector("#ten");
// let twelvePer = document.querySelector("#twelve");
// let fifteenPer = document.querySelector("#fifteen");
// let seventeenPer = document.querySelector("#seventeen");
// let twentyPer = document.querySelector("#twenty");
// let twentytwoPer = document.querySelector("#twentytwo");
// let twentyFivePer = document.querySelector("#twentyFive");
// let twentysevenPer = document.querySelector("#twentyseven");
// let thirtyPer = document.querySelector("#thirty");
// let thirtytwoPer = document.querySelector("#thirtytwo");
// let thirtyFivePer = document.querySelector("#thirtyFive");
// let thirtysevenPer = document.querySelector("#thirtyseven");
// let fortyPer = document.querySelector("#forty");
// let fortytwoPer = document.querySelector("#fortytwo");
// let fortyFivePer = document.querySelector("#fortyFive");
// let fortysevenPer = document.querySelector("#fortyseven");
// let fiftyPer = document.querySelector("#fifty");
// let fiftytwoPer = document.querySelector("#fiftytwo");
// let fiftyFivePer = document.querySelector("#fiftyFive");
// let fiftysevenPer = document.querySelector("#fiftyseven");
// let sixtyPer = document.querySelector("#sixty");
// let sixtytwoPer = document.querySelector("#sixtytwo");
// let sixtyFivePer = document.querySelector("#sixtyFive");
// let sixtysevenPer = document.querySelector("#sixtyseven");
// let seventyPer = document.querySelector("#seventy");
// let seventytwoPer = document.querySelector("#seventytwo");
// let seventyFivePer = document.querySelector("#seventyFive");
// let seventysevenPer = document.querySelector("#seventyseven");
// let eightyPer = document.querySelector("#eighty");
// let eightytwoPer = document.querySelector("#eightytwo");
// let eightyFivePer = document.querySelector("#eightyFive");
// let eightysevenPer = document.querySelector("#eightyseven");
// let ninetyPer = document.querySelector("#ninety");
// let ninetytwoPer = document.querySelector("#ninetytwo");
// let ninetyFivePer = document.querySelector("#ninetyFive");
// let ninetysevenPer = document.querySelector("#ninetyseven");
// let oneHundredPer = document.querySelector("#oneHundred");
// function increaseColor(){
//     increaseStatusBar("rgb(134, 250, 140)")
// }
// function increaseStatusBar(color){
//     if(total >= 1){
//         oneHundredPer.style.backgroundColor = color;
//     }  
//     if (total >= 0.97){
//         ninetysevenPer.style.backgroundColor = color;
//     }
//     if (total >= 0.95){
//         ninetyFivePer.style.backgroundColor = color;

//     } 
//     if (total >= 0.92){
//         ninetytwoPer.style.backgroundColor = color;
//     }
//     if (total >=0.9){
//         ninetyPer.style.backgroundColor = color;
//     } 
//     if (total >= 0.87){
//         eightysevenPer.style.backgroundColor = color;
//     }
//     if (total >= 0.85){
//         eightyFivePer.style.backgroundColor = color;
//     } 
//     if (total >= 0.82){
//         eightytwoPer.style.backgroundColor = color;
//     }
//     if (total >= 0.8){
//         eightyPer.style.backgroundColor = color;
//     } 
//     if (total >= 0.77){
//         seventysevenPer.style.backgroundColor = color;
//     }
//     if (total >= 0.75){
//         seventyFivePer.style.backgroundColor = color;
//     } 
//     if (total >= 0.72){
//         seventytwoPer.style.backgroundColor = color;
//     }
//     if (total >= 0.7){
//         seventyPer.style.backgroundColor = color;
//     } 
//     if (total >= 0.67){
//         sixtysevenPer.style.backgroundColor = color;
//     }
//     if (total >= 0.65){
//         sixtyFivePer.style.backgroundColor = color;
//     } 
//     if (total >= 0.62){
//         sixtytwoPer.style.backgroundColor = color;
//     }
//     if (total >= 0.6){
//         sixtyPer.style.backgroundColor = color;
//     } 
//     if (total >= 0.57){
//         fiftysevenPer.style.backgroundColor = color;
//     }
//     if (total >= 0.55){
//         fiftyFivePer.style.backgroundColor = color;
//     } 
//     if (total >= 0.52){
//         fiftytwoPer.style.backgroundColor = color;
//     }
//     if (total >= 0.5){
//         fiftyPer.style.backgroundColor = color;
//     } 
//     if (total >= 0.47){
//         fortysevenPer.style.backgroundColor = color;
//     }
//     if (total >= 0.45){
//         fortyFivePer.style.backgroundColor = color;
//     } 
//     if (total >= 0.42){
//         fortytwoPer.style.backgroundColor = color;
//     }
//     if (total >= 0.4){
//         fortyPer.style.backgroundColor = color;
//     } 
//     if (total >= 0.37){
//         thirtysevenPer.style.backgroundColor = color;
//     }
//     if (total >= 0.35){
//         thirtyFivePer.style.backgroundColor = color;
//     } 
//     if (total >= 0.32){
//         thirtytwoPer.style.backgroundColor = color;
//     }
//     if (total >= 0.3){
//         thirtyPer.style.backgroundColor = color;
//     } 
//     if (total >= 0.27){
//         twentysevenPer.style.backgroundColor = color;
//     }
//     if (total >= 0.25){
//         twentyFivePer.style.backgroundColor = color;
//     } 
//     if (total >= 0.22){
//         twentytwoPer.style.backgroundColor = color;
//     }
//     if (total >= 0.2){
//         twentyPer.style.backgroundColor = color;
//     } 
//     if (total >= 0.17){
//         seventeenPer.style.backgroundColor = color;
//     }
//     if (total >= 0.15){
//         fifteenPer.style.backgroundColor = color;

//     } 
//     if (total >= 0.12){
//         twelvePer.style.backgroundColor = color;
//     }
//     if (total >= 0.1){
//         tenPer.style.backgroundColor = color;

//     } 
//     if (total >= 0.07){
//         sevenPer.style.backgroundColor = color;
//     }
//     if (total >= 0.05){
//         fivePer.style.backgroundColor = color;
        
//     }
//     if (total >= 0.02){
//         twoPer.style.backgroundColor = color;
//     }
// }
// function decreaseColor(){
//     decreaseStatusBar("#e67777")
// }
// function decreaseStatusBar(color){
//     if(total < 1){
//         oneHundredPer.style.backgroundColor = color;
//     }  
//     if (total < 0.97){
//         ninetysevenPer.style.backgroundColor = color;
//     }
//     if (total < 0.95){
//         ninetyFivePer.style.backgroundColor = color;
//     } 
//     if (total < 0.92){
//         ninetytwoPer.style.backgroundColor = color;
//     }
//     if (total < 0.9){
//         ninetyPer.style.backgroundColor = color;
//     } 
//     if (total < 0.87){
//         eightysevenPer.style.backgroundColor = color;
//     }
//     if (total < 0.85){
//         eightyFivePer.style.backgroundColor = color;
//     } 
//     if (total < 0.82){
//         eightytwoPer.style.backgroundColor = color;
//     }
//     if (total < 0.8){
//         eightyPer.style.backgroundColor = color;
//     } 
//     if (total < 0.77){
//         seventysevenPer.style.backgroundColor = color;
//     }
//     if (total < 0.75){
//         seventyFivePer.style.backgroundColor = color;
//     } 
//     if (total < 0.72){
//         seventytwoPer.style.backgroundColor = color;
//     }
//     if (total < 0.7){
//         seventyPer.style.backgroundColor = color;
//     } 
//     if (total < 0.67){
//         sixtysevenPer.style.backgroundColor = color;
//     }
//     if (total < 0.65){
//         sixtyFivePer.style.backgroundColor = color;
//     } 
//     if (total < 0.62){
//         sixtytwoPer.style.backgroundColor = color;
//     }
//     if (total < 0.6){
//         sixtyPer.style.backgroundColor = color;
//     } 
//     if (total < 0.57){
//         fiftysevenPer.style.backgroundColor = color;
//     }
//     if (total < 0.55){
//         fiftyFivePer.style.backgroundColor = color;
//     } 
//     if (total < 0.52){
//         fiftytwoPer.style.backgroundColor = color;
//     }
//     if (total < 0.5){
//         fiftyPer.style.backgroundColor = color;
//     } 
//     if (total < 0.47){
//         fortysevenPer.style.backgroundColor = color;
//     }
//     if (total < 0.45){
//         fortyFivePer.style.backgroundColor = color;
//     } 
//     if (total < 0.42){
//         fortytwoPer.style.backgroundColor = color;
//     }
//     if (total < 0.4){
//         fortyPer.style.backgroundColor = color;
//     } 
//     if (total < 0.37){
//         thirtysevenPer.style.backgroundColor = color;
//     }
//     if (total < 0.35){
//         thirtyFivePer.style.backgroundColor = color;
//     } 
//     if (total < 0.32){
//         thirtytwoPer.style.backgroundColor = color;
//     }
//     if (total < 0.3){
//         thirtyPer.style.backgroundColor = color;
//     } 
//     if (total < 0.27){
//         twentysevenPer.style.backgroundColor = color;
//     }
//     if (total < 0.25){
//         twentyFivePer.style.backgroundColor = color;
//     } 
//     if (total < 0.22){
//         twentytwoPer.style.backgroundColor = color;
//     }
//     if (total < 0.2){
//         twentyPer.style.backgroundColor = color;
//     } 
//     if (total < 0.17){
//         seventeenPer.style.backgroundColor = color;
//     }
//     if (total < 0.15){
//         fifteenPer.style.backgroundColor = color;

//     } 
//     if (total < 0.12){
//         twelvePer.style.backgroundColor = color;
//     }
//     if (total < 0.1){
//         tenPer.style.backgroundColor = color;

//     } 
//     if (total < 0.07){
//         sevenPer.style.backgroundColor = color;
//     }
//     if (total < 0.05){
//         fivePer.style.backgroundColor = color;
        
//     }
//     if (total < 0.02){
//         twoPer.style.backgroundColor = color;
//     }
// }



//Selecting all the buttons here//////////////////////////////////


//NEW STATUS BAR NEW STATUS BAR NEW STATUS BAR NEW STATUS BAR 





const green = document.querySelector("#green");
const red = document.querySelector("#red");
const superGreen = document.querySelector("#superGreen");
const down = document.querySelector("#down");
const up = document.querySelector("#up");


// let total = 0;
let greenBar= 0;
let redBar = 1;
let superGreenBar = 0;

red.style.flexGrow = redBar;
green.style.flexGrow = greenBar;
superGreen.style.flexGrow = superGreenBar;

function updateBars(){
    red.style.flexGrow = redBar;
    green.style.flexGrow = greenBar;
    superGreen.style.flexGrow = superGreenBar;
}



function increase(){
    if(total > 1.01){
        redBar = 0;
        greenBar = 1 - (total - 1);
        superGreenBar = total -1;
    }
    else if(total >= 1){
        greenBar = total;
        redBar = 0;
        superGreenBar = 0;
    } else if(total <= 0){
        redBar = 1;
        greenBar = 0;
    }
    else{
        redBar = 1 - total;
        greenBar = total;
        superGreenBar = 0;
    }
    updateBars();
    console.log(total)
    document.getElementById('percent').innerText = Math.round(total*100) +"%"
}


const decreaseComp = document.querySelector("#decreaseComp");
const totalcomps = document.querySelector("#totalComps");
const increaseComp = document.querySelector("#increaseComp");
const decreaseDiag = document.querySelector("#decreaseDiag");
const totaldiags = document.querySelector("#totaldiags");
const increaseDiag = document.querySelector("#increaseDiag");


increaseDiag.addEventListener("click",increase)
increaseComp.addEventListener("click",increase)
decreaseDiag.addEventListener("click", increase)
decreaseComp.addEventListener("click", increase)

increaseDiag.addEventListener("click",defeated)
increaseComp.addEventListener("click",defeated)
decreaseDiag.addEventListener("click", defeated)
decreaseComp.addEventListener("click", defeated)


function defeated(){
    if (total >= 1){
        boss.src = "./defeated3.0.png";
    }
    else{
        boss.src = "./boss3.0.png";
    }
}

// slect boss image////////////////
const boss = document.querySelector("#boss");

//shake ////////////////////////////////////////////////
var audio = new Audio('shorter-damage.mp3');
function playAudio() {
    audio.play()
}
const shake = [
    {transform: "rotate(5deg) scale(0.7)"},
    {transform: "rotate(-5deg) scale(1)"}
];
const grow = [
    {transform: "scale(1.2)"}
]
const timing = {
    duration: 200,
    iterations:1,
};

function hit(){
    if(total <= 1){
        boss.animate(shake, timing);
    }
};
function growing(){
    if (total < 1){
    boss.animate(grow, timing);
    }
};




//event listening for above buttons////////////////////////////////
increaseDiag.addEventListener("click",hit)
increaseComp.addEventListener("click",hit)
decreaseDiag.addEventListener("click", growing)
decreaseComp.addEventListener("click", growing)

//event listening for above buttons////////////////////////////////



//event listening for above buttons////////////////////////////////
increaseDiag.addEventListener("click", playAudio)
increaseComp.addEventListener("click", playAudio)


//event listening for above buttons//////////////

 