// Move discs
// checkWinner function that checks for winning
//  --> game ends when winner is determined and console logs it
//  cannot move larger discs on top of smaller discs




let gameBoardObj = {
  peg1: [5, 4, 3, 2, 1],
  peg2: [],
  peg3: []
}

// Handles Opening Display of Game Board
Object.values(gameBoardObj).map((game) => {
  const pegs = game.toString()
  let gameString = `--- ${pegs}`
  
  let gameDisplay = gameString.split(",").join(" ")

  console.log(gameDisplay)
  
})