function Mrmime(playerPosition) {
  Pokemon.call(this,
    "Mr.Mime",
    "./assets/img/mr.mime.gif",
    "physic",
    [new Move('Psywave'), new Move('Power Swap'), new Move("Mimic"), new Move('Phychic')],
    playerPosition || 1);
}

Mrmime.prototype = Object.create(Pokemon.prototype);