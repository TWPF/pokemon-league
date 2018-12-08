function Start() {
  this.$characterSelector = $('#characters-selector');
  this.$battleElements = $('#battle-elements');
  this.$startScreen = $('#start-screen');

  this.$startButton = $('#start-button');
  this.$flyingPokemon = $('#flying-pokemon');
}

Start.prototype.start = function() {
  this.initializeStartScreen();
}

Start.prototype.initializeStartScreen = function() {
  this.$characterSelector.hide();
  this.$battleElements.hide();
  this.$startScreen.show();
  this.$startButton.click(function() {
    this.loadCharacterScreen();
  }.bind(this));
}

Start.prototype.loadCharacterScreen = function() {
  this.$flyingPokemon.addClass('pokemon-off');
  setTimeout(function() {
    this.$flyingPokemon.remove();
    var characterScreen = new CharactersSelector();
    characterScreen.start();
  }.bind(this), 2000);


}
