function Mewtwo(playerPosition) {
  Pokemon.call(this,
    "Mewtwo", 
    "./assets/img/mewtwo.gif", 
    "psychic",
    [new Move("Psywave"), new Move('Psycho cut'), new Move('Laser focus'), new Move('Swift')],
    playerPosition);
}

Mewtwo.prototype = Object.create(Pokemon.prototype);