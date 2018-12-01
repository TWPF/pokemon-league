function Charizard(playerPosition) {
  this.name = "Charizard";
  this.imageSrc = "./assets/img/charizard.gif";
  this.type = 'fire';
  this.movements = [new Move("Flamethrower"), new Move('Scratch'), new Move('Inferno'), new Move('Earthquake')];
  Pokemon.call(this, this.name, this.imageSrc, this.type, this.movements, playerPosition);
}

Charizard.prototype = Object.create(Pokemon.prototype);
