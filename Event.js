// Event storage
let stoneTower = {
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
            Standing in front of the window makes you block almost most of the light coming inside.
          The room grows cold, as the old man closes his eyes, he slowly begins lifting his hands same as before.
           The faint light glowing brighter and brighter, not stopping until the room glows like a burning sun`,
            condition: function(player, event) {
                if (player.stamina >= player.maxStamina / 2) {
                    event.choices[0].canClear = true;
                }
            },
            goodOutcome: {
                desc: `without missing a beat, you jump just in time for the ice beam shooting out of the wizard's fingers to miss you,
         carving a massive hole through the side of the tower. the night light returns to silver.You lie on the wooden floor next to the pedestal.
          Your breathing slowing down,as you wait for the wizard to make his move,with a look of amusement,
          on his face.He flicks his finger in your direction and you start leaving the ground,as he moves his hand towards the newly made hole,
          dropping you below. You hurl down the length of the tower,as the ground approaches,you close your eyes,and wait for the impact.
           But it doesn't come.your feet slowly land on the ground, as a small pouch falls from the open hole to the snow.
            Opening the pouch, you find an assortment of provisions, as well as a note inside that reads"Pleasure doing business with you".
            The note is signed S.P on the corner of the page.`,
                statChange: {
                    stamina: -1,
                    morale: 0,
                    supplies: 3,
                    maxStamina: 0,
                    maxMorale: 0,
                }
            },
            badOutcome: {
                desc: `Your eyes slowly begin to adjust to the light -- until the cold hits.
         Your chest hollows.The wizard is now standing on the roof. *Funny.He isn't supposed to be there.*
          As you go flying,you pass through the now broken window -- suddenly, the pain hits. Glass shards scraping at your skin.
           You let out a primal shriek, as you look down towards your abdomen. A hole the size of your hand has carved its path through your flesh.
            Your consciousness fades as you fall towards the ice spikes below...Cue ending F(The Tyrian Night)`,
                flagEffect: function(player) {
                    player.tyrianNight = true;
                },
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
            statChange: {
                stamina: 0,
                morale: 0,
                supplies: 0,
                maxStamina: 2,
                maxMorale: 0,
            },
            flagEffect: function(player) {
                player.iceRope = true;
            },
        },
        {
            header: "sneak into the library",
            desc: `You slowly retreat back to the stairs,as the old man continues to rummage through the mess,oblivious to your attempt...Walking past the room with the frozen creatures,you walk inside the library. The golden crown,still weeps int its icy prison -- Its body, adorned with three dark red crystals.Tears flowing out of them, seeping through the ice.The man sized books flying throughout pay you no mind, as you scan the shelves of the room.Various obscure authors fill the shelves in your reach.Flipping through the books -- no trace of dust can be found , the lettering on the hard covers still shines. Nothing of use appears in sight, as your eyes drift to the crown. Getting closer,you grab a nearby broom resting near the entrance.As you close in on the crown, the books start to slow their flight. Gripping the broom firmly you shatter the ice. You reach your hands for the crown--but your feet suddenly begin to leave the floor. Looking up--one of the books is tugging your shirt with its pages, as it flaps its vintage cover. You begin ascending through the grand library. endless shelves line the walls lit by miniature chandeliers.The book begins to slow down,as you get closer to an imposing wooden door.The door slowly opens, revealing the old man inside,tapping his foot impatiently...
          ... The man moves out of the doorway, letting the giant book carry you inside the freshly cleaned room. The book drops you on a pedestel by the window like an unatended child. The room grows cold as ice -- as the old man closes his eyes. slowly lifting his hands same as before.
          The faint blue light glowing brighter and brighter, not stopping until the room shines like a burning star `,
            condition: function(player, event) {
                if (player.stamina >= player.maxStamina / 2)
                    event.choices[2].canClear = true;
            },
            goodOutcome: {
                desc: `without missing a beat, you jump just in time for the ice beam shooting out of the wizard's fingers to miss you,
              carving a massive hole through the side of the tower. the night light returns to silver.You lie on the wooden floor next to the pedestal.
              Your breathing slowing down,as you wait for the wizard to make his move,with a look of amusement,
              on his face.He flicks his finger in your direction and you start leaving the ground,as he moves his hand towards the newly made hole,
              dropping you below. You hurl down the length of the tower,as the ground approaches,you close your eyes,and wait for the impact.
              But it doesn't come.your feet slowly land on the ground, as a small pouch falls from the open hole to the snow.
              Opening the pouch, you find an assortment of provisions, as well as a note inside that reads"Pleasure doing business with you".
              The note is signed S.P on the corner of the page.`,
                statChange: {
                    stamina: -1,
                    morale: 0,
                    supplies: 3,
                    maxStamina: 0,
                    maxMorale: 0,
                },
            },
            badOutcome: {
                desc: `Your eyes slowly begin to adjust to the light -- until the cold hits.
              Your chest hollows.The wizard is now standing on the roof. *Funny.He isn't supposed to be there.*
              As you go flying,you pass through the now broken window. Glass shards scraping at your skin.
              You let out a primal shriek, as you look down towards your abdomen -- a hole the size of your hand has carved its path through your flesh.
              Your consciousness fades as you fall towards the ice spikes below...Cue ending F(The Tyrian Night)`,
                flagEffect: function(player) {
                    player.tyrianNight = true;
                },
            },
        },
        {
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
            statChange: {
                stamina: -2,
                morale: 0,
                supplies: 0,
                maxStamina: 0,
                maxMorale: 0,
            },
        },
    ],
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////
let monolith = {
    title: "The Monolith",
    type: "common",
    desc: `A soft ringing sound echos in your head, after walking abit you see a corpse on the side of the path, then another, then another, and another...the ringing sound gets deeper and deeper as the amount of corpses piles up.one had their face entirely featureless, no eyes, no nose, no mouth either. Another had eye sockets covering its entire body. Another had 3 heads. And another had all their limps missing. The one thing in common with all them is the contorted look on their faces, accompanied by *that* wicked grin.The ringing sound reaches its deepest as the corpses lead to a large monolith. Surrounded by the same mutated corpses you have seen. Drawing nearer to the monolith, you see a depiction of a beautiful woman with fair hair and a long dress adorned with rose petals,her eyes looking to the side indifferent to your existense, beneath her are strange markings that seem oddly familiar-- An otherworldly voice begins whispering in your mind as you examine the markings "What is your greatest desire.`,
    choices: [
        {
            header: "Tell your wish",
            desc: `As the ringing subsides and the air becomes heavy,you pause to think--"I wish to never know worry again" the moment the words leave your mouth, the lady turns her eyes towards you... A sharp ache grows inside as you fall to your side. clutching your stomach you feel a cold metallic surface -- looking down you see your body turn to gold. Vying to scream,the sound cant escape your throat as your desire reaches for it`,
            flagEffect: function(player) {
                player.ladyPaw = true;
            },
        },
        {
            header: "Tear Down the monolith",
            desc: `Your tremble back, shaking your head -- the thoughts cant leave your head, and how can you escape your own mind. Looking around you at the corpses littering the ground. your eyes dart toward the tall body pile next to the monolith. You grab one of the corpses by the leg -- thick sludge oozing out of its crevices. you pull on the leg, and twist from side to side -- *snap* The leg goes with a soft sound, and the ligament separates from the body. Leg in hand, you go forth to the statue,and begin wailing your new instrument against the stone. Thick smears of rotten flesh and murky sludge painting its stone body.  Debris starts flying left and right. As the leg breaks down, it turns into a sad beaten down stick. Tossing it away, you go back to the pile for more... limp after limb after limp. Nothing stops your deluge of havoc upon the monolith. Time seems to halt in your pursuit -- until your breathing becomes so heavy, you almost collapse to the ground. You sit down on a slab nearby, and admire your handy-work. The rubble clear, and the monolith is still there, standing -- if not unrecognizable by its newly aquired coat.
        ( a flying figure starts falling in the distance.)`,
            statChange: {
                stamina: -3,
                morale: 0,
                supplies: 0,
                maxStamina: 0,
                maxMorale: 0,
            },
            flagEffect: function(player) {
                player.flyingManGood = true;
            },
        },
        {
            header: "Leave",
            desc: `You turn away from the stone construct, and the mounds of corpses surrounding the site -- the ringing still echos inside your skull as you walk away,slowly getting lighter again...(You see a skinny figure flying in the distance)`,
            flagEffect: function(player) {
                player.flyingManBad = true;
            },
        }
    ]
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let cultists = {
    title: "A group of cultists",
    type: "common",
    desc: `You hear chanting, humming, and about a dozen diffrent footsteps heading your way -- You quickly hide behined a bush, and await the source of the commotion... As they get closer you see dark figures with blood markings covering their robes. A tied figure is dragged behined them, leaving a bloody trail on the snow--while they march towards a statue in the distance, resembeling a man with the head of a goat.`,
    choices: [
        {
            header: "Approach the cultists",
            canClear: false,
            condition: function(player, event) {
                if (player.supplies >= 2) {
                    event.choices[0].canClear = true;
                }
            },
            goodOutcome: {
                desc: `You walk up to the cultists,and they surround you immediately. Quickly seizing your backpack, they carry you with them to the statue. Throwing you to the side, they start setting a fire, and place glowing rocks at the base turning the flames a deep red color. One of them approaches you, and takes a portion out of your bag, throwing the rest to the side. Nudging you towards their circle,a knife digging against your back.you have no choice but to join them. Snatching the tied man they bring him over to the circle around the flames. Closing in you cant help but vomit at the horrible stench seeping out of his body. His ears and nose are cut off. Deep slashes sinking into his body. Maggots crawling all over the open wounds. They throw him towards the fire and begin chanting in a language you do not understand. The passage of time slows down, as you collapse to the snow, passing out...You feel pecking against your boot, and open your eyes to see a sparrow pecking at them.The cultists have disappeared, leaving nothing behind except aches and your bag beneath the statue. a silver medallion glistens near the ashes as the sun begins to rest...`,
                flagEffect: function(player) {
                    player.silverMedallion = true;
                },
                statChange: {
                    stamina: 0,
                    morale: -1,
                    supplies: -2,
                    maxStamina: 0,
                    maxMorale: 0,
                },
            },
            badOutcome: {
                desc: `You walk up to the cultists, and they surround you immediately.Tying your hands and feet, you are dragged alongside the blood covered man. looking closer -- you see broad scars across his body, more prominently his back,forming a distinct star shape -- your inspection is cut short as you are pulled from the ground, and pushed towards the statue...You feel their cold gaze pierce through you, as they open your bag with a look of disappointment. You think to run -- but they surround you from every direction. Closing in, your chest tightens. your eyes begin to lose color. The gap slowly getting smaller,and smaller,as they brandish their cleavers...`,
                flagEffect: function(player) {
                    player.cultOfMaroc = true;
                },
            }
        },
        {
            header: "wait out and investigate.",
            canClear: false,
            condition: function(player, event) {
                if (player.stamina >= 2) {
                    event.choices[1].canClear = true;
                }
            },
            goodOutcome: {
                desc: `You lie in Wait for the cultists to leave, and watch them carry the tied figure -- his features slowly coming into frame; Pale skin covered in blood. thick slashes at unnatural angle. Seemingly unconscious,he is tossed to the side,while the cultists begin setting fire beneath the statue. As the flames rise high in the sky, their chants get louder and louder. One of them walks up to their victim, dragging his limp body toward the flames...Thick wood stumps surround the fire, as the pale man begins dancing in the flames. The stone pouch stuck in his mouth, barley lets out a sound...A painful amount of time passes as they dance around the flames -- you feel your insides turn against themselves, shaking the flesh walls around. Your head is getting lighter. Your Vision blurry. As the light fades from your eyes, your hiding bush catches the fall...Cold drops descend on your face, jolting you awake. Dark soot flies around you,as you see a small crate sticking out of the snow, near the statue. Walking up, you find a small cache with some rations and a silver medallion laying in the middle. You grab the medallion and rations... And the chanting returns. Turning around you see some of the cultists sprinting toward you with unnatural speed.*Shit.* You make a dash for a small rocky path by the statue, and find a small crevice below the path, climbing your way inside --fast footsteps crack the ice above , and the sound gets quieter, until its no more.`,
                flagEffect: function(player) {
                    player.silverMedallion = true;
                },
                statChange: {
                    stamina: -1,
                    morale: 0,
                    supplies: 3,
                    maxStamina: 0,
                    maxMorale: 0,
                },
            },
            badOutcome: {
                desc:`You lie in Wait for the cultists to leave, and watch them carry the tied figure -- his features slowly coming into frame; Pale skin covered in blood. thick slashes at unnatural angle. Seemingly unconscious,he is tossed to the side,while the cultists begin setting fire beneath the statue. As the flames rise high in the sky, their chants get louder and louder. One of them walks up to their victim, dragging his limp body toward the flames...Thick wood stumps surround the fire, as the pale man begins dancing in the flames. The stone pouch stuck in his mouth, barley lets out a sound...A painful amount of time passes as they dance around the flames -- you feel your insides turn against themselves, shaking the flesh walls around. Your head is getting lighter. Your Vision blurry. As the light fades from your eyes, your hiding bush catches the fall...Cold drops descend on your face, jolting you awake. Dark soot flies around you,as you see a small crate sticking out of the snow, near the statue. Walking up,you find a small cache with some rations and a silver medallion laying in the middle. You grab the medallion and rations... but the chanting returns. Turning around you see some of the cultists sprinting toward you with unnatural speed.*Shit.* You try to make a dash for a small rocky path behind the statue -- but a sharp pain below your neck drops you to the ground -- just before you could turn the corner. A small pool of blood soon concentrates around your head, and your eyes start give out as you hear footsteps on the snow...`,
                flagEffect: function(player){
                    player.cultOfMaroc = true;
                }
            }
        }
    ]
}
