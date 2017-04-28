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
      {text: "Teacher: Your first time in the simulator is always the toughest, so let's review the objective."},
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
    {text: "Teacher: What? Listen closley,  today is your class's first day with the time simulator. You must be ready."},
    {text: "Teacher: Your first time in the simulator is always the toughest, so let's review the objective."},
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
       {text: "Teacher: As students of the Galatical Historical Core. It is your duty to undercover what truely happened in the past"},
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
             wrapper.elm = l1e.elm;
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
       {text: "Have fun!!"},
   ],
   elm:"http://netdna.walyou.netdna-cdn.com/wp-content/uploads//2011/06/AsciiArt04.gif",
    opt:[{text:"[press enter to continue]"}],
   run:function(text){
       set(l2a);
       currentObj = l2a;
       wrapper.elm = "";
       first.pause();
       second.play();
   }
};

// ------ Level 2------
var l2a = {
    use:"interactive",
    level: "2",
    promptMe:[
        {text: "You are dizzy, very dizzy. Getting your brain tossed into another another person's mind is no easy feat. However, you have trained for this for the past nine months."},
        {text: "Teacher: Dont be suprised students by the dizziness! Training has officially begun."},
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
        {text: "It is white, very white. You are in a room lit by a fluorescent tube. You hear water pouring and your hands feel slippery and wet. It seems you are washing your hands. Scratch that, those are definitely not your hands. Whose hands are those?"},
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
        {text: "With things clearing up, you remember that there is an objective and must continue."},
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
        {text: "You currently have the same perspective as Ayo Aloko. This means you and Ayo could be  used interchangeably, As you enter the room with the label 11 blue, you take a glance around the room. It seems that most people are at their desks writing something."},
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
        {text: "Ayo: Aloko how's your Head Boy speech coming along"},
        {text: "Ayo: Well I've narrowed down the way i want to attack the situation but don't know how to actually get the words down. David help me."},
        {text: " Hmm it seems the boy's name is David"},
        {text: "David: Why don't you try to free style a first version and then revise it with your goals in mind."},
        {text: "Ayo: Wow David you are a genius thanks!"}
    ],
    opt:[{text: "Press any letter then enter to begin level 3: The speech of days"}],
    run:function(){
        set(l3a);
        currentObj = l3a;
        second.pause();
        thrid.play();
    }
};

var l3a ={
    use:"story",
    level: "3",
    promptMe:[
        {text: "Ayo is about to try to freestyle the speech to see where he needs to work on."},
        {text: "Ayo: Good day teachers, students and the local management; my name is Ayo Aloko and I am running for the head boy position."},
        {text: "Ayo: So what are my goals as your head boy? Well I want to make Chrisland a more conducive place for learning and have well rounded students."},
        {text: "Ayo: To do this I believe all students and teachers must be able to acknowledge that a good student isn't just book smart but has all round knowledge on areas such as sports, current affairs and such skills."},
        {text: "Ayo: This would make us truly proud of our school and the students that it creates."},
        {text: "Ayo: That way we can also our vice principal stop talking about his high school because they would'nt be able to compare us to the any more."},
    ],
    opt:[{text: "Press any letter and enter to continue"}],
    run:function(){
        set(l3b);
        currentObj = l3b;
    }
};

var l3b ={
    use:"story",
    level: "3",
    promptMe:[
        {text: "Aloko goes further in his speech,On concluding the speech David give his comments on areas for improvement."},
        {text: "David: Wow Mr.'I don't know what to say' that was a pretty detailed speech needs polishing but still decent for a freestyle. However are you sure you want to call out the vice principal in it."},
        {text: "Ayo: Well yes. We always see him talk about how proud he is about his about his school. I want him to remember me clearly after this speech, because there are three round of speeches involved in being the head boy and each need a vote from the local management, which he is part of."},
        {text: "David: Wow so you aren't leaving anything to chance are you. Anyways, make sure you incorporate some thing into your essay to show your actions in the school for the last 5 years are that of a head boy"},
        {text: "Ayo: Yeah I've thought of that. I guess i better not mention anything about being punctual because everyone at our school knows that's a lie."},
        {text: "David: Haha so true, well better write what you have now and continue to revise it till the speech day. See you, bye"},
        {text: "Ayo: Bye"},
    ],
    opt:[{text: "Press any letter and enter to continue"}],
    run:function(){
        set(l3c);
        currentObj = l3c;
    }
};

var l3c ={
    use:"story",
    level: "3",
    promptMe:[
        {text: "Time goes by and adjustments are made to make the speech more befitting for the crowd. Even a tiny element of humor was added in order to secure the students votes. It is currently the day of the election"},
        {text: "Headset: It seem the neural networks are stronger in this region of memory switch to interactive mode"},
    ],
    opt:[{text: "press enter to switch to interactive mode"}],
    run:function(text){
            set(l3d);
            currentObj = l3d;
            break;
    }
};

