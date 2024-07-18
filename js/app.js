
/*-------------------------------- Constants --------------------------------*/

// 2) Define the required constants:
//    There are only 3 choices a user can make ("rock", "paper", "scissors")


const choices = ['rock', 'paper', 'scissors']; 


/*-------------------------------- Variables --------------------------------*/

// 1) Define any variables used to track the state of the game:
//    The players choice
//    The computers choice
//    The match result - win/lose/tie
//    A result message - display who won that round

let playerChoice;
let computerChoice; 
//let matchResult;
let resultMsg;
let playerScore = 0; 
let computerScore = 0; 


/*------------------------ Cached Element References ------------------------*/

//    We'll need a reference to a DOM element to display messages
const resultDispEl = document.getElementById('result-display')
const playerScoreEl = document.getElementById('player-score')
const computerScoreEl = document.getElementById('computer-score')


/*-------------------------------- Functions --------------------------------*/

const getPlayerChoice = (event) => {
    playerChoice = event.target.id
    console.log(`player choice: ${playerChoice}`)
}

const getComputerChoice = () => {
    const randInx = Math.floor(Math.random() * choices.length)
    computerChoice = choices[randInx]
    console.log(`computer choice: ${computerChoice}`)
}

// 0 - rock
// 1 - paper 
// 2 - scissors

const compare = () => {
    if (playerChoice === computerChoice){
        resultMsg = 'You tied!'
    } else if (playerChoice === choices[0] && computerChoice === choices[2]){
        resultMsg = 'You win'
        playerScore += 1; 
    } else if (playerChoice === choices[1] && computerChoice === choices[0]){
        resultMsg = 'You win'
        playerScore += 1; 
    } else if (playerChoice === choices[2] && computerChoice === choices[1]){
        resultMsg = 'You win'
        playerScore += 1; 
    } else {
       resultMsg = 'You lost'
       computerScore += 1; 
    }
}

// 6) Render a win/lose/tie message to the player 
//    Include both player and computer selections in the message
//    Clearly indicate who won

const render = () => {
    resultDispEl.textContent = `You chose ${playerChoice} and the computer chose ${computerChoice}. ${resultMsg}`
    playerScoreEl.textContent = playerScore
    computerScoreEl.textContent = computerScore
}

const resetGame = () => {
    playerChoice = null; 
    computerChoice = null;
    resultDispEl.textContent = ''
    playerScore = 0
    computerScore = 0
 
}
const play = function(event) {

    getPlayerChoice(event)
    getComputerChoice()
    compare()
    render()

}

/*----------------------------- Event Listeners -----------------------------*/

// 3) Handle a player clicking a button
document.querySelector('main').addEventListener('click', play)

// document.getElementById('rock').addEventListener('click', play)
// document.getElementById('paper').addEventListener('click', play)
// document.getElementById('scissors').addEventListener('click', play)


document.getElementById('reset').addEventListener('click', resetGame)


