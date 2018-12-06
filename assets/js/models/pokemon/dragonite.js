function Dragonite(playerPosition) {
  Pokemon.call(this,
    "Dragonite",
    "./assets/img/dragonite.gif",
    "dragon",
    [new Move('Hurricane'), new Move('Dragon Rage'), new Move('Dragon Tail'), new Move('Fire Punch')],
    playerPosition || 1);
}

Dragonite.prototype = Object.create(Pokemon.prototype);