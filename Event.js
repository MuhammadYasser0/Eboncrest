//player object
////////////////////////////////////////////////////
let player = {
  stamina: 10,
  morale: 10,
  supplies: 5,
  maxStamina: 10,
  maxMorale: 10,
  iceRope: false,
  tyrianNight: false,
};
///////////////////////////////////////////////////
//event object
///////////////////////////////////////////////////
let eventA = {
  title: "The Stone Tower",
  type: "common",
  desc: `A stone Tower rises in the thick fog ahead.Two skeletons appear by the entrance, with ice spikes protruding out of their jaws.
     A tall man with a long white beard stands over you on the balcony. As his eyes land on you, his hands rise and begin glowing a faint blue.
      As the color rises in intensity, the moon emits a purple glow staining the sky with dark patches.
       He suddenly stops and disappears into his tower...The tower's doors swing open,as the old man gestures for you to get inside...
     ...Following the old man through the tower, You feel an odd sense of warmth inside.
      As you ascend the stairs you pass by a few dimly lit rooms. The first one, a large halberd , a great sword, and a decorated dagger.
       all made of ice,and posted over extravagant plaques. a small penguin pushes a bottle over the wooden shelf,
        and a breaking sound echos through the tower. The second room, a grand library with shelves extending beyond the ceiling,
         man sized books flying throughout. A weeping golden crown sits in the center, surrounded by a thin sheet of ice. The third one,
          a 3 eyed creature with 4 stocky arms, and large fangs, frozen in ice.
          a tiny manticore inside a bottle sits on the upper shelf cussing you as you pass by. Upon Reaching the end of the tower, 
          you enter a large messy room with cobwebs covering the ceiling, and crates littering the ground.
           A large telescope penetrates a small opening by the room's corner, free of the mess afflicting the rest of the place.
            The old man lets out a loud grumble, shaking his head as he motions for you to stay in place...`,
  choices: [
    {
      header: "Stay put",
      canClear: false,
      desc: `You sit for a few minutes, as you watch him frantically make way for a large pedestal, hiding behind all of the mess.
            A large window envelopes the room with its purple light. Cracking his back, he waves for you to stand over the pedestal.
            Standing in front of the window makes you block almost all of the light coming inside.
          the room grows cold, as the old man closes his eyes, he slowly begins lifting his hands same as before.
           The faint light glowing brighter and brighter, not stopping until the room glows like a burning sun`,
      condition: function (player, event) {
        if (player.stamina >= player.maxStamina / 2)
          event.choiceA.canClear = true;
      },
      goodOutcome: `without missing a beat, you jump just in time for the ice beam shooting out of the wizard's fingers to miss you,
         carving a massive hole through the side of the tower. the night light returns to silver.You lie on the wooden floor next to the pedestal.
          Your breathing slowing down,as you wait for the wizard to make his move,with a look of amusement,
          on his face.He flicks his finger in your direction and you start leaving the ground,as he moves his hand towards the newly made hole,
          dropping you below. You hurl down the length of the tower,as the ground approaches,you close your eyes,and wait for the impact.
           But it doesn't come.your feet slowly land on the ground, as a small pouch falls from the open hole to the snow.
            Opening the pouch, you find an assortment of provisions, as well as a note inside that reads"Pleasure doing business with you".
            The note is signed S.P on the corner of the page.`,
      goodOutcomeEffect: {
        stamina: -1,
        morale: 0,
        supplies: 3,
        maxStamina: 0,
        maxMorale: 0,
      },
      badOutcome: `Your eyes slowly begin to adjust to the light -- until the cold hits.
         Your chest hollows.The wizard is now standing on the roof. *Funny.He isn't supposed to be there.*
          As you go flying,you pass through the now broken window -- suddenly, the pain hits. Glass shards scraping at your skin.
           You let out a primal shriek, as you look down towards your abdomen. A hole the size of your hand has carved its path through your flesh.
            Your consciousness fades as you fall towards the ice spikes below...Cue ending F(The Tyrian Night)`,
      flagEffect: function (player) {
        player.tyrianNight = true;
      },
    },
    {
      header: "sneak into the creatures room",
      desc: `You slowly retreat back to the stairs,as the old man continues to rummage through the mess,
         oblivious to your attempt...You walk back down the stairs,
          to the last room you passed by with the three eyed creature and the trapped manticore.
           Several frozen creatures line the inner sides of the room -- only a jumbled mess of shapes pierces through the thick ice trapping them.
            You see an oddly shaped ice rope on top of the end-table next to the three eyed creature.
             Walking past the frozen creatures,the manticore notices your approach,and begins cussing at you,furiously.
             "GET ME OUT OF HERE YOU RAGGED FREAK".You tilt your head upwards,and your eyes land on the manticore -- three shelves up...
              Taking the icy rope, you feel the cold grip on your gloves and start stretching it. Its sturdy,and feels good in your hands.
               You look to the side of the room to see a slightly open window behind one of the creatures. Grabbing your old rope out of your bag,
                you notice how ill-kept it is -- large strands fraying off of its base.
                 You remove the hook from your old rope,and onto the icy one.
                 Peeking out of the open window, you start measuring the fall,and attach the hook of the robe to the base of the window.
                 As you make your descent, you hear the same furious remarks you heard above."YOU WILL REGRET THIS YOU BASTARD.".
                  The sound gets quitter as you climb down, and your feet land on the ground.
                   A simple tug lets the rope loose, as it falls to the snow.`,
      outcome: {
        stamina: 0,
        morale: 0,
        supplies: 0,
        maxStamina: 2,
        maxMorale: 0,
      },
      flagEffect: function (player) {
        player.iceRope = true;
      },
    },
    {
      ChoiceKey: 3,
      header: "sneak into the weapons room",
      desc: `You slowly make your wait to the stairs, as the wizard continues to rummage through his mess...
        ...Walking past the room with the frozen creatures,and the library.You get inside the first room,
         with the icy weaponry.The small penguin still roams the upper shelves. Looking around, arms of all types line the walls,
          and shelves of the room. Ranging from sharp star like metal shapes,to a heavy metal ring lined with spikes along its frame. 
          Scanning the room for something usable -- Not a single normal weapon appears in sight,all of them are made of ice,
          or unfamiliar in their use.The small penguin waddles over to one of the bottles on the shelf -- right above your head... 
          ...as you continue your search for something of use. The penguin finally reaches the bottle,
           and a tiny flap of its wing sends the bottle, plummeting towards your head. As the bottle's glass frame connects with your skull,
           you glance up in the moment of impact -- to see a penguin flying down.
            You struggle to keep your balance as you plunge to the ground, hitting the wooden floor-board with your head.
             You struggle to stay awake,as you feel slight pulling against your boots,before your eyes go to sleep...
             ...You feel the cold embrace of snow,as tiny snow pellets begin to cover your face. 
             Shaking the snow off of your clothes,you stand up,and a terrible headache penetrates your skull,as you look to the stone tower--far,
             in the horizon.`,
      outcome: {
        stamina: -2,
        morale: 0,
        supplies: 0,
        maxStamina: 0,
        maxMorale: 0,
      },
    },
  ],
};
////////////////////////////////////////////////
// event related functions
////////////////////////////////////////////////
function showEventIntro(event) {
  alert(event.title);
  alert(event.desc);
}
function getEventChoices(event){
    let choices = "";
    choices+='\n';
    for(let i = 0; i < event.choices.length;i++){
        choices += event.choices[i].header;
        choices +='\n';
    }
    return choices;
}
function getChoiceNumbers(event){
    let number = "";
    for(let i =1; i<= event.choices.length;i++){
        number +=" | "+ '\n';
        number += i;
        number += " | " + '\n';
    }
    return number;
}

function getPlayerChoice(event,player){
    let playerChoice = prompt(`Your stats are: 
        Stamina: ${player.stamina}/${player.maxStamina}
        Morale: ${player.morale}/${player.maxMorale}
        Supplies: ${player.supplies}
You could: ` + getEventChoices(event),getChoiceNumbers(event)
    )
    return +playerChoice;
}
