let humanScore = 0;
let computerScore = 0;



function getComputerChoice (values = ["Rock", "Paper", "Scissors"]) {
    let index = Math.floor(Math.random() * values.length);

    return values[index];
}


function getHumanChoice () {
    let userInput = prompt("Enter your choice here: ");

    return userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
}

console.log(getHumanChoice())



