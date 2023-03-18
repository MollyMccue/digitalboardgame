// setup game board for play
const board = []; // define game board
    for(let i = 0; i < class box{length}; i++) {
        board.push(0);
    };

//define variables
let isWinner, turn, playerOneLocation, playerTwoLocation, purpleSquares, greenSquares, blueSquares, orangeSquares, redSquares, yellowSquares, arrowSquares, rrSquares, goodSquares, badSquares, omniSquares

let deck1 = []
let deck2 = []

let cardToRemove, cardPicked
//cached elements
const resetBtn = document.getElementById('reset-button')

let boardSquares = document.querySelectorAll('.box')

let deck1El = document.getElementById('deck-1')
let deck2El = document.getElementById('deck-2')

const startSquare = document.getElementById(sq1)

const playerOneToken = document.createElement("div")
const playerTwoToken = document.createElement("div")

const winSquare = document.getElementById('sq135')

//event listener
resetBtn.addEventListener('click', init);

document.getElementById('card-button').addEventListener('click', handleClick)

// init
init()

function init() {
  turn = 1
  isWinner = null
  playerOneToken.classList.add('playerOneToken')
  playerTwoToken.classList.add('playerTwoToken')
  startSquare.appendChild(playerOneToken)
  startSquare.appendChild(playerTwoToken)
  playerOneLocation = 0
  playerTwoLocation = 0
  boardColors = ['p1','b1','r1','g1','o1','y1',
    'p2','b2','r2','g2','o2','y2',
    'p3','b3','r3','g3','o3','y3',
    'p4','b4','r4','g4','o4','y4',
    'p5','b5','r5','g5','o5','y5',
    'p6','b6','r6','g6','o6','y6',
    'p7','b7','r7','g7','o7','y7',
    'p8','b8','r8','g8','o8','y8',
    'p9','b9','r9','g9','o9','y9',
    'p10','b10','r10','g10','o10','y10',
    'p11','b11','r11','g11','o11','y11',
    'p12','b12','r12','g12','o12','y12',
    'p13','b13','r13','g13','o13','y13',
    'p14','b14','r14','g14','o14','y14',
    'p15','b15','r15','g15','o15','y15',
    'p16','b16','r16','g16','o16','y16',
    'p17','b17','r17','g17','o17','y17',
    'p18','b18','r18','g18','o18','y18',
    'p19','b19','r19','g19','o19','y19',
    'p20','b20','r20','g20','o20','y20',
    'p21','b21','r21','g21','o21','y21',
    'p22','b22','r22','g22','o22','y22',
    'p23','all']
    
    deck1 = ['p1','p2','p3','p4','p5','p6','p7','p8','p9','p10','p11','p12','p13','p14','p15','p16','p17','p18','p19','b20','b21','p22','p23','b1','b2','b3','b4','b5','b6','b7','b8','b9','b10','b11','b12','b13','b14','b15','b16','b17','b18','b19','b20','b21','b22','r1','r2','r3','r4','r5','r6','r7','r8','r9','r10','r11','r12','r13','r14','r15','r16','r17','r18','r19','r20','r21','r22','y1','y2','y3','y4','y5','y6','y7','y8','y9','y10','y11','y12','y13','y14','y15','y16','y17','y18','y19','y20','y21','y22','g1','g2','g3','g4','g5','g6','g7','g8','g9','g10','g11','g12','g13','g14','g15','g16','g17','g18','g19','g20','g21','g22','o1','o2','o3','o4','o5','o6','o7','o8','o9','o10','o11','o12','o13','o14','o15','o16','o17','o18','o19','o20','o21','o22','all']
    deck2 = []
    render()
  
  }

// winning function
function winner() {
    if (playerOneLocation === parseInt(winSquare.id.substring(2))) return playerOneLocation
    if (playerTwoLocation === parseInt(winSquare.id.substring(2))) return playerTwoLocation
  }

