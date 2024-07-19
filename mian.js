
let playGame =confirm("Shall we Play rock,paper,scissors?");
if (playGame){
    let playerchoice = prompt("pleas Enter rock,paper,scissors");
    if (playerchoice) {
        let playerOne = playerchoice.trim().toLocaleLowerCase();
        if (playerOne === "rock"|| playerOne === "paper" || playerOne === "scissors") {
            let computerChoice = Math.floor(Math.random()* 3 + 1);
            let computer = computerChoice === 1 ? "rock"
            :computerChoice === 2 ? "paper"
            : "scissors";
            let result =
             playerOne === computer ? "Tie Game!"
             : playerOne === "rock" && computer === "paper"
             ? `playerOne: ${playerOne}\ncomputer:${computer}
             \ncomputer wine!`
             
             : playerOne === "pepor" && computer === "scissors"
             ? `playerOne: ${playerOne}\ncomputer:${computer}
             \ncomputer wine!`
     
             : playerOne === "scissors" && computer === "rock"
             ? `playerOne: ${playerOne}\ncomputer:${computer}
             \ncomputer wine!`
             : `playerOne: ${playerOne}\ncomputer:${computer}
             \ncomputer wine!`
             alert(result);
             let playAgian = confirm("play Agian?");
             playAgian ? location.reload() : alert("Ok,thanks for playing.")
        }
        else{
            alert("you didn't Enter rock,paper,scissors.")
        }
    } else {
        alert("I guess you changed your mind.Maybe next time.")
    }
} else {
    alert("ok,maybe next time.");
}