function Player(name, playerPosition, pokemon1, pokemon2, pokemon3) {
  this.name = name;
  this.pokemon = [pokemon1, pokemon2, pokemon3];
  this.playerPosition = playerPosition;
  this.isLeft = playerPosition === 1;
}

Player.prototype.initialize = function() {
  this.pokemon[0].initialize();
}

Player.prototype.initializeMachine = function() {
  this.pokemon[0].initializeMachine();
}

Player.prototype.changePokemon = function() {
  this.pokemon[0].initialize();
  this.updatePokeball();
}

Player.prototype.changeMachinePokemon = function() {
  this.pokemon[0].initializeMachine();
  this.updatePokeball();
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
  this.pokemon[0].dissapearPokemon();
  this.pokemon.shift(); 
}

Player.prototype.clearPanel = function() {
  if (this.isLeft) {
    $('#pokemon-name-1').hide();
    $('#pokemon-ps-1').hide();
    $('#pokemon-health-1').hide();
    $('#option-1').hide();
    $('#option-2').hide();
    $('#option-3').hide();
    $('#option-4').hide();
    $('#pokeball-1').hide();
    $('#pokeball-2').hide();
    $('#pokeball-3').hide();

  } else {
    $('#pokemon-name-2').hide();
    $('#pokemon-ps-2').hide();
    $('#pokemon-health-2').hide();
    $('#pokeball-4').hide();
    $('#pokeball-5').hide();
    $('#pokeball-6').hide();
  }
}

Player.prototype.loseMessage = function() {
  if (this.isLeft) {
    $('.player-panel-1').removeClass('panel-active');
    $('#message-1').text('You lose the battle!');
  } else {
    $('.player-panel-2').removeClass('panel-active');
    $('#message-2').text('You lose the battle!');
  }
}

Player.prototype.winMessage = function() {
  if (this.isLeft) {
    $('.player-panel-1').addClass('panel-active');
    $('#message-1').text('You win the battle!');
  } else {
    $('.player-panel-2').addClass('panel-active');
    $('#message-2').text('You win the battle!');
  }
}

Player.prototype.updatePokeball = function() {
  if (this.isLeft) {
    if (this.pokemon.length === 2) {
      $('#pokeball-1').hide();
    }
    if (this.pokemon.length === 1) {
      $('#pokeball-2').hide();
    }
    if (this.pokemon.length === 0) {
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
    if (this.pokemon.length === 0 ) {
      $('#pokeball-6').hide();
    }
  }
}



