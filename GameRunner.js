let gameOver = false;
let campCounter = 1;
function displayIntro() {
    alert("Welcom to Eboncrest, a game about a mountain filled with mystery and danger in every corner.");
    alert("You take on the role of a brave adventurer(or someone with a deathwish) in search of the rumored endless treasures of the mountain. ");
    alert("The game is simple: just try to survive all 3 events so you can reach the summit, or die trying");
    alert("there is also a *Friend* that you might meet on your journey.");
    alert("Your journey begins at a camp set up at the foot of the mountain, as you prepare for your journey.");
    alert("With your backpack ready and your equipment checked you set off")
}
function flagChecker(player) {
    if (player.tyrianNight === true) {
        gameOver = true;
        alert("Game over.");
        alert(`Ending A
        The Tyrian Night` );
        return;
    }
    if (player.ladyPaw === true) {
        gameOver = true;
        alert("Game over.");
        alert(`Ending B
        The lady's Paw` );
        return;
    }
    if (player.ladyPaw === true) {
        gameOver = true;
        alert("Game over.");
        alert(`Ending B
        The lady's Paw` );
        return;
    }
    if (player.cultOfMaroc === true) {
        gameOver = true;
        alert("Game Over.");
        alert(`Ending C
        The Cult Of Maroc`)
        return;
    }
    if (player.stamina <= 0 || player.morale <= 0) {
        gameOver = true;
        alert("Game Over.")
        return;
    }
}
function maxStatChecker(player){
    if(player.stamina > player.maxStamina){
        player.stamina = player.maxStamina;
    }
    if(player.morale > player.maxMorale){
        player.morale = player.maxMorale;
    }
}
function gameRunner(player) {
    displayIntro();
    weatherRunnerForStart();
    for (let i = campCounter; i <= 3 && !gameOver; i++) {
        drawEventFromPool(player);
        campCounter+= campAdditive;
        flagChecker(player);
        maxStatChecker(player);
        if(gameOver){
            return;
        }
        if(campCounter > 3){
            alert("You Win!");
            gameOver = true;
            return;
        }
        resetWeatherVariables();
        weatherRunnerForCamps();
        campRunner(player);
    }
}
