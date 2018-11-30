function Player(name, playerPosition, pokemon1, pokemon2, pokemon3) {
  this.name = name;
  this.pokemon = [pokemon1, pokemon2, pokemon3];
  this.playerPosition = playerPosition;
  this.isLeft = playerPosition === 1;
}

Player.prototype.initialize = function() {
  this.pokemon[0].initialize();
}

Player.prototype.changePokemon = function() {
  this.pokemon[0].initialize();
  this.updatePokeball();
}

Player.prototype.updatePokeball = function() {
  if (this.isLeft) {
    if (this.pokemon.length === 2) {
      $('#pokeball-1').hide();
    }
    if (this.pokemon.length === 1) {
      $('#pokeball-2').hide();
    }
    if (this.pokemon.length === 1) {
      $('#pokeball-3').hide();
    }
  }
  else {
    if (this.pokemon.length === 2) {
      $('#pokeball-4').hide();
    }
    if (this.pokemon.length === 1) {
      $('#pokeball-5').hide();
    }
    if (this.pokemon.length === 1) {
      $('#pokeball-6').hide();
    }
  }
}

Player.prototype.losesBattle = function() {
  this.updatePokeball();
  this.clearPanel();
  this.loseMessage();
}

Player.prototype.winsBattle = function() {
  this.clearPanel();
  this.winMessage();
}

Player.prototype.deadPokemon = function() {
  this.pokemon.shift();
}

Player.prototype.clearPanel = function() {
  if (this.isLeft) {
    $('#pokemon-name-1').fadeOut();
    $('#pokemon-ps-1').fadeOut();
    $('#pokemon-health-1').fadeOut();
    $('#option-1').fadeOut();
    $('#option-2').fadeOut();
    $('#option-3').fadeOut();
    $('#option-4').fadeOut();
  } else {
    $('#pokemon-name-2').fadeOut();
    $('#pokemon-ps-2').fadeOut();
    $('#pokemon-health-2').fadeOut();
    $('#option-5').fadeOut();
    $('#option-6').fadeOut();
    $('#option-7').fadeOut();
    $('#option-8').fadeOut();
  }
}

Player.prototype.loseMessage = function() {
  if (this.isLeft) {
    $('#message-1').text('You lose the battle!');
  } else {
    $('#message-2').text('You lose the battle!');
  }
}

Player.prototype.winMessage = function() {
  if (this.isLeft) {
    $('#message-1').text('You win the battle!');
  } else {
    $('#message-2').text('You win the battle!');
  }
}

