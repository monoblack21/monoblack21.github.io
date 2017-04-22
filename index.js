var wrapper = new Vue({
  el: "#wrapper",
  data:{
    level:"1",
    promptMe:[{text: "Type your name and press enter"}],
    opt:[],
    comm:"",
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
        l1b.promptMe = [{text: "Teacher: " + name + " are you paying attention!"}]
        currentObj = l1b;
        set(currentObj);
    }else if(currentObj.use == "interactive"){
        currentObj.run(wrapper.comm);
    }
}

function set(obj){
  wrapper.level = obj.level;
  wrapper.promptMe = obj.promptMe;
  wrapper.opt = obj.opt;
}
