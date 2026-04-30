// Global functions. used by interpreter for now
function showEventIntro(event) {
    alert(event.title);
    alert(event.desc);
}

function getEventType(event){
    return event.type;
}

function getEventChoices(event) {
    let choices = "";
    choices += '\n';
    for (let i = 0; i < event.choices.length; i++) {
        choices += event.choices[i].header;
        choices += '\n';
    }
    return choices;
}

function getChoiceNumbers(event) {
    let number = "";
    for (let i = 1; i <= event.choices.length; i++) {
        number += " | " + '\n';
        number += i;
        number += " | " + '\n';
    }
    return number;
}

function getPlayerChoice(event, player) {
    let playerChoice = +prompt(`Your stats are: 
    Stamina: ${player.stamina}/${player.maxStamina}
    Morale: ${player.morale}/${player.maxMorale}
    Supplies: ${player.supplies}
    You could: ` + getEventChoices(event), getChoiceNumbers(event)
    )
    if(isNaN(playerChoice)){
        alert("Try again");
        getPlayerChoice(event,player);
    }
    return playerChoice - 1;
}


function conditionHandler(player, event, key) {
    if (key.includes("condition")) {
        event.choices[choiceIndex][key](player, event);
    }
    if (event.choices[choiceIndex].canClear == true) {
        goodOutcome = true;
    }
    if (event.choices[choiceIndex].canClear == undefined) {
        outcome = true;
    }
}

function noVariedOutcomeHandler(event, player,key) {
    if (outcome) {
        if(key === "desc"){
            alert(event.choices[choiceIndex].desc);
        }
        if (key === "flagEffect") {
            event.choices[choiceIndex][key](player);
        }
        if (key === "statChange") {
            player.stamina += event.choices[choiceIndex][key].stamina;
            player.morale += event.choices[choiceIndex][key].morale;
            player.supplies += event.choices[choiceIndex][key].supplies;
            player.maxStamina += event.choices[choiceIndex][key].maxStamina;
            player.maxMorale += event.choices[choiceIndex][key].maxMorale;
        }
        
    }
}

function variedOutcomeHandler(event, player, key) {
    if (goodOutcome === true ) {
        if (key === "goodOutcome") {
            alert(event.choices[choiceIndex][key].desc)
            for(let proprety in event.choices[choiceIndex][key]){
                if (proprety === "flagEffect") {
                    event.choices[choiceIndex][key][proprety](player);
                }
                if (proprety === "statChange") {
                    player.stamina += event.choices[choiceIndex][key][proprety].stamina;
                    player.morale += event.choices[choiceIndex][key][proprety].morale;
                    player.supplies += event.choices[choiceIndex][key][proprety].supplies;
                    player.maxStamina += event.choices[choiceIndex][key][proprety].maxStamina;
                    player.maxMorale += event.choices[choiceIndex][key][proprety].maxMorale;
                }
            }
            
        }
        
    }else if(goodOutcome === false){
        if (key ==="badOutcome") {
            alert(event.choices[choiceIndex][key].desc);
            for(let proprety in event.choices[choiceIndex][key]){
                if (proprety ==="flagEffect") {
                    event.choices[choiceIndex][key][proprety](player);
                }
                if (proprety === "statChange") {
                    player.stamina += event.choices[choiceIndex][key][proprety].stamina;
                    player.morale += event.choices[choiceIndex][key][proprety].morale;
                    player.supplies += event.choices[choiceIndex][key][proprety].supplies;
                    player.maxStamina += event.choices[choiceIndex][key][proprety].maxStamina;
                    player.maxMorale += event.choices[choiceIndex][key][proprety].maxMorale;
                }
            }
        }
    }
}

function executeChoice(event, player) {
    goodOutcome = false;
    outcome = false
    for (let key in event.choices[choiceIndex]) {
        conditionHandler(player, event, key);
        noVariedOutcomeHandler(event,player,key);
        variedOutcomeHandler(event,player,key);
    }
}