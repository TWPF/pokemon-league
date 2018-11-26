function Pikachu(player) {
  this.name = "Pikachu";
  this.src = "./assets/img/pikachu.gif";
  this.type = "electric";
  this.movements = [new Move("Thunderbolt", 32), new Move('Slam', 24), new Move('Agility', 18), new Move('Thunder Punch', 27)];
  Pokemon.call(this, this.src, this.type, this.movements, player);
}

Pikachu.prototype = Object.create(Pokemon.prototype);


