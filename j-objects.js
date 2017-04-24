var l1a = {
  use:"special",
  level: "1",
  promptMe:[
    {text:"Type your name and press enter"}
  ],
  opt:[],
};

// to battle context
var currentObj = l1a;

var l1b = {
  use:"interactive",
  level: "1: introduction",
  opt:[
    {text: "yes"},
    {text: "no"},
  ],
  run: function(text){
    switch (text.toLowerCase()) {
      case "yes":
        currentObj = l1c_a;
        set(l1c_a);

        break;
      case "no":
        currentObj = l1c_b;
        set(l1c_b);

        break;
      default:
        wrapper.promptMe.push({text:"~" + text + " is not an option"});

    }
  }

};

var l1c_a = {
  use:"interactive",
  level: "1: introduction",
  promptMe:[
      {text: "Teacher: Good, because today is your class's first day with the time simulator. You must be ready"},
      {text: "Teacher: Your first in time the simulator is always the toughest, so let's review the objective."},
  ],
  opt:[
      {text: "review objective"},
  ],
    run:function(text){
        switch(text.toLowerCase()){
          case "review objective":
            set(l1d);
            currentObj = l1d;
            break;
        default:
            wrapper.promptMe.push({text:"~" + text + " is not an option"});
        }
    }
};

var l1c_b = {
  use:"interactive",
  level: "1: introduction",
  promptMe:[
    {text: "Teacher: What? Listen closley,  today is your class's first day with the time simulator. You must be ready"},
    {text: "Teacher: Your first in time the simulator is always the toughest, so let's review the objective."},
  ],
  opt:[
      {text: "review objective"},
  ],
    run:function(text){
        switch(text.toLowerCase()){
          case "review objective":
            set(l1d);
            currentObj = l1d;
            break;
          default:
            wrapper.promptMe.push({text:"~" + text + " is not an option"});
        }
    }

};

var l1d = {
   use:"interactive",
   level: "1: introduction",
   promptMe:[
       {text: "Teacher: Today my students, we will be exploring the life of a very famous man. Ayo Aloko."},
       {text: "Teacher: As students of the Galatical Hiinteractive Core. It is our duty to undercover what truely happened in the past"},
       {text: "Teacher: So put on your headsets and begin the exploration"},
   ],
   opt:[
       {text: "put on headset"},
   ],
   run:function(text){
       switch(text.toLowerCase()){
         case "put on headset":
             set(l1e);
             currentObj = l1e;
             break;
         default:
             wrapper.promptMe.push({text:"~" + text + " is not an option"});
      }
   }
}

var l1e = {
   use:"interactive",
   level: "1: introduction",
   promptMe:[
       {text: "Press any letter then enter to continue"},
       {text: "Insert cool art here"},
   ],
    opt:[{text:"[press enter to continue]"}],
   run:function(text){
       set(l2a);
       currentObj = l2a;
   }
};

// ------ Level 2------
var l2a = {
    use:"interactive",
    level: "2",
    promptMe:[
        {text: "You are dizzy, very dizzy. Getting your brain tossed into another another persson's mind is no easy feat. However, you have trained for this for the past nine months."},
        {text: "Teacher: Suck it up!! Training has officially begun."},
    ],
    opt:[{text:"look around"}],
    run:function(text){
        switch(text.toLowerCase()){
        case "look around":
            set(l2b);
            currentObj = l2b;
            break;
        default:
            wrapper.promptMe.push({text:"~" + text + " is not an option"});
        }

    }
};

var l2b = {
    use:"interactive",
    level: "2",
    promptMe:[
        {text: "- It is white, very white. You are in a room lit by a fluorescent tube. You hear water pouring and your hands feel slippery and wet. It seems you are washing your hands. Scratch that those are definitely not your hands. Whose hands are those?"},
    ],
    opt:[{text:"look at mirror"},
         {text:"finish washing hands"}
        ],
    run:function(text){
        switch(text.toLowerCase()){
        case "look at mirror":
           set(l2c_a);
            currentObj = l2c_a;
            break;
        case "finish washing hands":
            set(l2c_b);
            currentObj = l2c_b;
            break;
        default:
            wrapper.promptMe.push({text:"~" + text + " is not an option"});
        }

    }
};

var l2c_a = {
    use:"interactive",
    level: "2",
    promptMe:[
        {text: "You are startled by what you see, It seems you are in a boy's body. Most likely a teen. From your studies at the Galactic Core, you remember a picture in the hallway of a boy  holding a screw."},
        {text: "You: No way! This is Ayo Aloko's body."},
        {text: "With things clearing up, you remember that there is an objective and must continue. "},
    ],
    opt:[{text:"exit bathroom"}],
    run:function(text){
        switch(text.toLowerCase()){
        case "exit bathroom":
            set(l2d);
            currentObj = l2d;
            break;
       default:
            wrapper.promptMe.push({text:"~" + text + " is not an option"});
        }

    }
};

