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

  const fullPeg = [5, 4, 3, 2, 1]

  const pegTwoFull = fullPeg.every((disc) => {
    return gameBoardObj[2].includes(disc)
  })
  
  const pegThreeFull = fullPeg.every((disc) => {
    return gameBoardObj[3].includes(disc)
  })

  if (pegTwoFull || pegThreeFull) {
    console.log("Congratulations! You win!")
    console.log("-=New Game=-")
    gameBoardObj = {
      1: [5, 4, 3, 2, 1],
      2: [],
      3: []
    }
    renderGame()
  }
}

// Handles Movement of Discs //
let moveDisc = function(startPeg, endPeg) {
  const startingPeg = gameBoardObj[startPeg]
  const endingPeg = gameBoardObj[endPeg]
  const discToMove = startingPeg.at(-1)
  const endPegDisc = endingPeg.at(endPeg.length)

  if (endPegDisc === undefined || endPegDisc > discToMove) {
    endingPeg.push(discToMove)
    startingPeg.pop()
    
    console.log('Move successful, board is now:')
    renderGame()
    
  } else {
    console.log("Invalid Move: Disks can only be placed on top of smaller disks.")
    
  }
  

  winState()
  
}

