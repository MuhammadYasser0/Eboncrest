//weather pool to draw from;
let weatherIndex;
let eventIndex;
let weatherPool = [-15, -14, -13, -12, -11, -10, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// event object array categories
let common = [stoneTower, monolith, cultists];
let rare = [elevator, spring];
let conditional = [];
//variables for determining array to draw from
let drawFromCommon = false;
let drawFromRare = false;
let drawFromConditional = false;
//flag = true if any conditional array objects = true;
let conditionalEvent = false;
// event array chance if no conditonal
let commonChance = 85;
let rareChance = 15;
let conditionalChance = 0;
//event array chance if conditional
function conditionalBasedChange() {
    if (conditionalEvent) {
        commonChance = 35;
        rareChance = 15;
        conditionalChance = 50;
    }
}

function drawFromWeatherPool() {
    weatherIndex = Math.floor(Math.random() * weatherPool.length);
}

//to be used by master loop
function resetWeatherVariables(){
    drawFromCommon = false;
    drawFromRare = false;
    drawFromConditional = false;
    conditionalEvent = false;
    rareEventBadOutcome = false;
    rareEventGoodOutcome = false;
    weatherIndex = 0;
    eventIndex = 0;
    commonChance = 85;
    rareChance = 15;
    conditionalChance = 0;
}

//to be used by master loop
function drawEventFromPool(player) {

    if (drawFromRare) {
        eventIndex = Math.floor(Math.random() * rare.length);
        if(weatherPool[weatherIndex]>0){
            rareEventGoodOutcome = true;
        }
        if(weatherPool[weatherIndex]<0){
            rareEventBadOutcome = true;
        }
        eventInterpreter(rare[eventIndex], player);
        rare.splice(eventIndex,1);
        return;
    }
    if (drawFromCommon) {
        eventIndex = Math.floor(Math.random() * common.length);
        eventInterpreter(common[eventIndex], player);
        common.splice(eventIndex,1);
        return;
    }
    if (drawFromConditional){
        eventInterpreter(conditional[eventIndex],player);
    }
}
function updateEventChances() {
    commonChance -= weatherPool[weatherIndex];
    rareChance += weatherPool[weatherIndex];
}
//weatherMeassages
function displayWeatherMessage() {
    if (weatherPool[weatherIndex] >= -15 && weatherPool[weatherIndex] <= -10) {
        alert("Hail starts pouring from the thick clouds above. Thick snow covers the area -- with no cirtters appearing in sight.");
    } else if (weatherPool[weatherIndex] >= 10 && weatherPool[weatherIndex] < 15) {
        alert("The sun feels warmer on this side of the mountain, you see a tall deer munching on grass in the distance.");
    } else {
        alert("Out of noweher, green rain pours from the dark clouds above over the area -- sudden green growth sprouts from the snow.")
    }

}
function checkConditionalEvents() {
    if(player.flyingManBad || player.flyingManGood){
        conditionalEvent = true;
        eventIndex= 0;
    }
}
function eventChanceHandler(valToCompare) {
    checkConditionalEvents();
    if (conditionalEvent == true) {
        conditionalBasedChange();
        updateEventChances();
        if (valToCompare < commonChance) {
            drawFromRare = true;
            return;
        }
        if (valToCompare < conditionalChance) {
            drawFromCommon = true;
            return;
        }
        if (valToCompare >= conditionalChance) {
            drawFromConditional = true;
            conditionalEvent = false;
            return;
        }
    }
}
function calcWhichPoolToUse() {
    let valToCompare = Math.floor(Math.random() * 100);
    eventChanceHandler(valToCompare);
    if (conditionalEvent == false) {
        updateEventChances()
        if (valToCompare <= rareChance) {
            drawFromRare = true;
            return;
        }
        if (valToCompare > rareChance) {
            drawFromCommon = true;
            return;
        }
    }
}