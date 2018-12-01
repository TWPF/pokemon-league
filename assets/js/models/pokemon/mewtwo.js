function Mewtwo(playerPosition) {
  this.name = "Mewtwo";
  this.imageSrc = "./assets/img/mewtwo.gif";
  this.type = 'psychic';
  this.movements = [new Move("Psywave"), new Move('Psycho cut'), new Move('Laser focus'), new Move('Swift')];
  Pokemon.call(this, this.name, this.imageSrc, this.type, this.movements, playerPosition);
}

Mewtwo.prototype = Object.create(Pokemon.prototype);