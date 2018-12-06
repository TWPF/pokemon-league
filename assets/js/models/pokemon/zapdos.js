function Zapdos(playerPosition) {
  Pokemon.call(this,
    "Zapdos",
    "./assets/img/zapdos.gif",
    "electric",
    [new Thunderstorm(), new Move('Ancient Power'), new Move("Drill Peck"), new Move('Rain Dance')],
    playerPosition || 1);
}

Zapdos.prototype = Object.create(Pokemon.prototype);