const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
let validMovesKing = [];
// Used by doesitgotpieces()
let firstEnemy = true;
let inCheck = false;
// Function to move pawn
function CalculateMovesPawn(pos, name, move, firstMove){
  let currentPosition = pos;
  console.log("currentPosition = " + currentPosition);

  let letter = currentPosition.charAt(0);

  const pieceName = name;
  const number = parseInt(currentPosition.charAt(2));
  let nextNumber = number + move;
  let nextPosition = letter + "." + nextNumber;
  validMoves.push(nextPosition)
  if(name.includes("White")){
    if (firstMove) {
      let firstMoveInt = 2;
      let nextNumberFirstMove = number + firstMoveInt;
      let nextPositionFirstMove = letter + "." + nextNumberFirstMove;
      let hasEnemyOnFirstMoveSquare = false;
      
      BlackPiecesArr.forEach((piece) => {
        const id = piece[0];
        if (id === nextPositionFirstMove) {
          hasEnemyOnFirstMoveSquare = true;
        }              
      });
      
      if (!hasEnemyOnFirstMoveSquare) {
        validMoves.push(nextPositionFirstMove);
      }
    }
    
    
  // Calculate attack
  for(let i=0;i<letters.length;i++){
    if(letters[i] == letter){
      // Finds if enemies are located in attack points
      letter = letters[i-1]
      nextNumber = number + move;
      nextPosition = letter + "." + nextNumber;
      BlackPiecesArr.forEach((piece) => {
        const id = piece[0];
        if(id == nextPosition){
          validMoves.push(nextPosition)
        }
      });
      letter = letters[i+1]
      nextNumber = number + move;
      nextPosition = letter + "." + nextNumber;
      BlackPiecesArr.forEach((piece) => {
        const id = piece[0];
        if(id == nextPosition){
          validMoves.push(nextPosition)
        }
      });
      break;
    }
  }
    // console.log("Next position: " + nextPosition + " Or " + nextPositionFirstMove + " For " + pieceName + " With location of " + pos);
  }else{
    validMoves =[];
    let nextNumber = number - move;
    nextPosition = letter + "." + nextNumber;
    validMoves.push(nextPosition)
    if (firstMove == true) {
      let firstMoveInt = 2;
      let nextNumberFirstMove = number - firstMoveInt;
      let nextPositionFirstMove = letter + "." + nextNumberFirstMove;
      let hasEnemyOnFirstMoveSquare = false;
      
      WhitePiecesARR.forEach((piece) => {
        const id = piece[0];
        if (id === nextPositionFirstMove) {
          hasEnemyOnFirstMoveSquare = true;
        }              
      });
      
      if (!hasEnemyOnFirstMoveSquare) {
        validMoves.push(nextPositionFirstMove);
      }
    }
    // Calculate attack
      for(let i=0;i<letters.length;i++){
        if(letters[i] == letter){
          letter = letters[i-1]
          nextNumber = number - move;
          nextPosition = letter + "." + nextNumber;
          WhitePiecesARR.forEach((piece) => {
            const id = piece[0];
            if(id == nextPosition){
              validMoves.push(nextPosition)
            }
          });
          letter = letters[i+1]
          nextNumber = number - move;
          nextPosition = letter + "." + nextNumber;
          WhitePiecesARR.forEach((piece) => {
            const id = piece[0];
            if(id == nextPosition){
              validMoves.push(nextPosition)
            }
          });
          break;
        }
      }
    // console.log("Next position: " + nextPosition + " Or " + nextPositionFirstMove + " For " + pieceName + " With location of " + pos);
  }
}

