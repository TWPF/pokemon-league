function Pikachu(playerPosition) {
  Pokemon.call(this, 
    "Pikachu", 
    "./assets/img/pikachu.gif",
    "electric",
    [new Thunderbolt(), new Slam(), new Move('Agility'), new Thunderstorm()], 
    playerPosition || 1);
}

Pikachu.prototype = Object.create(Pokemon.prototype);


