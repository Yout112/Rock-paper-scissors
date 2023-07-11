let PlayerWin = 0
let ComputerWin = 0
function game() {
    function getComputerChoice() {
        let a = Math.floor(Math.random() * 3)
        if (a == 0) {
            return 'Rock'
        }
        else if (a == 1) {
            return 'Paper'
        }
        else if (a == 2) {
            return 'Scissors'
        }

    }

    let Computerchoice = getComputerChoice()
    console.log(Computerchoice)
    let Playerchoice = prompt("Rock,paper or scissors?")
    let edit = Playerchoice[0].toUpperCase() + Playerchoice.slice(1).toLowerCase()
    function Playround(computer, player) {
        if (computer == player) {
            alert('Draw!')
        }
        else if (computer == 'Rock' && player == 'Paper') {
            alert('Paper beats Rock! You win!')
            PlayerWin++
        }
        else if (computer == "Rock" && player == "Scissors") {
            alert('Rock beats scissors!You loose!')
            ComputerWin++
        }
        else if (computer == "Paper" && player == 'Rock') {
            alert('Paper beats Rock! You loose!')
            ComputerWin++
        }
        else if (computer == "Scissors" && player == 'Rock') {
            alert('Rock beats Scissors! You win!')
            PlayerWin++
        }
        else if (computer == 'Paper' && player == 'Scissors') {
            alert('Scissors beats Paper! You win!')
            PlayerWin++
        }
        else if (computer == "Scissors" && player == 'Paper') {
            alert('Scissors beats paper! You loose')
            ComputerWin++
        }
    }

    Playround(Computerchoice, edit)
}

for (let i = 1; i <= 5; i++) {
    alert('Game ' + i)
    game()
    alert('Computer: ' + ComputerWin + ". Player: " + PlayerWin)


}
if (PlayerWin > ComputerWin) {
    alert('You win!')

}
else if (PlayerWin < ComputerWin) {
    alert('You lose!')

}
else if (PlayerWin == ComputerWin) {
    alert('Draw!')

}