function CalculateMovesHorse(pos, name, move){
  let currentPosition = pos;
  // Take current letter position and move it
  
  let letter = currentPosition.charAt(0);
  const pieceName = name;
  const number = parseInt(currentPosition.charAt(2));
  let nextNumber = number + move;
  let nextPosition = letter + "." + nextNumber;
  
  // First we do "up down" moves
  // Find correct letter
  for(let i = 0; i < letters.length; i++){
    let validMove = null;
    if(letters[i] === letter){
      firstEnemy = true;
      // Up left
      nextNumber = number + move;
      nextPosition = letters[i-1] + "." + nextNumber;
      if (doesItGotPieces(nextPosition)) {
          break;
        } else {
          validMoves.push(nextPosition);
        }

        firstEnemy = true;
      // Up Right
      nextNumber = number + move;
      nextPosition = letters[i+1] + "." + nextNumber;

      if (doesItGotPieces(nextPosition)) {
          break;
        } else {
          validMoves.push(nextPosition);
        }
        
      firstEnemy = true;
      // Down Left
      nextNumber = number - move;
      nextPosition = letters[i-1] + "." + nextNumber;
      if (doesItGotPieces(nextPosition)) {
          break;
        } else {
          validMoves.push(nextPosition);
        }
        
      firstEnemy = true;
      // Down Right
      nextNumber = number - move;
      nextPosition = letters[i+1] + "." + nextNumber;
      if (doesItGotPieces(nextPosition)) {
          break;
        } else {
          validMoves.push(nextPosition);
        }

      firstEnemy = true;
      // Left up
      nextNumber = number + 1;
      nextPosition = letters[i-2] + "." + nextNumber;
      if (doesItGotPieces(nextPosition)) {
          break;
        } else {
          validMoves.push(nextPosition);
        }

      firstEnemy = true;
      // Left Down
      nextNumber = number - 1;
      nextPosition = letters[i-2] + "." + nextNumber;
      if (doesItGotPieces(nextPosition)) {
          break;
        } else {
          validMoves.push(nextPosition);
        }

      firstEnemy = true;
      // Right up
      nextNumber = number + 1;
      nextPosition = letters[i+2] + "." + nextNumber;
      if (doesItGotPieces(nextPosition)) {
          break;
        } else {
          validMoves.push(nextPosition);
        }

      firstEnemy = true;
      // Right Down
      nextNumber = number - 1;
      nextPosition = letters[i+2] + "." + nextNumber;
      if (doesItGotPieces(nextPosition)) {
          break;
        } else {
          validMoves.push(nextPosition);
        }

      break;
    }
  }
}

function CalculateMovesBishop(pos, name, move){
  let currentPosition = pos;
  
  const pieceName = name;
  const number = parseInt(currentPosition.charAt(2));
  let letter = currentPosition.charAt(0);
  let nextNumber = number + move;
  let nextPosition = letter + "." + nextNumber;
  
  for (let i = 0; i < letters.length; i++) {
    // Find Current letter 
    if(letters[i] === letter){
      firstEnemy = true;
      // Diagonal top right
      for (let k = 0; k < 8; k++) {
        nextNumber = number + k;
        nextPosition = letters[i+k] + "." + nextNumber;
        if(firstEnemy == false){break;}
        if(nextPosition == pos){
          
        }else if (doesItGotPieces(nextPosition)) {
          break;
        } else {
          validMoves.push(nextPosition);
        }
      }
      firstEnemy = true;
      // Diagonal top left
      for (let j = 0; j < 8; j++) {
        nextNumber = number + j;
        nextPosition = letters[i-j] + "." + nextNumber;
        if(firstEnemy == false){break;}
        if(nextPosition == pos){
          
        }else if (doesItGotPieces(nextPosition)) {
          break;
        } else {
          validMoves.push(nextPosition);
        }
      }
      firstEnemy = true;
      // Diagonal bottom right
      for (let m = 0; m < 8; m++) {
        nextNumber = number - m;
        nextPosition = letters[i+m] + "." + nextNumber;
        if(firstEnemy == false){break;}
        if(nextPosition == pos){
          
        }else if (doesItGotPieces(nextPosition)) {
          break;
        } else {
          validMoves.push(nextPosition);
        }
      }
      firstEnemy = true;
      // Diagonal bottom left
      for (let l = 0; l < 8; l++) {
        nextNumber = number - l;
        nextPosition = letters[i-l] + "." + nextNumber;
        if(firstEnemy == false){break;}
        if(nextPosition == pos){
          
        }else if (doesItGotPieces(nextPosition)) {
          break;
        } else {
          validMoves.push(nextPosition);
        }
      }
    }
  }
}

