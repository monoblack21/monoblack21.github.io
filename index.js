var wrapper = new Vue({
  el: "#wrapper",
  data:{
    level:"1",
    promptMe:[{text: "Type your name and press enter"}],
    opt:[],
    comm:"",
    elm:"",
  },
    methods:{
        enterPressed: function(e){
            var charCode;

            //Get key code (support for all browsers)
            if(e && e.which)
            {
                charCode = e.which;
            }
            else if(window.event)
            {
                e = window.event;
                charCode = e.keyCode;
            }

            if(charCode == 13)
            {
                //Call your submit function
                nextObj();
                wrapper.comm = "";

            }
        }
    }
});

// controller logic
// var currentObj = level1[0]; in j-Objects
var name = "";


function nextObj(){
    if(currentObj.use == "special"){
        name =  wrapper.comm.substring(0);
        l1b.promptMe = [{text: "Teacher: " + name + " are you paying attention!"}];
        currentObj = l1b;
        set(currentObj);
    }else if(currentObj.use == "interactive"){
        currentObj.run(wrapper.comm);
    }else if(currentObj.use == "story"){
        wrapper.level += ": " + currentObj.use;
        currentObj.run(wrapper.comm);
    }
}

function set(obj){
  wrapper.level = obj.level;
  wrapper.promptMe = obj.promptMe;
  wrapper.opt = obj.opt;
}

var first = new Audio("2d28e4c520533942c1f06254acc6-orig.wav");
var second = new Audio("7a5af0da5c1062df47f4f0e541c1-orig.wav");
var third = new Audio("daa78523a52de7f5d63e595d75c9-orig.wav");
var fourth = new Audio("859327a694de014fc04aae59a366-orig.wav");
var end = new Audio("c6368679429e3dbefd7c907e9f0f-orig.wav");

first.loop = true;
second.loop = true;
third.loop = true;
fourth.loop = true;
end.loop = true;

first.play();
