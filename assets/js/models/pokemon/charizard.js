function Charizard(playerPosition) {
  Pokemon.call(this, 
    "Charizard", 
    "./assets/img/charizard.gif", 
    "fire", 
    [new Move("Flamethrower"), new Move('Scratch'), new Move('Inferno'), new Move('Earthquake')],
     playerPosition);
}

Charizard.prototype = Object.create(Pokemon.prototype);