function CalculateMovesRook(pos, name, move){
  let currentPosition = pos;
  
  const pieceName = name;
  const number = parseInt(currentPosition.charAt(2));
  let letter = currentPosition.charAt(0);
  let nextNumber = number + move;
  let nextPosition = letter + "." + nextNumber;

  for (let i = 0; i < letters.length; i++) {
    if(letters[i] === letter){
      
      firstEnemy = true;
      // Up
      for (let j = 0; j < 8; j++) {
        nextNumber = number + j;
        nextPosition = letters[i] + "." + nextNumber;
        // nextPosition is for first time the current position
        if(firstEnemy == false){break;}
        if(nextPosition == pos){
          
        }else if (doesItGotPieces(nextPosition)) {
          console.log(firstEnemy);
          break;
        } else {
          validMoves.push(nextPosition);
        }
      }

      firstEnemy = true;
      // Down
      for (let j = 0; j < 8; j++) {
        nextNumber = number - j;
        nextPosition = letters[i] + "." + nextNumber;
        if(firstEnemy == false){break;}
        if(nextPosition == pos){
          
        }else if (doesItGotPieces(nextPosition) == true) {
          break;
        } else {
          validMoves.push(nextPosition);
        }
      }

      firstEnemy = true;
      // Left
      for (let j = 0; j < 8; j++) {
        nextNumber = number;
        nextPosition = letters[i-j] + "." + nextNumber;
        if(firstEnemy == false){break;}
        if(nextPosition == pos){
          
        }else if (doesItGotPieces(nextPosition)) {
          break;
        } else {
          validMoves.push(nextPosition);
        }
      }
      firstEnemy = true;
      // Right
      for (let j = 0; j < 8; j++) {
        nextNumber = number;
        nextPosition = letters[i+j] + "." + nextNumber;
        if(firstEnemy == false){break;}
        if(nextPosition == pos){
          
        }else if (doesItGotPieces(nextPosition)) {
          break;
        } else {
          validMoves.push(nextPosition);
        }
      }
    }
  }
}
function CalculateMovesQueen(pos, name, move){
  let currentPosition = pos;
  
  const pieceName = name;
  const number = parseInt(currentPosition.charAt(2));
  let letter = currentPosition.charAt(0);
  let nextNumber = number + move;
  let nextPosition = letter + "." + nextNumber;
  for (let i = 0; i < letters.length; i++) {
    if(letters[i] === letter){
            
      firstEnemy = true;
      // Up
      for (let j = 0; j < 8; j++) {
        nextNumber = number + j;
        nextPosition = letters[i] + "." + nextNumber;
        // nextPosition is for first time the current position
        if(firstEnemy == false){break;}
        if(nextPosition == pos){
          
        }else if (doesItGotPieces(nextPosition)) {
          console.log(firstEnemy);
          break;
        } else {
          validMoves.push(nextPosition);
        }
      }

      firstEnemy = true;
      // Down
      for (let j = 0; j < 8; j++) {
        nextNumber = number - j;
        nextPosition = letters[i] + "." + nextNumber;
        if(firstEnemy == false){break;}
        if(nextPosition == pos){
          
        }else if (doesItGotPieces(nextPosition) == true) {
          break;
        } else {
          validMoves.push(nextPosition);
        }
      }

      firstEnemy = true;
      // Left
      for (let j = 0; j < 8; j++) {
        nextNumber = number;
        nextPosition = letters[i-j] + "." + nextNumber;
        if(firstEnemy == false){break;}
        if(nextPosition == pos){
          
        }else if (doesItGotPieces(nextPosition)) {
          break;
        } else {
          validMoves.push(nextPosition);
        }
      }
      firstEnemy = true;
      // Right
      for (let j = 0; j < 8; j++) {
        nextNumber = number;
        nextPosition = letters[i+j] + "." + nextNumber;
        if(firstEnemy == false){break;}
        if(nextPosition == pos){
          
        }else if (doesItGotPieces(nextPosition)) {
          break;
        } else {
          validMoves.push(nextPosition);
        }
      }
      
      firstEnemy = true;
      // Diagonal top right
      for (let k = 0; k < 8; k++) {
        nextNumber = number + k;
        nextPosition = letters[i+k] + "." + nextNumber;
        if(firstEnemy == false){break;}
        if(nextPosition == pos){
          
        }else if (doesItGotPieces(nextPosition)) {
          break;
        } else {
          validMoves.push(nextPosition);
        }
      }
      firstEnemy = true;
      // Diagonal top left
      for (let j = 0; j < 8; j++) {
        nextNumber = number + j;
        nextPosition = letters[i-j] + "." + nextNumber;
        if(firstEnemy == false){break;}
        if(nextPosition == pos){
          
        }else if (doesItGotPieces(nextPosition)) {
          break;
        } else {
          validMoves.push(nextPosition);
        }
      }
      firstEnemy = true;
      // Diagonal bottom right
      for (let m = 0; m < 8; m++) {
        nextNumber = number - m;
        nextPosition = letters[i+m] + "." + nextNumber;
        if(firstEnemy == false){break;}
        if(nextPosition == pos){
          
        }else if (doesItGotPieces(nextPosition)) {
          break;
        } else {
          validMoves.push(nextPosition);
        }
      }
      firstEnemy = true;
      // Diagonal bottom left
      for (let l = 0; l < 8; l++) {
        nextNumber = number - l;
        nextPosition = letters[i-l] + "." + nextNumber;
        if(firstEnemy == false){break;}
        if(nextPosition == pos){
          
        }else if (doesItGotPieces(nextPosition)) {
          break;
        } else {
          validMoves.push(nextPosition);
        }
      }
    }
  }
}
function CalculateMovesKing(pos, name, move){
  validMovesKing = [];
  let currentPosition = pos;
  
  const pieceName = name;
  const number = parseInt(currentPosition.charAt(2));
  let letter = currentPosition.charAt(0);
  let nextNumber = number + move;
  let nextPosition = letter + "." + nextNumber;
  // Moves for king
  for (let i = 0; i < letters.length; i++) {
    if(letters[i] === letter){
      // Top-Left
      nextNumber = number + move;
      nextPosition = letters[i-1] + "." + nextNumber;
      console.log(nextPosition);
      if (doesItGotPieces(nextPosition)) {
      } else {
        if(validMoves.includes(nextPosition)){
        }else{
          validMovesKing.push(nextPosition);
        }
      }
      console.log(validMovesKing);

      // Up
      nextNumber = number + move;
      nextPosition = letters[i] + "." + nextNumber;
      console.log(nextPosition);
      if (doesItGotPieces(nextPosition)) {
        
      } else {
        if(validMoves.includes(nextPosition)){
        }else{
          validMovesKing.push(nextPosition);
        } }
        console.log(validMovesKing);

      // Top-Right
      nextNumber = number + move;
      nextPosition = letters[i+1] + "." + nextNumber;
      console.log(nextPosition);
      if (doesItGotPieces(nextPosition)) {
        
      } else {
        if(validMoves.includes(nextPosition)){
        }else{
          validMovesKing.push(nextPosition);
        }  }
        console.log(validMovesKing);

      // Right
      nextNumber = number;
      nextPosition = letters[i+1] + "." + nextNumber;
      console.log(nextPosition);
              console.log(validMovesKing);


      if (doesItGotPieces(nextPosition)) {
        
      } else {
        if(validMoves.includes(nextPosition)){
        }else{
          validMovesKing.push(nextPosition);
        }      }
        console.log(validMovesKing);

      // Bottom-Right
      nextNumber = number - move;
      nextPosition = letters[i+1] + "." + nextNumber;
      console.log(nextPosition);

      if (doesItGotPieces(nextPosition)) {
          
        } else {
          if(validMoves.includes(nextPosition)){
          }else{
            validMovesKing.push(nextPosition);
          }       }
          console.log(validMovesKing);

      // Bottom
      nextNumber = number - move;
      nextPosition = letters[i] + "." + nextNumber;
      console.log(nextPosition);

      if (doesItGotPieces(nextPosition)) {
          
        } else {
          if(validMoves.includes(nextPosition)){
          }else{
            validMovesKing.push(nextPosition);
          }       }
          console.log(validMovesKing);
      // Bottom-left
      nextNumber = number - move;
      nextPosition = letters[i-1] + "." + nextNumber;
      console.log(nextPosition);
      if (doesItGotPieces(nextPosition)) {
          
        } else {
          if(validMoves.includes(nextPosition)){
          }else{
            validMovesKing.push(nextPosition);
          }
        }
        console.log(validMovesKing);

      // Left
      nextNumber = number;
      nextPosition = letters[i-1] + "." + nextNumber;
      console.log(nextPosition);

      if (doesItGotPieces(nextPosition)) {
          
        } else {
          if(validMoves.includes(nextPosition)){
          }else{
            validMovesKing.push(nextPosition);
          }
        }      
        console.log(validMovesKing);
        checkMate(pos);
      break;
    }
  }
}

