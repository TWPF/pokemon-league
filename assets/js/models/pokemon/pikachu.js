function Pikachu(playerPosition) {
  Pokemon.call(this, 
    "Pikachu", 
    "./assets/img/pikachu.gif",
    "electric",
    [new Thunderbolt(), new Move('Slam'), new Move('Agility'), new Thunderstorm()], 
    playerPosition);
}

Pikachu.prototype = Object.create(Pokemon.prototype);


