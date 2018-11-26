function Charizard(player) {
  this.name = "Charizard";
  this.src = "./assets/img/charizard.gif";
  this.type = 'fire';
  this.movements = [new Move("Flamethrower", 46), new Move('Scratch', 23), new Move('Inferno', 42), new Move('Earthquake', 36)];
  Pokemon.call(this, this.src, this.type, this.movements, player);
}

Charizard.prototype = Object.create(Pokemon.prototype);
