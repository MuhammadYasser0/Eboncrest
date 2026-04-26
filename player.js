// Player object
let player = {
    stamina: 10,
    morale: 10,
    supplies: 5,
    maxStamina: 10,
    maxMorale: 10,
    iceRope: false,
    tyrianNight: false,
    ladyPaw: false,
    flyingManGood: false,
    flyingManBad: false,
    silverMedallion: false,
    cultOfMaroc: false,
    
}
//event Interpreter variables
let choiceIndex;
let outcome;
let goodOutcome;
//camp system variables
let campChoice=0;
let suppliesToBeSpent= "";
let statToRestore="";
let spentSupplies= false;
let slept = false;
let builtSnowman = false;

