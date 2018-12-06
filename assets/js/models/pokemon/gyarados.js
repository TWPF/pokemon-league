function Gyarados(playerPosition) {
  Pokemon.call(this,
    "Gyarados",
    "./assets/img/gyarados.gif",
    "water",
    [new Bite(), new Move('Ice fang'), new Hydropump(), new Move('Scary Face')],
    playerPosition || 1);
}
Gyarados.prototype = Object.create(Pokemon.prototype);