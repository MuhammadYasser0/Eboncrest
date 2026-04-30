// Player object
let player = {
    stamina: 6,
    morale: 6,
    supplies: 4,
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
//
let currentEventIndex;
let rareEventGoodOutcome = false;
let rareEventBadOutcome = false;
//
let campAdditive = 0;
