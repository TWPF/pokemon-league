function Blastoise(playerPosition) {
  Pokemon.call(this,
    "Blastoise",
    "./assets/img/blastoise.gif",
    "water",
    [new Hydropump(), new Bite(), new Move("Skull bash"), new Move('Rapid spin')],
    playerPosition);
}

Blastoise.prototype = Object.create(Pokemon.prototype);