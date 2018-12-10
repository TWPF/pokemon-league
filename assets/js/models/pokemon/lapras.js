function Lapras(playerPosition) {
  Pokemon.call(this,
    "Lapras",
    "./assets/img/lapras.gif",
    "water",
    [new Icebeam(), new Hydropump(), new Bodyslam(), new Move('Sheer Cold')],
    playerPosition || 1);
}
Lapras.prototype = Object.create(Pokemon.prototype);