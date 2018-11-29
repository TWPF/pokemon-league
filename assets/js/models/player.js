function Player(name, playerPosition, pokemon1, pokemon2, pokemon3) {
  this.name = name;
  this.pokemon = [pokemon1, pokemon2, pokemon3];
  this.playerPosition = playerPosition;
}

Player.prototype.initialize = function() {
  this.pokemon[0].initialize();
}

Player.prototype.changePokemon = function() {
  this.pokemon.shift();
  this.pokemon[0].initialize();
  console.log(this.pokemon);
}