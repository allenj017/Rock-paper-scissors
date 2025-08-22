function getComputerChoice (values = ["Rock", "Paper", "Scissors"]) {
    let index = Math.floor(Math.random() * values.length);

    return values[index];
}


