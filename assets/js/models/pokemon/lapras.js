function Lapras(playerPosition) {
  Pokemon.call(this,
    "Lapras",
    "./assets/img/lapras.gif",
    "water",
    [new Move('Ice Beam'), new Hydropump(), new Move('Body Slam'), new Move('Sheer Cold')],
    playerPosition || 1);
}
Lapras.prototype = Object.create(Pokemon.prototype);