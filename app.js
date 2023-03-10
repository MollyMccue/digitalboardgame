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

//define special actions
const actions = {
    skip: {
        action(){
            //code to skip turn
            console.log('skipped');
        }
    },
    ladder: {
        action(dest){
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