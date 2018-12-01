function Pikachu(playerPosition) {
  this.name = "Pikachu";
  this.imageSrc = "./assets/img/pikachu.gif";
  this.type = "electric";
  this.movements = [new Move("Thunderbolt"), new Move('Slam'), new Move('Agility'), new Move('Thunder Punch')];
  Pokemon.call(this, this.name, this.imageSrc, this.type, this.movements, playerPosition);
}

Pikachu.prototype = Object.create(Pokemon.prototype);


