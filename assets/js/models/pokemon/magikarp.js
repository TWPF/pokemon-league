function Magikarp(playerPosition) {
  Pokemon.call(this,
    "Magikarp",
    "./assets/img/magikarp.gif",
    "water",
    [new Move('Splash'), new Move('Nothing'), new Move("Nothing"), new Move('Nothing')],
    playerPosition || 1);
}

Magikarp.prototype = Object.create(Pokemon.prototype);