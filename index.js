var present = {
  level:"1",
  promptMe:"where",
  opt:[
    {text: "waster"},
    {text: "mools "},
    {text: "mm"}
  ],
  comm:"",

}
var wrapper = new Vue({
  el: "#wrapper",
  data:{
    level: present.level,
    promptMe: present.promptMe,
    opt:present.opt,
    comm:present.comm,
  }
});
