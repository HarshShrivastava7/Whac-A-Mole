
let array = [
  {
    img : 'gift.jpeg'
  },
  {
    img : 'item-8.jpeg'
  },
  {
    img : 'item-9.jpeg'
  },
  {
    img : 'item-10.jpeg'
  },
  {
    img : 'menu-item.jpeg'
  },
  {
    img : 'person-1.jpeg'
  },
  {
    img : 'gift.jpeg'
  },
  {
    img : 'item-8.jpeg'
  },
  {
    img : 'item-9.jpeg'
  },
  {
    img : 'item-10.jpeg'
  },
  {
    img : 'menu-item.jpeg'
  },
  {
    img : 'person-1.jpeg'
  }
]

array.sort(() =>
  0.5 - Math.random()
);

let score = document.querySelector(".score");
let counter = 0;
// let imgss = document.querySelector(".imgs[2]").;
let chosenImg = [];
let chosenIndex = [];

// console.log(array);
let imgs = document.querySelectorAll(".img");

imgs.forEach(function(e,index){
  e.addEventListener("click",function(){
    // e.classList.add("transform")
    e.setAttribute("src",`${array[index].img}`);
    // let random = Math.floor((Math.random()*12)+1);
    chosenImg.push(e.src);
    // console.log(e.classList[1]);
    chosenIndex.push(e.classList[1]);
    console.log(chosenImg);
    console.log(chosenIndex);
    // console.log(e);
    if(chosenImg.length==2){
      if(chosenImg[0]===chosenImg[1] && chosenIndex[0]!==chosenIndex[1]){
        counter++;
        score.innerHTML = `Score : ${counter}`;
        var audio = new Audio("0.mp3");
        audio.play();
        // alert("Hurray! You Found A Match");
        document.getElementById(`${chosenIndex[0]}`).classList.add("hidden");
        document.getElementById(`${chosenIndex[1]}`).classList.add("hidden");
        // document.getElementById(`${chosenIndex[0]}`).removeEventListener("click");
        // document.getElementById(`${chosenIndex[1]}`).removeEventListener();
        // document.querySelector(`${JSON.stringify(chosenIndex[1])}`).setAttribute("src"," ");
        chosenImg = [];
        chosenIndex = [];
      }
      else if(chosenImg[0]!==chosenImg[1] || (chosenIndex[0]===chosenIndex[1]) ){
        var audio = new Audio("wrong.mp3");
        audio.play();
        // alert("Sorry, Try Again !");
        document.getElementById(`${chosenIndex[0]}`).setAttribute("src","img-2.jpeg");
        document.getElementById(`${chosenIndex[1]}`).setAttribute("src","img-2.jpeg");
        chosenImg = [];
        chosenIndex = [];
      }
    }
    if(counter===6){
      score.innerHTML = `Congratulations You Found Them All !`;
      var audio = new Audio("1.mp3");
      audio.play();
    }

  });
});
