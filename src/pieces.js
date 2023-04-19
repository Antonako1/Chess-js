var firstMove = 0;


export class Piece{
    constructor(name, move, pos, graphic){
        this.name = name;
        this.move = move;
        this.pos = pos;
        this.graphic = graphic;
    }
  }
  
  export class Pawn extends Piece {
    constructor(name, move, pos) {
      super(name, move, pos);
    }
    
    possibleMoves(currentPosition) {
      this.pos = currentPosition;
      const letter = this.pos.charAt(0);
      // console.log("Letter is: " + letter);
      const number = parseInt(this.pos.charAt(2));
      const nextNumber = number + 1;
      const nextPosition = letter + "." + nextNumber;
      console.log("Next position: "+nextPosition + " =>");
      console.log("For " + this.name);
    }
  }

  
  
  /// Ottaa nykyisen position, esim. A.2.
  /// Katsoo onko se mikä pala se on,
  /// Sen perusteella laskee liikkeet, sotilaalla ne olisivat esimerkiksi A.(2+1y-akselille)
  /// Näyttää mahdolliset liikkeet konsolissa.