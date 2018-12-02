function Charizard(playerPosition) {
  Pokemon.call(this, 
    "Charizard", 
    "./assets/img/charizard.gif", 
    "fire", 
    [new Flamethrower(), new Scratch(), new Inferno(), new Move("Earthquake")],
     playerPosition);
}

Charizard.prototype = Object.create(Pokemon.prototype);
