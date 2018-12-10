function Articuno(playerPosition) {
  Pokemon.call(this,
    "Articuno",
    "./assets/img/articuno.gif",
    "ice",
    [new Powdersnow(), new Move('Hail'), new Hurricane(), new Icebeam()],
    playerPosition || 1);
}

Articuno.prototype = Object.create(Pokemon.prototype);