function CharactersSelector() {

  this.pokemonList = [new Blastoise(), new Charizard(), new Gengar(), new Pikachu(), new Charizard(), new Blastoise()];
  this.pokemonElected = [];

  this.$characterSelector = $('#characters-selector');
  this.$battleElements = $('#battle-elements');

  this.$pokeballContainer = $('.pokeball-container');
  this.pokeballItem = '<img src="assets/img/pokeball.png" />';
  this.$pokeballItemSelector = $('.pokeball-container img');

}

CharactersSelector.prototype.start = function() {
  this.initializeCharacterScreen();
}

CharactersSelector.prototype.initializeCharacterScreen = function() {
  this.$battleElements.hide();
  this.$characterSelector.show();
  this.pokemonList.forEach(function(pokemon) {
    var pokemonLi = $('<li></li>').addClass('pokemon-element');
    var pokemonImg = $('<img>').attr('src', 'assets/img/' + pokemon.name + '.gif');
    var pokemonName = $('<h3></h3>').text(pokemon.name);
    $(pokemonLi).append(pokemonImg).append(pokemonName);
    $('.pokemon-list').append(pokemonLi);
    $(pokemonLi).on('click', function(item) {
      if (this.pokemonElected.indexOf(pokemon)) {
        this.pokemonElected.push(pokemon);
        this.addPokemon(pokemonLi);
      } else {
        this.removePokemon(pokemonLi);
      }
    }.bind(this));
  }.bind(this));
}

CharactersSelector.prototype.addPokemon = function(clickedLi) {
  $(clickedLi).addClass('active-li');
  this.$pokeballContainer.append(this.$pokeballItem);
}

CharactersSelector.prototype.removePokemon = function(clickedLi) {
  $(clickedLi).removeClass('active-li');
  this.$pokeballItemSelector.remove();
}