function Pikachu(playerPosition) {
  Pokemon.call(this, 
    "Pikachu", 
    "./assets/img/pikachu.gif",
    "electric",
    [new Move("Thunderbolt"), new Move('Slam'), new Move('Agility'), new Move('Thunder Punch')], 
    playerPosition);
}

Pikachu.prototype = Object.create(Pokemon.prototype);


