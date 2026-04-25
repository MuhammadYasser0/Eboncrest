// Interpreter for processing passed events

function eventInterpreter(event, player) {
    showEventIntro(event);
    choiceIndex = getPlayerChoice(event, player);
    executeChoice(event, player);
}