function doesItGotPieces(nextPosition) {
  for (let i = 0; i < WhitePiecesARR.length; i++) {
    if (WhitePiecesARR[i][0] === nextPosition) {
      // Whites turn
      if (whiteToMove == true) {
        return true;
      }
      // Blacks turn
      if(whiteToMove == false){
        if(firstEnemy == true){
          firstEnemy = false;
          return false;
        }else{
          return true;
        }
      }
    }
  }

  for (let i = 0; i < BlackPiecesArr.length; i++) {
    if (BlackPiecesArr[i][0] === nextPosition) {
      // Blacks turn
      if (whiteToMove == false) {
        return true;
      }
      // Whites turn
      if(whiteToMove == true){
        if(firstEnemy == true){
          firstEnemy = false;
          return false;
        }else{
          return true;
        }
      }
    }
  }


  return false;
}
// Checks for Checks on king
function checkMate(coord){
  validMovesKing =[];
  let checker;
  let checked;
  let currentPiece, currentName, currentMove
// checkedKing is class name for red
// Get piece that just moved
// White
for(let i = 0; i<WhitePiecesARR.length;i++){
  if(WhitePiecesARR[i][0] == coord){
    checker = WhitePiecesARR[i];
  }
}
// Black
for(let i = 0; i<BlackPiecesArr.length;i++){
  if(BlackPiecesArr[i][0] == coord){
    checker = BlackPiecesArr[i];
  }
}
  currentPiece = checker[0];
  currentName = checker[1];
  currentMove = checker[2];
  validMoves = [];
  // Calculate moves again to check for mates
  CalculateMovesPawn(currentPiece, currentName, currentMove, firstMove);
  CalculateMovesBishop(currentPiece, currentName, currentMove);
CalculateMovesHorse(currentPiece, currentName, currentMove);
CalculateMovesRook(currentPiece, currentName, currentMove);
CalculateMovesQueen(currentPiece, currentName, currentMove);
// Get kings position
// As white
for(let i = 0; i < WhitePiecesARR.length; i++){
    if(WhitePiecesARR[i][1].includes("King")){
      let id = WhitePiecesARR[i][0];
      if(validMoves.includes(id)){
        document.getElementById(id).classList.add("checkedKing");
        checked = WhitePiecesARR[i];
        currentPiece = checked[0];
        currentName = checked[1];
        currentMove = checked[2];
        console.log("check");
        inCheck = true;
      }
    }
  }
  // As black
  for(let i = 0; i < BlackPiecesArr.length; i++){
    if(BlackPiecesArr[i][1].includes("King")){
      let id = BlackPiecesArr[i][0];
      if(validMoves.includes(id)){
        document.getElementById(id).classList.add("checkedKing");
        checked = BlackPiecesArr[i];
        currentPiece = checked[0];
        currentName = checked[1];
        currentMove = checked[2];
        console.log("check");
        inCheck = true;
      }
    }
  }
  console.log(inCheck);
  
  // Get kings possible moves
if(inCheck){
  validMovesKing = [];
  CalculateMovesKing(currentPiece, currentName, currentMove);
  for(let i = validMoves.length - 1; i >= 0; i--){
    if(validMoves.includes(validMovesKing[i])){
      validMovesKing.splice(i, 1)
      console.log(validMovesKing + " loler");
      console.log(validMovesKing);
      // Update squares
      highlightValidMoves();
      inCheck = true;
    }else{
      inCheck = false;
    }
  }
}



}
// All pieces on board
let WhitePiecesARR = [
  // Starting pos, Name, moves, first move
  // ["A.2", "White Pawn 1", 1, true], ["B.2", "White Pawn 2", 1, true],
  // ["C.2", "White Pawn 3", 1, true], ["D.2", "White Pawn 4", 1, true],
  // ["E.2", "White Pawn 5", 1, true], ["F.2", "White Pawn 6", 1, true],
  // ["G.2", "White Pawn 7", 1, true], ["H.2", "White Pawn 8", 1, true],
  // ["B.1", "White Horse 1", 2], ["G.1", "White Horse 1", 2],
  // ["C.1", "White Bishop 1", 1], ["F.1", "White Bishop 2", 1],
  ["A.2", "White Rook 1", 1], ["H.2", "White Rook 2", 1], 
  ["D.1", "White Queen 1", 1], ["E.1", "White King 1", 1]
]
let BlackPiecesArr = [
  // Starting pos, Name, moves, first move
  // ["A.7", "Black Pawn 1", 1, true], ["B.7", "Black Pawn 2", 1, true],
  // ["C.7", "Black Pawn 3", 1, true], ["D.7", "Black Pawn 4", 1, true],
  // ["E.7", "Black Pawn 5", 1, true], ["F.7", "Black Pawn 6", 1, true],
  // ["G.7", "Black Pawn 7", 1, true], ["H.7", "Black Pawn 8", 1, true],
  // ["B.8", "Black Horse 1", 2], ["G.8", "Black Horse 1", 2],
  // ["C.8", "Black Bishop 1", 1], ["F.8", "Black Bishop 2", 1],
  // ["A.8", "Black Rook 1", 1], ["H.8", "Black Rook 2", 1], 
  ["D.8", "Black Queen 1", 1], ["E.8", "Black King 1", 1]
]
// Initialize globally used variables
var currentPiece, currentName, currentMove, firstMove, currentPieceArrPos;
var hasPieceInIt = false;
var firstClick = true;
var whiteToMove = true;
// Initialize currentActivePiece to null
let currentActivePiece = null;
// Initialize validMoves array to empty
let validMoves = [];

