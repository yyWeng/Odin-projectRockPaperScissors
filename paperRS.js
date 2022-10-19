const playerText=document.querySelector('#playerText');
const computerText=document.querySelector("#computerText");
const resultText=document.querySelector("#resultText");
const choiceBtns=document.querySelectorAll(".chioceBtn");

let computer1;
let player1;
console.log("1Yes");
/*choiceBtns.forEach(button =>button.addEventListener("click",() => {
    console.log("Yes");
    player1=button.textContent;
    computer1=getComputerChoice();
    playerText.textContent=`Player:${player1}`;
    computerText.textContent=`Computer:${computer1}`;
    resultText.textContent=game(player1,computer1);

}));*/
// randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice(){
    let x= (Math.floor(Math.random()*3));
    if(x==0){
        return "Rock";
    }
    else if(x==1){
        return "Paper";
    }
    else if(x==2){
        return "Scissors";
    }
}


function game(player, computer){
    if(player==computer){
        return "Tie! Try one more"
    }
    else if(computer=="Rock"){
        return (player=="Paper") ? "You win, computer lose!" : "You lose, computer win!"
    }
    else if(computer=="paper"){
        return (player=="Scissors") ? "You win, computer lose!" : "You lose, computer win!"
    }
    else if(computer=="Scissors"){
        return (player=="Rock") ? "You win, computer lose!" : "You lose, computer win!"
    }
}
console.log(playerText);

