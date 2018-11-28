function Player(name, pokemon, playerPosition) {
  this.name = name;
  this.pokemon = pokemon;
  this.playerPosition = playerPosition;
}

Player.prototype.initialize = function() {
  this.pokemon.initialize();
}