const boardArea = document.getElementById("boardArea");
const fragment = document.createDocumentFragment();
let color = "";
// Create rows for chessboard
for (let i = 8; i >= 1; i--) {
  const row = document.createElement("tr");
  // Add number column to right of row
  const numberCell = document.createElement("td");
  numberCell.textContent = i;
  row.appendChild(numberCell);

  for (let j = 0; j < 8; j++) {
    if ((i + j) % 2 === 0) {
      color = "blackB";
    } else {
      color = "whiteB";
    }
    const button = document.createElement("button");
    const cell = document.createElement("td");
    button.classList.add(color);
    const currentID = letters[j] + "." + i;
    button.setAttribute("id", currentID);
    cell.appendChild(button);
    row.appendChild(cell);
  }
  fragment.appendChild(row);
}

// Create bottom row for letters
const bottomRow = document.createElement("tr");
bottomRow.appendChild(document.createElement("td"));
for (let i = 0; i < 8; i++) {
  const cell = document.createElement("td");
  cell.textContent = letters[i];
  bottomRow.appendChild(cell);
}
fragment.appendChild(bottomRow);

boardArea.appendChild(fragment);


function eatPiece(eater, eaten){

  // Eat the piece
  if(whiteToMove == true){
    // As white
    for(let k = 0; k < BlackPiecesArr.length; k++){
      if(BlackPiecesArr[k][0] == eaten){
        BlackPiecesArr.splice(k, 1)
        break
      }
    }
  }else{
    // As black
    for(let k = 0; k < WhitePiecesARR.length; k++){
      if(WhitePiecesARR[k][0] == eaten){
        WhitePiecesARR.splice(k, 1)
        break
      }
    }
  }
}


