
const playerText=document.querySelector("#playerText")
const computerText=document.querySelector("#computerText");
const resultText=document.querySelector("#resultText");
const choiceBtns=document.querySelectorAll(".chioceBtn");
const playerpoint=document.querySelector("#playerpoint");
const computerpoint=document.querySelector("#computerpoint");

console.log(playerText);
console.log(computerText);
console.log(resultText);
console.log(choiceBtns);
console.log(playerpoint);
console.log(computerpoint);
let computer1;
let player1;
let computerp=0;
let playerp=0;
choiceBtns.forEach(button =>button.addEventListener("click",() => {
    
    player1=button.textContent;
    computer1=getComputerChoice();
    playerText.textContent=`Player: ${player1}`;
    computerText.textContent=`Computer: ${computer1}`;
    resultText.textContent=game(player1,computer1);
    playerpoint.textContent=`Player: ${playerp}`;
    computerpoint.textContent=`Computer: ${computerp}`;
    if(playerp==5){
        alert("You Win!");
        computerp=0;
        playerp=0;
    }
    else if(computerp==5){
        alert("You lose!");
        computerp=0;
        playerp=0;
    }

}));
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
        if(player=="Paper"){
            playerp++;
            return "You win, computer lose!"
        } 
        else{
            computerp++
            "You lose, computer win!"
        } 
    }
    else if(computer=="Paper"){
        if(player=="Scissors"){
            playerp++;
            return "You win, computer lose!"
            
        } 
        else{
            computerp++
            "You lose, computer win!"
        } 
    }
    else if(computer=="Scissors"){
        if(player=="Rock"){
            playerp++;
            return "You win, computer lose!"
        } 
        else{
            computerp++
            "You lose, computer win!"
        } 
    }
    
        
    
}


