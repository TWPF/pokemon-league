function Articuno(playerPosition) {
  Pokemon.call(this,
    "Articuno",
    "./assets/img/articuno.gif",
    "ice",
    [new Move('Powder Snow'), new Move('Hail'), new Move("Hurricane"), new Move('Ice Beam')],
    playerPosition || 1);
}

Articuno.prototype = Object.create(Pokemon.prototype);