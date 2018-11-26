function Charizard(playerPosition) {
  this.name = "Charizard";
  this.imageSrc = "./assets/img/charizard.gif";
  this.type = 'fire';
  this.movements = [new Move("Flamethrower", 46), new Move('Scratch', 23), new Move('Inferno', 42), new Move('Earthquake', 36)];
  Pokemon.call(this, this.name, this.imageSrc, this.type, this.movements, playerPosition);
}

Charizard.prototype = Object.create(Pokemon.prototype);
