let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genComputerChoice = () => {
    //rock,paper,choice
    const options = ["rock", "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game Is Draw!, Play Again";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin == true){
        userScore+=1;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScorePara.innerText = userScore;
    }
    else{
        compScore+=1;
        msg.innerText = `You Loss! Your ${userChoice} defeated by ${compChoice}`;
        msg.style.backgroundColor = "red";
        compScorePara.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    console.log("user choice :",userChoice);
    //   generat computer choice -> modular way making small small function
    const compChoice=genComputerChoice();
    console.log("computer choice :",compChoice);

    if(userChoice==compChoice){
        // draw
        drawGame();
    }

    else {
        let userWin = true;
        if(userChoice === "rock"){
            //scissors , paper
            userWin = compChoice === "paper" ? false: true;

        }
         else if(userChoice === "paper"){
            //scissors , paper
            userWin = compChoice === "scissors" ? false: true;
        }
        else if(userChoice === "scissors"){
            //scissors , paper
            userWin = compChoice === "rock" ? false: true;

        }
        showWinner(userWin,userChoice,compChoice);
    }
    

}

// MAIN FUNCITON

choices.forEach((choice)=>{
    // console.log(choice)
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
          console.log("choice was clicked",userChoice);
          playGame(userChoice);

    });
});