var l3d ={
    use:"interactive",
    level: "3",
    promptMe:[
        {text: "Your in front of a dresser. There are three tie to choose from:"},
        {text: "[1] A golden plain tie"},
        {text: "[2] A blue and black stripped tie"},
        {text: "[3] A green polka dot tie"},
    ],
    opt:[{text: "type the number for the tie you want then press enter"}],
    run:function(text){
        switch(text.toLowerCase()){
        case "1":
            set(l3e_a);
            currentObj = l3e_a;
            break;
        case "2":
            set(l3e_a);
            currentObj = l3e_b;
            break;
        case "3":
            set(l3e_a);
            currentObj = l3e_c;
            break;
        default:
            wrapper.promptMe.push({text:"~" + text + " is not an option"});
        }

    }
};

var l3e_a ={
    use:"interactive",
    level: "3",
    promptMe:[
        {text: "Thats an interesting choice. Nothing better than looking like a bar of gold"},
        {text: "Ayo puts on the golden tie"},
    ],
    opt:[{text: "Press any letter and enter to continue"}],
    run:function(){
            set(l3f);
            currentObj = l3f;
    }
};

var l3e_b ={
    use:"interactive",
    level: "3",
    promptMe:[
        {text: "That's an interesting choice. Nothing better than looking sharp with a black and blue stirpe tie."},
        {text: "Ayo puts on the black and blue stirpe tie"},
    ],
    opt:[{text: "Press any letter and enter to continue"}],
    run:function(){
            set(l3f);
            currentObj = l3f;
    }
}

var l3e_c ={
    use:"interactive",
    level: "3",
    promptMe:[
        {text: "That's an interesting choice. Polka dots always catchese the eyes of taste."},
        {text: "Ayo puts on the polkadot tie"},
    ],
    opt:[{text: "Press any letter and enter to continue"}],
    run:function(){
            set(l3f);
            currentObj = l3f;
    }
};

var l3f ={
    use:"interactive",
    level: "3",
    promptMe:[
        {text: "Now with your outfit being perfect, all thats left is to go to the school's assembly ground and give your speech"},
    ],
    opt:[{text: "go to assembly ground"}],
    run:function(text){
        switch(text.toLowerCase()){
        case "go to assembly ground":
            set(l3g);
            currentObj = l3g;
            break;
        default:
            wrapper.promptMe.push({text:"~" + text + " is not an option"});
        }

    }
};

var l3g ={
    use:"interactive",
    level: "3",
    promptMe:[
        {text: "You arrive at the assembly ground with less than a minute to spare. This is the main event that has taken Ayo Aloko so many days to prepare. The event is about to start."},
        {text: "Headset: switching to story mode"},
    ],
    opt:[{text: "press enter to continue"}],
    run:function(text){
            set(l3h);
            currentObj = l3h;
        }
};

var l3h ={
    use:"story",
    level: "3",
    promptMe:[
        {text: "Ayo is sitting on stage with the remaining contestants when an announcement was made."},
        {text: "Announcer: Next up on the stage is Ayo Aloko "},
        {text: "With that Ayo's heart beat starts to rise. He must be nervous."},
        {text: "David: Dont't worry, You got this"},
        {text: "Ayo: Thanks man"},
        {text: "and with that Ayo Aloko stands to give his speech"}
    ],
    opt:[{text: "press enter to continue"}],
    run:function(){
        set(l3i);
        currentObj = l3i;
    }
};

var l3i ={
    use:"story",
    level: "3",
    promptMe:[
      {text: "Ayo: Good day teachers, students and the local management; my name is Ayo Aloko and I am running for the head boy position."},
      {text: "Ayo: In the past few weeks, a few of us in year 11 have been contesting for the Head boy position."},
      {text: "points toward othe students running for the position"},
      {text: "Ayo: So what are my goals if elected as your head boy? Well I want to make Chrisland a more conducive place for learning and have well rounded students."},
      {text: "Ayo: To do this I believe all students and teachers must be able to acknowledge that a good student isn't just book smart but has all round knowledge on areas such as sports, current affairs and such skills."},
      {text: "Ayo: To reach this goal we have to ensre that the relationships between teachers and students must be strengthen as they are the one's who have experience on what an all rounded student should be like."},
      {text: "Ayo: This would make us truly proud of our school and the students that it creates."},
      {text: "Ayo: That way we can also our vice principal stop talking about his high school because they would'nt be able to compare us to the any more."},
      {text: "Ayo then turns his head to the vice principal and gives a friendly smile."},
    ],
    opt:[{text: "press enter to continue"}],
    run:function(){
        set(l3j);
        currentObj = l3j;
    }
};

