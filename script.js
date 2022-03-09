// LottieInteractivity.create({
//     mode: 'scroll',
//     player: '#firstLottie',
//     actions: [
//       {
//         visibility: [0, 1],
//         type: 'play',
//         frames: [0, 100],
//       },
//     ],
//   });

var talkBtn = document.querySelector("#talking");
var idleBtn = document.querySelector("#idle");
var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");

idleBtn.addEventListener("click", (e)=>{  
  p1.style.display = "block";
  p2.style.display = "none"
});

talkBtn.addEventListener("click", (e)=>{  
  p2.style.display = "block";
  p1.style.display = "none"
});