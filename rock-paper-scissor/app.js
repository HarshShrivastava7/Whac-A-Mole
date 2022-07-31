let computerChoice = document.querySelector(".computer-choice");
let yourChoice = document.querySelector(".your-choice");
let result = document.querySelector(".result");
let btns = document.querySelectorAll(".btns");

let choice = [`<i class="fas fa-hand-rock"></i>`,`<i class="fas fa-hand-paper-o"></i>`,`<i class="fas fa-hand-scissors"></i>`];


btns.forEach(function(btn){
  btn.addEventListener("click",function(e){
    let random = Math.floor(Math.random()*choice.length);
    computerChoice.innerHTML = `Computer Choice : ${choice[random]}`;
    // e.currentTarget.classList.remove("rock-icon");
    // console.log(e.currentTarget.children[0].innerHTML);
    let myChoice = e.currentTarget.children[0].innerHTML;
    yourChoice.innerHTML =  `Your Choice : ${myChoice}`;
    // console.log(myChoice,choice[random]);
    if(myChoice === choice[random]){
      result.innerHTML = `Result : It's a Draw !`;
    }
    else if((choice[random]===`<i class="fas fa-hand-rock"></i>` && myChoice === `<i class="fas fa-hand-scissors"></i>`) || (choice[random]===`<i class="fas fa-hand-scissors"></i>` && myChoice === `<i class="fas fa-hand-paper-o"></i>`) || (choice[random]=== `<i class="fas fa-hand-paper-o"></i>` && myChoice === `<i class="fas fa-hand-rock"></i>`)){
      result.innerHTML = `Result : You Lose !`;
    }
    else{
      result.innerHTML = `Result : You Win !`;
    }
  });
});