highlightPieces();
// Event listener for buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  highlightPieces();
  button.addEventListener("click", () => {
    validMovesKing =[];
    // Get the ID of the button that was clicked
    const buttonId = button.getAttribute("id");
    let buttonIDasVar = document.getElementById(buttonId);
    // ! ///////////////////////////////////////77
      if (firstClick === true) {
        buttonIDasVar.classList.add("currentlySelected");
        // Whites turn
        if(whiteToMove == true){
          // Check if square has any pieces
          for (let i = 0; i < WhitePiecesARR.length; i++) {
            if (WhitePiecesARR[i][0] === buttonId) {
              // Get all current variables values
              hasPieceInIt = true;
              currentPiece = WhitePiecesARR[i][0];
              currentName = WhitePiecesARR[i][1];
              currentMove = WhitePiecesARR[i][2];
              currentPieceArrPos = WhitePiecesARR[i];
              if(currentName.includes("Pawn")) {
                // If pawn check if it has first move avaiable
                firstMove = WhitePiecesARR[i][3]
              }
              // Set value to current piece
              currentActivePiece = buttonId;
              // Clear valid moves arr
              validMoves = [];
    
              break;
            }
          }
        }else{
          // Check if square has any pieces
          // Same loop as one above, but for black pieces
          for (let i = 0; i < BlackPiecesArr.length; i++) {
            if (BlackPiecesArr[i][0] === buttonId) {
              // Get all current variables values
              hasPieceInIt = true;
              currentPiece = BlackPiecesArr[i][0];
              currentName = BlackPiecesArr[i][1];
              currentMove = BlackPiecesArr[i][2];
              currentPieceArrPos = BlackPiecesArr[i];
              if(currentName.includes("Pawn")) {
                // If pawn check if it has first move avaiable
                firstMove = BlackPiecesArr[i][3]
              }
              // Set value to current piece
              currentActivePiece = buttonId;
              // Clear valid moves arr
              validMoves = [];

              break;
            }
          }
        }
        // If it has a piece in it, go through if-else
        if(hasPieceInIt === true){
          // If currentName contains word Pawn
          if(currentName.includes("Pawn")) {
            CalculateMovesPawn(currentPiece, currentName, currentMove, firstMove, currentPieceArrPos);
          }else if(currentName.includes("Bishop")){
            CalculateMovesBishop(currentPiece, currentName, currentMove);
          }else if(currentName.includes("Horse")){
            CalculateMovesHorse(currentPiece, currentName, currentMove);
          }else if(currentName.includes("Rook")){
            CalculateMovesRook(currentPiece, currentName, currentMove)
          }else if(currentName.includes("Queen")){
            CalculateMovesQueen(currentPiece, currentName, currentMove)
          }else if(currentName.includes("King")){
            CalculateMovesKing(currentPiece, currentName, currentMove)
          }
          highlightValidMoves();
          // After IFELSE set false;
          hasPieceInIt = false;
          firstClick = false;
        }else{
          console.log("Square " + buttonId + " Is Empty");
          console.log("White To move: " + whiteToMove);
        }
        
        // Move pieces
      } else if(validMoves.includes(buttonId)){
        
        if(validMoves.includes(buttonId)){
          // Checks if square has own pieces in it
          if (whiteToMove == true) {
            let foundPiece = false;
            
            for (let k = 0; k < WhitePiecesARR.length; k++) {
              if (WhitePiecesARR[k][0] == buttonId) {    
                foundPiece = true;
                break;
              }
            }
          
            if (foundPiece) {
              console.log("You cannot move to a square that has your own piece!");
            } else {
              if (currentName.includes("Pawn")) {
                currentPieceArrPos[3] = false;
              }
              // checkMate(buttonId);
              currentPieceArrPos[0] = buttonId;
              // Check for mates
              checkMate(currentPieceArrPos[0]);
              eatPiece(currentActivePiece, buttonId);
              // Turns turn off after move
              if (whiteToMove == true) {
                whiteToMove = false;
              } else if (whiteToMove == false) {
                whiteToMove = true;
              }
            }
          }else{
            let foundPiece = false;
            
            for (let k = 0; k < BlackPiecesArr.length; k++) {
              if (BlackPiecesArr[k][0] == buttonId) {                
                foundPiece = true;
                break;
              }
            }
          
            if (foundPiece) {
              console.log("You cannot move to a square that has your own piece!");
            } else {
              if (currentName.includes("Pawn")) {
                currentPieceArrPos[3] = false;
              }
              currentPieceArrPos[0] = buttonId;
              // Check for mates
              checkMate(buttonId);
              eatPiece(currentActivePiece, buttonId);
              // Turns turn off after move
              if (whiteToMove == true) {
                whiteToMove = false;
              } else if (whiteToMove == false) {
                whiteToMove = true;
              }
            }
          }
          

          removeHighlights(), highlightPieces();
          firstClick = true;
          
        }
         // Remove board highlight
        for (let i = 0; i < letters.length; i++) {
          for (let j = 1; j <= 8; j++) {
            let id = letters[i] + "." + j;
            const element = document.getElementById(id);
            if (element.classList.contains("currentlySelected")) {
              element.classList.remove("currentlySelected");
            }
          }
        }
        
      }else if(validMovesKing.includes(buttonId)){
        if(validMovesKing.includes(buttonId)){
          console.log("Valid moves for king: " + validMovesKing);
          console.log("Valid moves" + validMoves);
          // Checks if square has own pieces in it
          if (whiteToMove == true) {
            let foundPiece = false;
            
            for (let k = 0; k < WhitePiecesARR.length; k++) {
              if (WhitePiecesARR[k][0] == buttonId) {    
                foundPiece = true;
                break;
              }
            }
          
            if (foundPiece) {
              console.log("You cannot move to a square that has your own piece!");
            } else {
              if (currentName.includes("Pawn")) {
                currentPieceArrPos[3] = false;
              }
              currentPieceArrPos[0] = buttonId;
              // Check for mates
              checkMate(currentPieceArrPos[0]);
              eatPiece(currentActivePiece, buttonId);
              // Turns turn off after move
              if (whiteToMove == true) {
                whiteToMove = false;
              } else if (whiteToMove == false) {
                whiteToMove = true;
              }
            }
          }else{
            let foundPiece = false;
            
            for (let k = 0; k < BlackPiecesArr.length; k++) {
              if (BlackPiecesArr[k][0] == buttonId) {                
                foundPiece = true;
                break;
              }
            }
          
            if (foundPiece) {
              console.log("You cannot move to a square that has your own piece!");
            } else {
              if (currentName.includes("Pawn")) {
                currentPieceArrPos[3] = false;
              }
              currentPieceArrPos[0] = buttonId;
              // Check for mates
              checkMate(buttonId);
              eatPiece(currentActivePiece, buttonId);
              // Turns turn off after move
              if (whiteToMove == true) {
                whiteToMove = false;
              } else if (whiteToMove == false) {
                whiteToMove = true;
              }
            }
          }
          

          removeHighlights(), highlightPieces();
          firstClick = true;
          
        }
         // Remove board highlight
        for (let i = 0; i < letters.length; i++) {
          for (let j = 1; j <= 8; j++) {
            let id = letters[i] + "." + j;
            const element = document.getElementById(id);
            if (element.classList.contains("currentlySelected")) {
              element.classList.remove("currentlySelected");
            }
          }
        }
        
      }else{
        removeHighlights();
        firstClick = true;
        for (let i = 0; i < letters.length; i++) {
          for (let j = 1; j <= 8; j++) {
            let id = letters[i] + "." + j;
            const element = document.getElementById(id);
            if (element.classList.contains("currentlySelected")) {
              element.classList.remove("currentlySelected");
            }
          }
        }
      }
    });
  });

