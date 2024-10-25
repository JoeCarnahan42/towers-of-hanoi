// Move discs
// checkWinner function that checks for winning
//  --> game ends when winner is determined and console logs it
//  cannot move larger discs on top of smaller discs


// Tracks Board State
let gameBoardObj = {
  1: [5, 4, 3, 2, 1],
  2: [],
  3: []
}




// Handles Opening Display of Game Board
Object.values(gameBoardObj).map((game) => {
  const pegs = game.toString()
  let gameString = `--- ${pegs}`
  
  let gameDisplay = gameString.split(",").join(" ")

  console.log(gameDisplay)
  
})

// Handles Movement of Pegs
let moveDisk = function(peg1, peg2) {
  const startingPeg = gameBoardObj[peg1]
  const endingPeg = gameBoardObj[peg2]
  const diskToMove = Math.min(...startingPeg)

  if (diskToMove < undefined) {
  // Need to check if disk currently on peg is larger than disc to be moved
  }
  console.log(diskToMove)
  console.log(endingPeg)
}

moveDisk(1, 2)




