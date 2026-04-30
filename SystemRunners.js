// Interpreter for processing passed events
function eventInterpreter(event, player) {
    showEventIntro(event);
    choiceIndex = getPlayerChoice(event, player);
    executeChoice(event, player);
}
// Runner for processing camps
function campRunner(player) {
    assignCampChoice(player);
    leavingchoiceHandler(player);
    snowmanChoiceHandler(player);
    sleepingChoiceHandler(player);
    spendingSuppliesHandler(player);
}
// Runner for processing weather and even drawing 
function weatherRunnerForCamps(){
    drawFromWeatherPool();
    calcWhichPoolToUse();
    displayWeatherMessage();
}
function weatherRunnerForStart(){
    drawFromWeatherPool();
    calcWhichPoolToUse();
}