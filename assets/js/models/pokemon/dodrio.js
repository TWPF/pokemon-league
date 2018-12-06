function Dodrio(playerPosition) {
  Pokemon.call(this,
    "Dodrio",
    "./assets/img/dodrio.gif",
    "flying",
    [new Move('Peck'), new Move('Quick attack'), new Move("Rage"), new Move('Fury attack')],
    playerPosition || 1);
}

Dodrio.prototype = Object.create(Pokemon.prototype);