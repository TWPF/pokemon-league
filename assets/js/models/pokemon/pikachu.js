function Pikachu(playerPosition) {
  this.name = "Pikachu";
  this.imageSrc = "./assets/img/pikachu.gif";
  this.type = "electric";
  this.movements = [new Move("Thunderbolt", 32), new Move('Slam', 24), new Move('Agility', 18), new Move('Thunder Punch', 27)];
  Pokemon.call(this, this.name, this.imageSrc, this.type, this.movements, playerPosition);
}

Pikachu.prototype = Object.create(Pokemon.prototype);


