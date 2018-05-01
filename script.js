const rockButton = document.getElementById("rock");
rockButton.addEventListener("click", function () { playRound("rock")});

const paperButton = document.getElementById("paper");
paperButton.addEventListener("click", function () { playRound("paper")});

const scissorsButton = document.getElementById("scissors");
scissorsButton.addEventListener("click", function () { playRound("scissors")});

let computerWins = 0;
document.getElementById("computer-score").innerText = "Computer Wins: " + computerWins;

let playerWins = 0;
document.getElementById("player-score").innerText ="Player Wins: " + playerWins;

function computerPlay(){
	const randomMove = Math.floor(Math.random()*100);
	computerSelection = (randomMove <= 33) ? "rock":(randomMove >= 34 && randomMove <= 65) ? "paper": "scissors";
	return computerSelection;
}

function playRound(playerSelection){
	computerSelection = computerPlay()
	switch(true) {
		case (computerSelection=="rock"):
		    outcome = (playerSelection=="paper") ? "Paper covers Rock. Player wins!": (playerSelection=="scissors") ? "Rock smashes Scissors. Computer wins!" : "Tie game"
		    document.getElementById("outcome").innerText = outcome;
		    game(outcome);
		    return console.log(outcome);
		case (computerSelection=="paper"):
		    outcome = (playerSelection=="rock") ? "Paper covers Rock. Computer wins!": (playerSelection=="scissors") ? "Scissors cut Paper. Player wins!" : "Tie game"
		    document.getElementById("outcome").innerText = outcome;
		    game(outcome);
		    return console.log(outcome);
		case (computerSelection=="scissors"):
		    outcome = (playerSelection=="paper") ? "Scissors cut Paper. Computer wins!": (playerSelection=="rock") ? "Rock smashes Scissors. Player wins!" : "Tie game"
		    document.getElementById("outcome").innerText = outcome;
		    game(outcome);
		    return console.log(outcome);
		default:
		   outcome = "An unknown error has occured."
		   document.getElementById("outcome").innerText = outcome;
		   return;
	}
}
function game(outcome){
	if (outcome.includes("Computer win")){

	    computerWins++;
		document.getElementById("computer-score").innerText = "Computer Wins: " + computerWins;
		if (computerWins==5){
		    gameEnd()
		    return alert("Computer wins the game!");

		}
	}
	if (outcome.includes("Player wins")){
		playerWins++;
		document.getElementById("player-score").innerText = "Player Wins: " + playerWins;
		if (playerWins==5){
		    gameEnd()
		    return alert("Player wins the game!")
		}
}
function gameEnd() {
	playerWins = 0;
    computerWins = 0;
    outcome = "Play again?";
    document.getElementById("player-score").innerText = "Player Wins: " + playerWins;
    document.getElementById("computer-score").innerText = "Computer Wins: " + computerWins;
    document.getElementById("outcome").innerText = outcome;
}
}
