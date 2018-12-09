function Start() {
  this.$characterSelector = $('#characters-selector');
  this.$battleBoard = $('#battle-board');
  this.$startScreen = $('#start-screen');
  this.$loadingScreen = $('.loading-screen');
  this.$startButton = $('#start-button');
  this.$flyingPokemon = $('#flying-pokemon');
}

Start.prototype.start = function() {
  this.initializeStartScreen();
}

Start.prototype.initializeStartScreen = function() {
  this.$characterSelector.hide();
  this.$loadingScreen.hide();
  this.$battleBoard.hide();
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
