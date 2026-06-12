let userScore=0;
let compScore=0;
let Choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let uscoresel=document.querySelector("#user-score");
let cscoresel=document.querySelector("#comp-score");
const gencompChoice=()=>{
    const options=["paper","scissors","rock"];
    const radIdx=Math.floor(Math.random()*3);
    return options[radIdx];
}
const drawGame=()=>{
    console.log("draw");
    console.log("you lose");
    msg.innerText="Draw.Play Again.";
    msg.style.backgroundColor="#081b31";
}
const showWinner=(userWin,userChoice,compChoice)=>{
     if(userWin==false)
        {
            console.log("you lose");
            msg.innerText=`You Lose!${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor="red";
            compScore++;
        }
     else
        {
            console.log("You win");
            msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor="green";
            userScore++;
        }
    uscoresel.innerText=userScore;
    cscoresel.innerText=compScore;
   
}
const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const compChoice=gencompChoice();
    console.log("comp choice=",compChoice);
    if(userChoice===compChoice)
    {
        drawGame();
    }
    else 
    {
        let userWin=true;
        if(userChoice==="rock")
        {
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper")
        {
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}
Choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    console.log(choice);
    const userChoice=choice.getAttribute("id");
    console.log("choice was clicked",userChoice);
    playGame(userChoice);
    });
});