//card functions
function handleClick(evt) {
    if (deck1.length > 0) {
      let randIdx = Math.floor(Math.random() * deck1.length)
      cardPicked = deck1.splice(randIdx, 1)
      deck2.push(cardPicked)
      cardToBoard(cardPicked)
      renderCards(cardPicked)
      isWinner = winner()
      render()
      turn *= -1
    }
  }

  function renderCards() {
    deck2El.classList.remove('outline')
    if (deck2.length > 1) {
      deck2El.classList.remove(cardToRemove)
    }
    cardToRemove = cardPicked
    deck2El.classList.add(cardPicked)
    if (deck2.length === 26) {
      deck2El.classList.add('shadow')
      deck1El.classList.remove('shadow')
    }
    if (deck1.length === 0) {
      deck1El.classList.add('outline')
      deck1El.classList.remove('back')
    }
  }

//
function cardToBoard(cardPicked) {
    if (turn === 1) {
      playerOneLocation += 1
      for (i = playerOneLocation; i < boardColors.length; i++) {
        if (cardPicked[0][0] === boardColors[i][0]) {
          return playerOneLocation = i
        }
      }
    } else {
      playerTwoLocation += 1
      for (i = playerTwoLocation; i < boardColors.length; i++) {
        if (cardPicked[0][0] === boardColors[i][0]) {
          return playerTwoLocation = i
        }
      }
    }
  }

//define render
function render() {
    if (turn === 1) {
        boardSquares.forEach((square, index) => {
            square.style.background = boardColors[idx]
            if (playerOneLocation === parseInt(square.id.substring(2))) {
                square.appendChild(playerOneToken)
            }
        })
    } else {
        boardSquares.forEach((square, index) => {
            square.style.background = boardColors[idx]
            if (playerTwoLocation === parseInt(square.id.substring(2))) {
                square.appendChild(playerTwoToken)
            }
        })
    }
}

