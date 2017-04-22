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
  use:"story",
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
  use:"story",
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
  use:"story",
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
   use:"story",
   level: "1: introduction",
   promptMe:[
       {text: "Teacher: Today my students, we will be exploring the life of a very famous man. Ayo Aloko."},
       {text: "Teacher: As students of the Galatical History Core. It is our duty to undercover what truely happened in the past"},
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
   use:"story",
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
    use:"story",
    level: "2: introduction",
    promptMe:[
        {text: "Second level"},
        {text: "Insert cool art here"},
    ],
    opt:[{text:"[press enter to continue]"}],
    run:function(text){
        set(l2a);
        currentObj = l2a;
    }
   
}
