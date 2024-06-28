
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


/*------------------------ Cached Element References ------------------------*/

//    We'll need a reference to a DOM element to display messages
const resultDispEl = document.getElementById('result-display')



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
    } else if (playerChoice === choices[1] && computerChoice === choices[0]){
        resultMsg = 'You win'
    } else if (playerChoice === choices[2] && computerChoice === choices[1]){
        resultMsg = 'You win'
    } else {
        resultMsg = 'You lost'
    }
}

// 6) Render a win/lose/tie message to the player 
//    Include both player and computer selections in the message
//    Clearly indicate who won

const render = () => {
    resultDispEl.textContent = `You chose ${playerChoice} and the computer chose ${computerChoice}. ${resultMsg}`
}

const resetGame = () => {
    playerChoice = null; 
    computerChoice = null;
    resultDispEl.textContent = ''

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


