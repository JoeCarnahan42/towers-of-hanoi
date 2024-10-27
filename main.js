// checkWinner function that checks for winning
//  --> game ends when winner is determined and console logs it


// Tracks Board State //
let gameBoardObj = {
  1: [5, 4, 3, 2, 1],
  2: [],
  3: []
}




// Handles Opening Display of Game Board //
let renderGame = function() {Object.values(gameBoardObj).map((game) => {
  const pegs = game.toString()
  let gameString = `--- ${pegs}`
  
  let gameDisplay = gameString.split(",").join(" ")
  
  
  console.log(gameDisplay)
  
})}

// Renders Game Board in Console //
renderGame()

// Handles the Win Condition and Resets the Game //
let winState = function() {
  console.log("Congratulations! You win!")
  gameBoardObj = {
    1: [5, 4, 3, 2, 1],
    2: [],
    3: []
  }
  renderGame()
}

// Handles Movement of Discs //
let moveDisc = function(startPeg, endPeg) {
  const startingPeg = gameBoardObj[startPeg]
  const endingPeg = gameBoardObj[endPeg]
  const discToMove = startingPeg.at(-1)
  const endPegDisc = endingPeg.at(endPeg.length)
  const fullPeg = [5, 4, 3, 2, 1]
  const emptyPeg = []

  const pegTwoFull = fullPeg.every((disc) => {
    gameBoardObj[2].includes(disc)
    console.log("true")
  })

  const pegThreeFull = fullPeg.every((disc) => {
    gameBoardObj[3].includes(disc)
    console.log("true")
  })
  

  if (endPegDisc === undefined || endPegDisc > discToMove) {
    endingPeg.push(discToMove)
    startingPeg.pop()
    
    console.log('Move successful, board is now:')
    renderGame()

  } else {
    console.log("Invalid Move: Disks can only be placed on top of smaller disks.")
    
  }

  
}