var l2c_b = {
    use:"interactive",
    level: "2",
    promptMe:[
        {text: "You twist the faucet knob shut, then proceed to look for paper towels to dry your hands."},
        {text: "You: What? No paper towels no hand dryer?. Where am I? "},
    ],
    opt:[{text:"look at mirror"}],
    run:function(text){
        switch(text.toLowerCase()){
        case "look at mirror":
            set(l2c_a);
            currentObj = l2c_a;
            break;
        default:
            wrapper.promptMe.push({text:"~" + text + " is not an option"});
        }

    }
};

var l2d = {
    use:"interactive",
    level: "2",
    promptMe:[
        {text: "You exit the bathroom, you notice the sweat drops sliding down your for head, and feel the tightness of something around your your neck."},
        {text: "You: Great, it's supper hot and I'm wearing school blazer and tie. Just like the academy."},
        {text: "You: With this heat, I have to be in Nigeria, more precisely Chrisland college. It's so weird how a high school has the 'college' part in their name. Any way's, if what i remember from the last test is right, his class room is 11 blue."},
    ],
    opt:[{text:"go to 11 blue"}],
    run:function(text){
        switch(text.toLowerCase()){
        case "go to 11 blue":
            set(l2e);
            currentObj = l2e;
            break;
        default:
            wrapper.promptMe.push({text:"~" + text + " is not an option"});
        }

    }
};

var l2e = {
    use:"interactive",
    level: "2",
    promptMe:[
        {text: "Headset: Warning! neural networks for specimen Ayo Aloko are low in this region. Switching to story mode."},
        {text: "Headset: Tip - Since story mode allows for less interactivity, it makes it easier to digest information you have figured out so far."}
    ],
    opt:[{text:"enter story mode"}],
    run:function(text){
        switch(text.toLowerCase()){
        case "enter story mode":
            set(l2f);
            currentObj = l2f;
            break;
        default:
            wrapper.promptMe.push({text:"~" + text + " is not an option"});
        }

    }
};

var l2f ={
    use:"story",
    level: "2",
    promptMe:[
        {text: "You currently have the same perspective as Ayo Aloko. As you enter the room with the label 11 blue, you take a glance around the room. It seems that most people are at their desks writing something."},
        {text: "You reach for a purple bag. On opening it, there is further searching being done for a note book. The name on the note book is Ayo Aloko. You go on to rip a middle page and then proceed to take a pen. You take a seat at a desk an proceed to scribble things down "}
    ],
    opt:[{text: "Press any letter then enter to continue"}],
    run:function(){
            set(l2g);
            currentObj = l2g;
    }
};

var l2g ={
    use:"story",
    level: "2",
    promptMe:[
        {text: "It seems to be a list."},
        {text: "1. Student support"},
        {text: "2. Teacher support"},
        {text: "3. Local management support"},
        {text: "Methods and strategy"},
        {text: "1. Charisma to show I can handle public speeches"},
        {text: "2. Use work done around school to show responsibility"},
        {text: "3. keep under the 10 min mark."},
        {text: "Teacher: clicker point---which do you think he focuses more on Logos or ethos?"},
    ],
    opt:[{text: "logos"},
         {text: "ethos"}
        ],
    run:function(text){
        switch(text.toLowerCase()){
        case "logos":
            set(l2h_a);
            currentObj = l2h_a;
            break;
        case "ethos":
            set(l2h_b);
            currentObj = l2h_b;
            break;
        default:
            wrapper.promptMe.push({text:"~" + text + " is not an option"});
        }

    }
};

var l2h_a ={
    use:"story",
    level: "2",
    promptMe:[
        {text: "Logos? For the most part, Ayo is trying to make an argument of some sort and is mostly relying on his past actions and credibility"},
    ],
    opt:[{text: "Press any letter then enter to continue"}],
    run:function(){
        set(l2i);
        currentObj = l2i;
    }
};

var l2h_b ={
    use:"story",
    level: "2",
    promptMe:[
        {text: "Yes! For the most part, Ayo is trying to make an argument of some sort and is mostly relying on his past actions and credibility"},
    ],
    opt:[{text: "Press any letter then enter to continue"}],
    run:function(){
        set(l2i);
        currentObj = l2i;
    }
};

var l2i ={
    use:"story",
    level: "2",
    promptMe:[
        {text: "You look up and see a boy approaching you from the right.However, he is grinning from cheek to cheek and looks very mischievous."},
        {text: "boy: Aloko how's your Head Boy speech coming along"},
        {text: "You: Well I've narrowed down the way i want to attack the situation but don't know how to actually get the words down. David help me."},
        {text: " Hmm it seems the boy's name is David"},
        {text: "David: Why don't you try to free style a first version and then revise it with your goals in mind."},
        {text: "You: Wow David you are a genius thanks!"}
    ],
    opt:[{text: "Press any letter then enter to continue"}],
    run:function(){
        set(l2i);
        currentObj = l2i;
    }
};
