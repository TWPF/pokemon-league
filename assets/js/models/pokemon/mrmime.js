function Mrmime(playerPosition) {
  Pokemon.call(this,
    "Mr.Mime",
    "./assets/img/mr.mime.gif",
    "physic",
    [new Powerswap(), new Phychic(), new Move("Mimic"), new Move('Psywave')],
    playerPosition || 1);
}

Mrmime.prototype = Object.create(Pokemon.prototype);