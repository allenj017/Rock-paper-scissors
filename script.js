
function getComputerChoice (values = ["Rock", "Paper", "Scissors"]) {
    let index = Math.floor(Math.random() * values.length);

    return values[index];
}


function getHumanChoice () {
    let userInput = prompt("Enter your choice here: ");

    return userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
}





function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
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

    let roundCounter = 0;
    while (roundCounter < 5) {
        playRound(getHumanChoice(), getComputerChoice())
        roundCounter += 1;
    }

    if (humanScore == computerScore) {
        console.log("Tie")
    } else if (humanScore > computerScore) {
        console.log("You won!")
    } else {
        console.log("You lost!")
    }

}


playGame()