alert("Whoever gets 10 points first wins");


let userScore = 0;
let compScore = 0;
 
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const usrscore=document.querySelector("#user-score");
const cmpscore=document.querySelector("#comp-score");

//user choice
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);
    });
});




//comp choice
const gencompchoice = () =>{
    let options =["rock","paper","scissors"];
    let randmIdx = Math.floor(Math.random() * 3);
    return options[randmIdx];
}


//show drawgame
const drawGame = () => {
msg.innerText = "Game is Draw"; 
msg.style.backgroundColor ="navy"
};



//showwinner
const showWinner = (usrWin) => {
  if (usrWin) {
      userScore++;
      usrscore.innerText = userScore;
      msg.innerText = (" Hurray , You Win ! ");
      msg.style.backgroundColor = "green";
      if (userScore == 10) {
          setTimeout(() => {
              alert("User wins the game.");
              restartGame();
          }, 100);
      }
  } else {
      compScore++;
      cmpscore.innerText = compScore;
      msg.innerText = ("You Lose");
      msg.style.backgroundColor = "red";
      if (compScore == 10) {
          setTimeout(() => {
              alert("Computer wins the game.");
              restartGame();
          }, 100);
      }
  }
};



//play game
const playGame = (userChoice) =>{
    

    const compChoice = gencompchoice();
    



    if(userChoice===compChoice){
        drawGame();
    }else{
        let usrWin = true;

        if(userChoice==="scissors"){

          usrWin = compChoice==="rock"? false:true;

        }else if(userChoice==="paper"){

                usrWin = compChoice==="scissors"? false:true;

            }else{

                usrWin = compChoice==="paper"?false:true;

            }

            showWinner(usrWin);
        
    }
};

//restart game
const restartGame = () => {
  userScore = 0;
  compScore = 0;
  usrscore.innerText = userScore;
  cmpscore.innerText = compScore;
  msg.innerText = "Play Again";
  msg.style.backgroundColor ="black";
};

