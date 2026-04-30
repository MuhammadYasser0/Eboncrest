function buildSnowman(player) {
    if (player.stamina < 3) {
        let confirmation = confirm("The strain would kill you.")
        if (confirmation == true) {
            player.stamina -= 2;
            player.morale += 2;
            player.staminaDeathEnding = true;
        }
        if (confirmation == false) {
            campRunner(player);
        }
    }
    if (player.stamina >= 3) {
        alert("The smile of the snowman fills you with determination")
        player.stamina -= 2;
        player.morale += 2;
        builtSnowman = true;
    }
}
function sleep(player) {
    if (player.morale < 3) {
        let confirmation = confirm("You cant bear hearing him again.")
        if (confirmation == true) {
            player.morale -= 2;
            player.stamina += 2;
            player.pesimissitEnding = true;
        }
        if (confirmation == false) {
            campRunner(player);
        }
    }
    if (player.morale >= 3) {
        alert("*You cant keep this up, sooner or later. This path will end*")
        player.morale -= 2;
        player.stamina += 2;
        slept = true;
    }
}
function setStatToRestore(player) {
    let exit;
    statToRestore = prompt(`which stat would you like to restore? [Stamina: 1],[Morale: 2]`, "|1|2|")
    if (statToRestore == null) {
        exit = confirm("did you change your mind ? Ok => yes , cancel => no")
    }
    if (exit == true) {
        campRunner(player);
        return;
    }
    if (+statToRestore != 1 && +statToRestore != 2) {
        alert("Try again Compadre")
        spendSupplies(player);
    }
}
function getSuppliesNumber(player) {
    let number = "";
    for (let i = 1; i <= player.supplies; i++) {
        number += " | " + '\n';
        number += i;
        number += " | " + '\n';
    }
    return number;
}
function getAmountToRestore(player) {
    let exit = false;
    suppliesToBeSpent = prompt(`You have:${player.supplies}
    and your stamina is:${player.stamina}/${player.maxStamina}
    your morale is:${player.morale}/${player.maxMorale}
    how many would you like to spend?`,
        getSuppliesNumber(player))
    if (suppliesToBeSpent == null) {
        exit = confirm("did you change your mind ? Ok => yes , cancel => no")
    }
    if (exit == true) {
        campRunner(player);
        return;
    }
    if (isNaN(+suppliesToBeSpent)) {
        alert("Try again Gandarme");
        spendSupplies(player);
    }
    if (+suppliesToBeSpent > player.supplies) {
        alert("You cant spend what you dont have");
        spendSupplies(player);
    }
    if (+suppliesToBeSpent <= 0) {
        alert("Try again Friendo")
        spendSupplies(player);
    }
}
function spendSupplies(player) {
    let exit = false;
    if (player.supplies == 0) {
        alert("You dont have any supplies")
        return;
    }
    getAmountToRestore(player);
    setStatToRestore(player);
    if (+statToRestore === 1) {
        if (player.stamina + (+suppliesToBeSpent) > player.maxStamina) {
            alert("You cant exceed your max stamina");
            exit = confirm("did you change your mind ? Ok => yes , cancel => no");
            if (exit) {
                campRunner(player);
                return;
            } else {
                alert("Try again");
                spendSupplies(player);
            }
        }
        player.stamina += (+suppliesToBeSpent);
        player.supplies -= (+suppliesToBeSpent);
        spentSupplies = true;
    }
    if (+statToRestore === 2) {
        if (player.morale + (+suppliesToBeSpent) > player.maxMorale) {
            alert("You cant exceed your max morale")
            exit = confirm("did you change your mind ? Ok => yes , cancel => no");
            if (exit) {
                campRunner(player);
                return;
            } else {
                alert("Try again");
                spendSupplies(player);
            }
        }
    }
    player.morale += (+suppliesToBeSpent);
    player.supplies -= (+suppliesToBeSpent);
    spentSupplies = true;
}
function assignCampChoice(player) {
    campChoice = +prompt(`What would you like to do? 
    You can either
    Build a snowMan(Restore 2 Morale at the cost of 2 Stamina)
    : (1)
    Or
    Get some sleep(Restore 2 stamina at the cost of 2 Morale)
    : (2)
    And
    Spend Supplies(1 supply point = 1 point restored)
    :(3)
    Leave
    :(4)`, "|1|2|3|4|")
    if (campChoice != 1 && campChoice != 2 && campChoice != 3 && campChoice != 4) {
        alert("Try again")
        campRunner(player);
    }
}
function snowmanChoiceHandler(player) {
    if (campChoice === 1) {
        if (builtSnowman === true) {
            alert("You cant repeat the same action at one camp. Try again");
            campRunner(player);
        } else if (slept === true) {
            alert("You cant both: build a snowman and sleep at the same camp.")
            campRunner(player);
        } else {
            buildSnowman(player);
        }
    }
}
function sleepingChoiceHandler(player) {
    if (campChoice === 2) {
        if (slept === true) {
            alert("You cant repeat the same action at one camp. Try again");
            campRunner(player);
        } else if (builtSnowman === true) {
            alert("You cant both: build a snowman and sleep at the same camp.")
            campRunner(player);
        } else {
            sleep(player);
        }
    }
}
function spendingSuppliesHandler(player) {
    if (campChoice === 3) {
        if (spentSupplies === true) {
            alert("You cant repeat the same action at one camp. Try again");
            campRunner(player);
        } else {
            spendSupplies(player);
        }

    }
}
function leavingchoiceHandler(player) {
    if (campChoice === 4) {
        return;
    }
}