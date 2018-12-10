function Moltres(playerPosition) {
  Pokemon.call(this,
    "Moltres",
    "./assets/img/moltres.gif",
    "fire",
    [new Flamethrower(), new Move('Ancient Power'), new Inferno(), new Hurricane()],
    playerPosition || 1);
}

Moltres.prototype = Object.create(Pokemon.prototype);