var l3j ={
    use:"story",
    level: "3",
    promptMe:[
      {text: "Headset: Time's up, ending simulation."}
    ],
    opt:[{text: "press enter to return back to the real world"}],
    run:function(){
        set(l4a);
        currentObj = l4a;
        third.pause();
        fourth.play();
    }
};

var l4a ={
    use:"story",
    level:"4",
    promptMe:[
      {text: "Teacher: so students that was your first experience in the simulator"},
      {text: "Teacher: Was there any difference between what you saw and learned about Ayo Aloko in class last week"},
    ],
    opt:[{text: "press enter to continue"}],
    run:function(){
        set(l4b);
        currentObj = l4b;
    }
};

var l4b ={
    use:"story",
    level:"4",
    promptMe:[
      {text: "A kid two seats down from your right raises his hand."},
      {text: "Teacher: Yes, donald?"},
      {text: "Donald: We learned in class that his speech was a freestyle, however only the rough draft of the speech was a rough draft."},
      {text: "Teacher: Wow donald, that is correct! If you were paying attention you would see the difference between the final and first speech. Let us take a look at his goals for his speech then see how he revised the speech."},
    ],
    opt:[{text: "press enter to continue"}],
    run:function(){
        set(l4c);
        currentObj = l4c;
    }
};

var l4c ={
    use:"story",
    level:"4",
    promptMe:[
      {text: "Teacher: as you can see he had these initial goals"},
      {text: "1. Student support"},
      {text: "2. Teacher support"},
      {text: "3. Local management support"},
      {text: "Methods and strategy"},
      {text: "1. Charisma to show I can handle public speeches"},
      {text: "2. Use work done around school to show responsibility"},
      {text: "3. keep under the 10 min mark."},
    ],
    opt:[{text: "press enter to continue"}],
    run:function(){
        set(l4d);
        currentObj = l4d;
    }
};

var l4d ={
    use:"story",
    level:"4",
    promptMe:[
      {text: "Teacher: Those goals changed the speach form this "},
      {text: "Ayo is about to try to freestyle the speech to see where he needs to work on."},
      {text: "Ayo: Good day teachers, students and the local management; my name is Ayo Aloko and I am running for the head boy position."},
      {text: "Ayo: So what are my goals as your head boy? Well I want to make Chrisland a more conducive place for learning and have well rounded students."},
      {text: "Ayo: To do this I believe all students and teachers must be able to acknowledge that a good student isn't just book smart but has all round knowledge on areas such as sports, current affairs and such skills."},
      {text: "Ayo: This would make us truly proud of our school and the students that it creates."},
      {text: "Ayo: That way we can also our vice principal stop talking about his high school because they would'nt be able to compare us to the any more."},
      {text: "|---------------------------------------|"},
      {text: "Teacher: And thn transformed the speech to this"},
      {text: "Ayo: Good day teachers, students and the local management; my name is Ayo Aloko and I am running for the head boy position."},
      {text: "Ayo: In the past few weeks, a few of us in year 11 have been contesting for the Head boy position."},
      {text: "points toward othe students running for the position"},
      {text: "Ayo: So what are my goals if elected as your head boy? Well I want to make Chrisland a more conducive place for learning and have well rounded students."},
      {text: "Ayo: To do this I believe all students and teachers must be able to acknowledge that a good student isn't just book smart but has all round knowledge on areas such as sports, current affairs and such skills."},
      {text: "Ayo: To reach this goal we have to ensre that the relationships between teachers and students must be strengthen as they are the one's who have experience on what an all rounded student should be like."},
      {text: "Ayo: This would make us truly proud of our school and the students that it creates."},
      {text: "Ayo: That way we can also our vice principal stop talking about his high school because they would'nt be able to compare us to the any more."},
      {text: "Ayo then turns his head to the vice principal and gives a friendly smile."},

    ],
    opt:[{text: "press enter to continue"}],
    run:function(){
        set(l4e);
        currentObj = l4e;
    }
};

var l4e ={
    use:"story",
    level:"4",
    promptMe:[
      {text: "Teacher: As you all know this speach lead to a very succesfull outcome for Ayo Aloko, because he was able to advance to the next stage of elimination for the Head boy position."},
      {text: "Teacher: Well students next week we will begin to study the life of Genghis Khan. Class is dissmissed."},

    ],
    opt:[{text: "press enter to end"}],
    run:function(){
        set(l4f);
        currentObj = l4f;
        fourth.pause();
        end.play();
    }
};

var l4f ={
    use:"story",
    level:"4",
    promptMe:[
      {text: "|~~~~~~~~~~~~~~Le Fin~~~~~~~~~~~~~~~|"},
      {text: "Written by Ayokanmi Olaniyi Aloko"},    ],
    opt:[{text: "press enter to do nothing"}],
};
