function getComputerChoice (values = ["Rock", "Paper", "Scissors"]) {
    let index = Math.floor(Math.random() * values.length);

    return values[index];
}


function getHumanChoice () {
    let userInput = prompt("Enter your choice here: ");

    return userInput;
}

console.log(getHumanChoice());