if (isWinner) {
    console.log("FINISH")
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


actions.ladder.action(5);



























// var padding = {top:20, right:40, bottom:0, left:0},
//             w = 500 - padding.left - padding.right,
//             h = 500 - padding.top  - padding.bottom,
//             r = Math.min(w, h)/2,
//             rotation = 0,
//             oldrotation = 0,
//             picked = 100000,
//             oldpick = [],
//             color = d3.scale.category20();//category20c()
//             //randomNumbers = getRandomNumbers();
//         //http://osric.com/bingo-card-generator/?title=HTML+and+CSS+BINGO!&words=padding%2Cfont-family%2Ccolor%2Cfont-weight%2Cfont-size%2Cbackground-color%2Cnesting%2Cbottom%2Csans-serif%2Cperiod%2Cpound+sign%2C%EF%B9%A4body%EF%B9%A5%2C%EF%B9%A4ul%EF%B9%A5%2C%EF%B9%A4h1%EF%B9%A5%2Cmargin%2C%3C++%3E%2C{+}%2C%EF%B9%A4p%EF%B9%A5%2C%EF%B9%A4!DOCTYPE+html%EF%B9%A5%2C%EF%B9%A4head%EF%B9%A5%2Ccolon%2C%EF%B9%A4style%EF%B9%A5%2C.html%2CHTML%2CCSS%2CJavaScript%2Cborder&freespace=true&freespaceValue=Web+Design+Master&freespaceRandom=false&width=5&height=5&number=35#results
//         var data = [
//                     {"label":"",  "value":1,  "question":""}, // padding
//                     {"label":"",  "value":2,  "question":""}, //font-family
//                     {"label":"",  "value":3,  "question":""}, //color
//                     {"label":"",  "value":4,  "question":""}, //font-weight
//                     {"label":"",  "value":5,  "question":""}, //font-size
//                     {"label":"",  "value":6,  "question":""}, //background-color
//                     {"label":"",  "value":7,  "question":""}, //nesting
//                     {"label":"",  "value":8,  "question":""}, //bottom
//                     {"label":"",  "value":9,  "question":""}, //sans-serif
//                     {"label":"", "value":10,  "question":""}
//         ];
//         var svg = d3.select('#chart')
//             .append("svg")
//             .data([data])
//             .attr("width",  w + padding.left + padding.right)
//             .attr("height", h + padding.top + padding.bottom);
//         var container = svg.append("g")
//             .attr("class", "chartholder")
//             .attr("transform", "translate(" + (w/2 + padding.left) + "," + (h/2 + padding.top) + ")");
//         var vis = container
//             .append("g");
            
//         var pie = d3.layout.pie().sort(null).value(function(d){return 1;});
//         // declare an arc generator function
//         var arc = d3.svg.arc().outerRadius(r);
//         // select paths, use arc generator to draw
//         var arcs = vis.selectAll("g.slice")
//             .data(pie)
//             .enter()
//             .append("g")
//             .attr("class", "slice");
            
//         arcs.append("path")
//             .attr("fill", function(d, i){ return color(i); })
//             .attr("d", function (d) { return arc(d); });
//         // add the text
//         arcs.append("text").attr("transform", function(d){
//                 d.innerRadius = 0;
//                 d.outerRadius = r;
//                 d.angle = (d.startAngle + d.endAngle)/2;
//                 return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius -10) +")";
//             })
//             .attr("text-anchor", "end")
//             .text( function(d, i) {
//                 return data[i].label;
//             });
//         container.on("click", spin);
//         function spin(d){
            
//             container.on("click", null);
//             //all slices have been seen, all done
//             console.log("OldPick: " + oldpick.length, "Data length: " + data.length);
//             if(oldpick.length == data.length){
//                 console.log("done");
//                 container.on("click", null);
//                 return;
//             }
//             var  ps       = 360/data.length,
//                  pieslice = Math.round(1440/data.length),
//                  rng      = Math.floor((Math.random() * 1440) + 360);
                
//             rotation = (Math.round(rng / ps) * ps);
            
//             picked = Math.round(data.length - (rotation % 360)/ps);
//             picked = picked >= data.length ? (picked % data.length) : picked;
//             if(oldpick.indexOf(picked) !== -1){
//                 d3.select(this).call(spin);
//                 return;
//             } else {
//                 oldpick.push(picked);
//             }
//             rotation += 90 - Math.round(ps/2);
//             vis.transition()
//                 .duration(3000)
//                 .attrTween("transform", rotTween)
//                 .each("end", function(){
//                     //mark question as seen
//                     d3.select(".slice:nth-child(" + (picked + 1) + ") path")
//                         .attr("fill", "#111");
//                     //populate question
//                     d3.select("#question h1")
//                         .text(data[picked].question);
//                     oldrotation = rotation;
              
//                     /* Get the result value from object "data" */
//                     console.log(data[picked].value)
              
//                     /* Comment the below line for restrict spin to sngle time */
//                     container.on("click", spin);
//                 });
//         }
//         //make arrow
//         svg.append("g")
//             .attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h/2)+padding.top) + ")")
//             .append("path")
//             .attr("d", "M-" + (r*.15) + ",0L0," + (r*.05) + "L0,-" + (r*.05) + "Z")
//             .style({"fill":"black"});
//         //draw spin circle
//         container.append("circle")
//             .attr("cx", 0)
//             .attr("cy", 0)
//             .attr("r", 60)
//             .style({"fill":"white","cursor":"pointer"});
//         //spin text
//         container.append("text")
//             .attr("x", 0)
//             .attr("y", 15)
//             .attr("text-anchor", "middle")
//             .text("SPIN")
//             .style({"font-weight":"bold", "font-size":"30px"});
        
        
//         function rotTween(to) {
//           var i = d3.interpolate(oldrotation % 360, rotation);
//           return function(t) {
//             return "rotate(" + i(t) + ")";
//           };
//         }
        
        
//         function getRandomNumbers(){
//             var array = new Uint16Array(1000);
//             var scale = d3.scale.linear().range([360, 1440]).domain([0, 100000]);
//             if(window.hasOwnProperty("crypto") && typeof window.crypto.getRandomValues === "function"){
//                 window.crypto.getRandomValues(array);
//                 console.log("works");
//             } else {
//                 //no support for crypto, get crappy random numbers
//                 for(var i=0; i < 1000; i++){
//                     array[i] = Math.floor(Math.random() * 100000) + 1;
//                 }
//             }
  //             return array;}