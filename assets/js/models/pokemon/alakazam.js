function Alakazam(playerPosition) {
  Pokemon.call(this,
    "Alakazam",
    "./assets/img/alakazam.gif",
    "physic",
    [new Move('Phychic'), new Move('Psybeam'), new Move("Telekinesis"), new Move('Hidden power')],
    playerPosition || 1);
}

Alakazam.prototype = Object.create(Pokemon.prototype);