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
  p1.play();
  p2.stop();
  p3.stop();
  p4.stop();
});

talkBtn.addEventListener("click", (e)=>{
  p1.style.display = "none";
  p2.style.display = "block";
  p3.style.display = "none";
  p4.style.display = "none";
  p2.play();
  p1.stop();
  p3.stop();
  p4.stop();
});

confusedBtn.addEventListener("click", (e)=>{  
  p1.style.display = "none";
  p2.style.display = "none";
  p3.style.display = "block";
  p4.style.display = "none";
  p3.play();
  p1.stop();
  p2.stop();
  p4.stop();
});
excitedBtn.addEventListener("click", (e)=>{  
  p1.style.display = "none";
  p2.style.display = "none";
  p3.style.display = "none";
  p4.style.display = "block";
  p4.play();
  p1.stop();
  p2.stop();
  p3.stop();
});