// let gritBoard = [
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// ];


// setup game board for play
const gameBoard = []; // define game board
    for(let i = 0; i < boxes.length; i++) {
        gameBoard.push(0);
    };

//define variables
let isWinner, turn, playerOneLocation, playerTwoLocation, playerThreeLocation, playerFourLocation, purpleSquares, greenSquares, blueSquares, orangeSquares, redSquares, yellowSquares, arrowSquares, rrSquares, goodSquares, badSquares, omniSquares

let spin= []

//cached elements
const resetBtn = document.getElementById('reset-button')

let boardSquares = document.querySelectorAll('.box')

const startSquare = document.getElementById(sq1)

const playerOneToken = document.createElement("div")
const playerTwoToken = document.createElement("div")
const playerThreeToken = document.createElement("div")
const playerFourToken = document.createElement("div")

const winSquare = document.getElementById('sq135')

//event listener
resetBtn.addEventListener('click', init);

// init
init()

function init() {
  turn = 1
  isWinner = null
  playerOneToken.classList.add('playerOneToken')
  playerTwoToken.classList.add('playerTwoToken')
  playerOneToken.classList.add('playerThreeToken')
  playerTwoToken.classList.add('playerFourToken')
  startSquare.appendChild(playerOneToken)
  startSquare.appendChild(playerTwoToken)
  startSquare.appendChild(playerThreeToken)
  startSquare.appendChild(playerFourToken)
  playerOneLocation = 0
  playerTwoLocation = 0
  playerThreeLocation = 0
  playerFourLocation = 0
  boardColors = [p1,b1,r1,g1,o1,y1,
                 p2,b2,r2,g2,o2,y2,
                 p3,b3,r3,g3,o3,y3,
                 p4,b4,r4,g4,o4,y4,
                 p5,b5,r5,g5,o5,y5,
                 p6,b6,r6,g6,o6,y6,
                 p7,b7,r7,g7,o7,y7,
                 p8,b8,r8,g8,o8,y8,
                 p9,b9,r9,g9,o9,y9,
                 p10,b10,r10,g10,o10,y10,
                 p11,b11,r11,g11,o11,y11,
                 p12,b12,r12,g12,o12,y12,
                 p13,b13,r13,g13,o13,y13,
                 p14,b14,r14,g14,o14,y14,
                 p15,b15,r15,g15,o15,y15,
                 p16,b16,r16,g16,o16,y16,
                 p17,b17,r17,g17,o17,y17,
                 p18,b18,r18,g18,o18,y18,
                 p19,b19,r19,g19,o19,y19,
                 p20,b20,r20,g20,o20,y20,
                 p21,b21,r21,g21,o21,y21,
                 p22,b22,r22,g22,o22,y22,
                 p23]

// winning function
function winner() {
    if (playerOneLocation === parseInt(winSquare.id.substring(2))) return playerOneLocation
    if (playerTwoLocation === parseInt(winSquare.id.substring(2))) return playerTwoLocation
    if (playerThreeLocation === parseInt(winSquare.id.substring(2))) return playerThreeLocation
    if (playerFourLocation === parseInt(winSquare.id.substring(2))) return playerFourLocation
  }

//define special actions
const actions = {
    skip: {
        action(){
            //code to skip turn
            console.log('skipped');
        }
    },
    ladder: {
        action(){
            //code to move to new space
            console.log('laddered');
        }
    },
    rollAgain: {
        spaces: [],
        action(){
            //code to roll again
            console.log('roll again')
        }
    }
};

//define special spaces
const specialSpaces = {
    skip: {
        spaces: [1,7,9]        
    },
    ladder: {
        spaces: []
    },
    rollaAgain: {
        spaces: []
    }
};


actions.ladder.action(5)