function highlightPieces(){
  // Remove piece highlights
  for (let i = 0; i < letters.length; i++) {
    for (let j = 1; j <= 8; j++) {
      let id = letters[i] + "." + j;
      const element = document.getElementById(id);
      if (element.classList.contains("pieceHighlightBlack")) {
        element.classList.remove("pieceHighlightBlack");
      }
      if (element.classList.contains("pieceHighlightWhite")) {
        element.classList.remove("pieceHighlightWhite");
      }
    }
  }
  // Add highlights for squares with pieces
  WhitePiecesARR.forEach(piece => {
    const name = piece[1];
    const id = piece[0];
    const element = document.getElementById(id);
    if (element && !element.querySelector('img')) { // Check if element doesn't have a child img element
      const img = document.createElement('img');
      img.setAttribute('src', `img/white${name.split(' ')[1]}.png`);
      img.setAttribute('alt', name);
      element.appendChild(img);
    }
  });
  
  
  
  BlackPiecesArr.forEach(piece => {
    const name = piece[1];
    const id = piece[0];
    const element = document.getElementById(id);
    if (element && !element.querySelector('img')) { // Check if element doesn't have a child img element
      const img = document.createElement('img');
      img.setAttribute('src', `img/black${name.split(' ')[1]}.png`);
      img.setAttribute('alt', name);
      element.appendChild(img);
    }
  });
}

