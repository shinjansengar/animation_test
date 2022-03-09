var talkBtn = document.querySelector("#talking");
var idleBtn = document.querySelector("#idle");
var confusedBtn = document.querySelector("#confused");
var excitedBtn = document.querySelector("#excited");

var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var p3 = document.querySelector("#p3");
var p4 = document.querySelector("#p4");

idleBtn.addEventListener("click", (e)=>{  
  p1.style.display = "block";
  p2.style.display = "none";
  p3.style.display = "none";
  p4.style.display = "none";
});

talkBtn.addEventListener("click", (e)=>{  
  p1.style.display = "none";
  p2.style.display = "block";
  p3.style.display = "none";
  p4.style.display = "none";
});

confusedBtn.addEventListener("click", (e)=>{  
  p1.style.display = "none";
  p2.style.display = "none";
  p3.style.display = "block";
  p4.style.display = "none";
});
excitedBtn.addEventListener("click", (e)=>{  
  p1.style.display = "none";
  p2.style.display = "none";
  p3.style.display = "none";
  p4.style.display = "block";;
});