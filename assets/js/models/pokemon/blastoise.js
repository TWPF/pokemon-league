function Blastoise(playerPosition) {
  this.name = "Blastoise";
  this.imageSrc = "./assets/img/blastoise.gif";
  this.type = 'water';
  this.movements = [new Move("Hydro pump"), new Move('Bite'), new Move('Skull Bash'), new Move('Rapid spin')];
  Pokemon.call(this, this.name, this.imageSrc, this.type, this.movements, playerPosition);
}

Blastoise.prototype = Object.create(Pokemon.prototype);