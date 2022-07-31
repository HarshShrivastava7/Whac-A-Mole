let btns = document.querySelector(".btns");
let score = document.querySelector(".score");
let timeLeft = document.querySelector(".time-left");
let btn = document.querySelectorAll(".btn");

// console.log(btns[0].innerHTML = `<img src = "item-1.jpeg">`);
// let highScores = [];
let imgBtn;
let counter = 0;

function photoChange(){
  btn.forEach(function(e){
    e.innerHTML = "";
  })
  imgBtn = btn[Math.floor(Math.random()*6)].innerHTML = `<img src="mole.jfif">`;
}
let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth();
let date = currentDate.getDate();
let hr = currentDate.getHours();
let min = currentDate.getMinutes();
let sec = currentDate.getSeconds();
let sec60Date = new Date(year, month, date, hr, min, sec+3);
// console.log(currentDate);
// console.log(sec60Date);
function sixtySecs(){
  let newCurrentDate = new Date();
  let interval = sec60Date.getTime() - newCurrentDate.getTime();
  let diff = Math.floor(interval %(60*1000) / 1000);
    timeLeft.innerHTML = `Time Left : ${diff}`;
  if(diff === 0){
    var audio = new Audio("wrong.mp3");
    audio.play();
    timeLeft.innerHTML = `Time Over !`;
    setTimeout(function(){
      let highScores = localStorage.getItem("highS")?JSON.parse(localStorage.getItem("highS")):[];
      // console.log(highScores);
      highScores.push(counter);
      // console.log(counter);
      highScores.sort(function(a, b){return b-a});
      // console.log(highScores);
      if(highScores.length > 5){
        highScores.pop();
      }
      localStorage.setItem("highS", JSON.stringify(highScores));
      let high = JSON.parse(localStorage.getItem("highS"));
      // console.log(high);
      document.querySelector("body").innerHTML = `<h1 class="high-score">High Scores</h1>
      <div class="highscores1">${high[0]}</div>
      <div class="highscores2">${high[1]}</div>
      <div class="highscores3">${high[2]}</div>
      <div class="highscores4">${high[3]}</div>
      <div class="highscores5">${high[4]}</div>
      <div class="clear-button"><button type="button" name = "button" class="clear-btn">Clear High Scores</button></div>`;

      if(isNaN(high[1])){
        document.querySelector(".highscores2").innerHTML = "";
        document.querySelector(".highscores2").classList.remove("highscores2");
      }

      if(isNaN(high[2])){
        document.querySelector(".highscores3").innerHTML = "";
        document.querySelector(".highscores3").classList.remove("highscores3");
      }

      if(isNaN(high[3])){
        document.querySelector(".highscores4").innerHTML = "";
        document.querySelector(".highscores4").classList.remove("highscores4");
      }

      if(isNaN(high[4])){
        document.querySelector(".highscores5").innerHTML = "";
        document.querySelector(".highscores5").classList.remove("highscores5");
      }

      document.querySelector(".clear-btn").addEventListener("click", function(){
        localStorage.removeItem("highS");
        document.querySelector("body").innerHTML = `<h1 class="high-score">High Scores</h1>
        <div class="highscores1">0</div>
        <div class="highscores2">0</div>
        <div class="highscores3">0</div>
        <div class="highscores4">0</div>
        <div class="highscores5">0</div>
        <div class="clear-button"><button type="button" name = "button" class="clear-btn">Clear High Scores</button></div>`;

        if(isNaN(high[1])){
          document.querySelector(".highscores2").innerHTML = "";
          document.querySelector(".highscores2").classList.remove("highscores2");
        }

        if(isNaN(high[2])){
          document.querySelector(".highscores3").innerHTML = "";
          document.querySelector(".highscores3").classList.remove("highscores3");
        }

        if(isNaN(high[3])){
          document.querySelector(".highscores4").innerHTML = "";
          document.querySelector(".highscores4").classList.remove("highscores4");
        }

        if(isNaN(high[4])){
          document.querySelector(".highscores5").innerHTML = "";
          document.querySelector(".highscores5").classList.remove("highscores5");
        }
      })
    },2500);
    clearInterval(remainingTime);
    clearInterval(photoChangeInterval);
    btn.forEach(function(e){
      e.innerHTML = " ";
    })
  }
  return diff;
}
// instead of new date we can use let countdown = 60; function count(){countdown--}; setInterval(count,1000);

let photoChangeInterval = setInterval(photoChange,400);

let remainingTime = setInterval(sixtySecs,1000);

btn.forEach(function(e){
  // mousedown is faster than click
  e.addEventListener("mousedown",function(){
    // console.log(imgBtn);
    // console.log(e.innerHTML);
    if(e.innerHTML === imgBtn){
      counter++;
      score.innerHTML = `Score : ${counter}`;
      var audio = new Audio("3.mp3");
      audio.play();
    }
    else{
      var audio = new Audio("2.mp3");
      audio.play();
    }
  });
});
