var wrapperEle = document.body.querySelector(".wrapper");
var chrs = [
  { name: "Optimus Prime", class: "leader", afl: "autobot", vehicle: "truck" },
  { name: "Megatron", class: "leader", afl: "decepticon", vehicle: "tank" },
  { name: "Bumblebee", class: "scout", afl: "autobot", vehicle: "car" },
  { name: "Starscream", class: "scout", afl: "decepticon", vehicle: "plane" },
  { name: "Ironhide", class: "soldier", afl: "autobot", vehicle: "truck" },
  { name: "Brawl", class: "soldier", afl: "decepticon", vehicle: "tank" }
];

function botLister(obj) {
  var tranEle = document.createElement("body");
  tranEle.classList.add("character");
  
  var charEle = document.createElement("body");
  charEle.innerHTML = "Name: "+obj.name;
  
  var clasEle = document.createElement("body");
 
  clasEle.innerHTML = "Class: "+obj.class.toUpperCase();
  
  
  var aflEle = document.createElement("body");
  aflEle.innerHTML = "Affiliation: "+obj.afl;
  if(obj.afl==="autobot"){
    tranEle.classList.add("autobot");
  }else{
    tranEle.classList.add("decepticon");
  }
  var vicEle = document.createElement("body");
  vicEle.innerHTML = "Vehicle: "+obj.vehicle;
  
  tranEle.appendChild(charEle);
  tranEle.appendChild(clasEle);
  tranEle.appendChild(aflEle);
  tranEle.appendChild(vicEle);
  wrapperEle.appendChild(tranEle);
}

for(var i=0; i<chrs.length; i++){
 botLister (chrs[i]); 
}