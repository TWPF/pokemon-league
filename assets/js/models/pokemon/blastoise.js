function Blastoise(playerPosition) {
  Pokemon.call(this,
    "Blastoise",
    "./assets/img/blastoise.gif",
    "water",
    [new Move("Hydro pump"), new Move('Bite'), new Move('Skull Bash'), new Move('Rapid spin')],
    playerPosition);
}

Blastoise.prototype = Object.create(Pokemon.prototype);