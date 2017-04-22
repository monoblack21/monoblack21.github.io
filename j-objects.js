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
  level: "1: intoduction",
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

}

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
}

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

}

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
}

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
}

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
}

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
}

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
}

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
}
var l2e = {
    use:"interactive",
    level: "2",
    promptMe:[
        {text: ""},
    ],
    opt:[{text:"look at mirror"}],
    run:function(text){
        switch(text.toLowerCase()){
        case "got to 11 blue":
            set(l2e);
            currentObj = l2e;
            break;
        default:
            wrapper.promptMe.push({text:"~" + text + " is not an option"});
        }

    }
}