function highlightValidMoves() {
  for (let i = 0; i < letters.length; i++) {
    for (let j = 1; j <= 8; j++) {
      const id = letters[i] + "." + j;
      // Check moves for king
      if(validMoves.includes(id)){
        const element = document.getElementById(id);
        // White to move
        if(whiteToMove == true){
          // Find if it has black pieces
          for(let k = 0; k < BlackPiecesArr.length; k++){
            if(BlackPiecesArr[k][0] == id){
              const div = document.createElement("div");
              const img = element.querySelector('img');
              if (img) {
                img.classList.add('movesHighlight');
              } else {
                const div = document.createElement('div');
                div.setAttribute('id', 'highlight');
                element.appendChild(div);
                div.classList.add('movesHighlight');
              }
            }
          }
          if(element.childElementCount > 0){
          }else{
            const div = document.createElement("div");
            div.setAttribute("id", "highlight");
            document.getElementById(id).appendChild(div);
            div.classList.add("movesHighlight");
          }
          // Black to move
        }else{
          // Find if it has white pieces
          for(let k = 0; k < WhitePiecesARR.length; k++){
            if(WhitePiecesARR[k][0] == id){
              const img = element.querySelector('img');
              if (img) {
                img.classList.add('movesHighlight');
              } else {
                const div = document.createElement('div');
                div.setAttribute('id', 'highlight');
                element.appendChild(div);
                div.classList.add('movesHighlight');
              }
            }
          }
          if(element.childElementCount > 0){
          }else{
            const div = document.createElement("div");
            div.setAttribute("id", "highlight");
            document.getElementById(id).appendChild(div);
            div.classList.add("movesHighlight");
          }
        }
        // If it has a piece in it
        if(element.childElementCount > 0){
        }else{
        }
      }
    }
  }
 // ! king kong
  for (let i = 0; i < letters.length; i++) {
    for (let j = 1; j <= 8; j++) {
      const id = letters[i] + "." + j;
      if(validMovesKing.includes(id)){
        // console.log("ID IS: " + id);
        const element = document.getElementById(id);
        // Whites move
        if(whiteToMove){
          // Find if it has black pieces
          for(let k = 0; k < BlackPiecesArr.length; k++){
            if(BlackPiecesArr[k][0] == id){
              const div = document.createElement("div");
              const img = element.querySelector('img');
              if (img) {
                img.classList.add('movesHighlight');
              } else {
                const div = document.createElement('div');
                div.setAttribute('id', 'highlightKing');
                element.appendChild(div);
                div.classList.add('movesHighlight');
              }
            }
          }
          if(element.childElementCount > 0){
          }else{
            const div = document.createElement("div");
            div.setAttribute("id", "highlightKing");
            document.getElementById(id).appendChild(div);
            div.classList.add("movesHighlight");
          }
    
    
          // Blacks move
        }else{
        // Find if it has white pieces
        for(let k = 0; k < WhitePiecesARR.length; k++){
          if(WhitePiecesARR[k][0] == id){
            const img = element.querySelector('img');
            if (img) {
              img.classList.add('movesHighlight');
            } else {
              const div = document.createElement('div');
              div.setAttribute('id', 'highlightKing');
              element.appendChild(div);
              div.classList.add('movesHighlight');
            }
          }
        }
        if(element.childElementCount > 0){
        }else{
          const div = document.createElement("div");
          div.setAttribute("id", "highlightKing");
          document.getElementById(id).appendChild(div);
          div.classList.add("movesHighlight");
        }
    
        }
      }
    }
  }
}
function removeHighlights(){
  for (let i = 0; i < letters.length; i++) {
    for (let j = 1; j <= 8; j++) {
      const id = letters[i] + "." + j;
      const element = document.getElementById(id);
      if (element.childElementCount > 0) {
        // Check if element has child elements
        if (element.children.length > 0) {
          // Remove child elements
          while (element.firstChild) {
            element.removeChild(element.firstChild);
          }
        }
      }
    }
  }
  highlightPieces();
}