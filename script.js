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

function playRound(humanChoice, computerChoice) {
    console.log(`This is the human choice ${humanChoice}`);
    console.log(`This is the computer choice ${computerChoice}`);
    if (humanChoice === computerChoice) {
        console.log(`Draw. You both selected ${humanChoice}`);
    } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        humanScore += 1;
        console.log("You win! Rock beats Scissors")
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        humanScore += 1;
        console.log("You win! Paper beats Rock.");
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        humanScore += 1;
        console.log("You win! Scissors beats Paper");
    } else {
        computerScore += 1;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}



playRound(getHumanChoice(), getComputerChoice());