function Dragonite(playerPosition) {
  Pokemon.call(this,
    "Dragonite",
    "./assets/img/dragonite.gif",
    "dragon",
    [new Hurricane(), new Dragonrage(), new Move('Dragon Tail'), new Firepunch()],
    playerPosition || 1);
}

Dragonite.prototype = Object.create(Pokemon.prototype);