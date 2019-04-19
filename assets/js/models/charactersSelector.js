function CharactersSelector() {
  this.pokemonList = [
    new Blastoise(),
    new Charizard(),
    new Gengar(),
    new Pikachu(),
    new Dodrio(),
    new Alakazam(),
    new Dragonite(),
    new Gyarados(),
    new Lapras(),
    new Magikarp(),
    new Mrmime(),
    new Articuno(),
    new Moltres(),
    new Zapdos()
  ];
  this.pokemonElected = [];

  this.$startScreen = $("#start-screen");
  this.$characterSelector = $("#characters-selector");
  this.$loadingScreen = $(".loading-screen");
  this.$battleBoard = $("#battle-board");

  this.$pokeballContainer = $(".pokeball-container");
  this.$pokeballItem = '<img src="assets/img/pokeball.png" />';

  this.$confirmationStart = $(".confirmation-start");
  this.$chooseAgainButton = $("#select-again");
  this.$startCharacterButton = $("#selector-start");

  this.$effectSound = $("#effect-sound");
  this.selectSoundSrc = "assets/sounds/selection.mp3";
}

CharactersSelector.prototype.start = function() {
  this.initializeCharacterScreen();
};

CharactersSelector.prototype.initializeCharacterScreen = function() {
  this.$startScreen.hide();
  this.$loadingScreen.hide();
  this.$battleBoard.hide();
  this.$confirmationStart.hide();
  this.$characterSelector.fadeIn();
  this.pokemonList.forEach(
    function(pokemon) {
      var pokemonLi = $("<li></li>").addClass("pokemon-element");
      var pokemonImg = $("<img>").attr("src", pokemon.imageSrc);
      var pokemonName = $("<h3></h3>").text(pokemon.name);
      $(pokemonLi)
        .append(pokemonImg)
        .append(pokemonName);
      $(".pokemon-list").append(pokemonLi);
      $(pokemonLi).click(
        function(item) {
          if (this.pokemonElected.includes(pokemon)) {
            this.removePokemon(pokemonLi, pokemon);
          } else {
            this.addPokemon(pokemonLi, pokemon);
          }
        }.bind(this)
      );
    }.bind(this)
  );
};

CharactersSelector.prototype.addPokemon = function(clickedLi, pokemon) {
  $(clickedLi).addClass("active-li");
  this.$effectSound.attr("src", this.selectSoundSrc);
  this.$pokeballContainer.append(this.$pokeballItem);
  this.pokemonElected.push(pokemon);
  if (this.checkIfThereIs3Pokemon()) {
    this.initializeConfirmScreen();
  }
};

CharactersSelector.prototype.removePokemon = function(clickedLi, pokemon) {
  $(clickedLi).removeClass("active-li");
  $(".pokeball-container img:last-child").remove();
  this.pokemonElected.splice(this.pokemonElected.indexOf(pokemon), 1);
};

CharactersSelector.prototype.checkIfThereIs3Pokemon = function() {
  return this.pokemonElected.length === 3;
};

CharactersSelector.prototype.initializeConfirmScreen = function() {
  this.pokemonElected.forEach(function(pokemon) {
    var pokemonLi = $("<li></li>").addClass("pokemon-element-elected");
    var pokemonImg = $("<img>").attr(
      "src",
      "assets/img/" + pokemon.name + ".gif"
    );
    var pokemonName = $("<h3></h3>").text(pokemon.name);
    $(pokemonLi)
      .append(pokemonImg)
      .append(pokemonName);
    $(".pokemon-elected").append(pokemonLi);
  });
  this.$confirmationStart.show();
  this.setConfirmationListeners();
};

CharactersSelector.prototype.setConfirmationListeners = function() {
  this.$chooseAgainButton.click(
    function() {
      this.chooseAgain();
    }.bind(this)
  );
  this.$startCharacterButton.click(
    function() {
      this.startGame();
    }.bind(this)
  );
};

CharactersSelector.prototype.chooseAgain = function() {
  this.emptyPokemonElectedArray();
  $(".pokemon-list li").removeClass("active-li");
  $(".pokeball-container img").remove();
  this.$confirmationStart.hide();
  $(".pokemon-elected li").remove();
};

CharactersSelector.prototype.emptyPokemonElectedArray = function() {
  while (this.pokemonElected.length > 0) {
    this.pokemonElected.pop();
  }
};

CharactersSelector.prototype.startGame = function() {
  setTimeout(
    function() {
      var battle = new Battle(this.pokemonElected);
      battle.start();
    }.bind(this),
    1000
  );
};
