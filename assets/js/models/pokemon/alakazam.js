function Alakazam(playerPosition) {
  Pokemon.call(this,
    "Alakazam",
    "./assets/img/alakazam.gif",
    "physic",
    [new Phychic(), new Move('Psybeam'), new Move("Telekinesis"), new Hiddenpower()],
    playerPosition || 1);
}

Alakazam.prototype = Object.create(Pokemon.prototype);