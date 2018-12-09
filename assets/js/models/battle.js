function Battle(pokemonElected) {
  
  this.pokemon1 = pokemonElected[0];
  this.pokemon2 = pokemonElected[1];
  this.pokemon3 = pokemonElected[2];
  this.pokemon4 = new Lapras(2);
  this.pokemon5 = new Articuno(2);
  this.pokemon6 = new Mrmime(2);
  this.player1 = new Player('Javi', 1, this.pokemon1, this.pokemon2, this.pokemon3);
  this.player2 = new Player('Machine', 2, this.pokemon4, this.pokemon5, this.pokemon6);

  this.$startBackground = $('.start-background');
  this.$characterSelector = $('#characters-selector');
  this.$battleBoard = $('#battle-board');

  this.$playerPanel1 = $('.player-panel-1');
  this.$playerPanel2 = $('.player-panel-2');

  this.battleMusicSrc = "assets/sounds/battle.mp3";
  this.$backgroundSound = $('#background-sound');
}

Battle.prototype.start = function() {
  this.initializeBattleBoard();
  this.player1.initialize();
  this.player2.initializeMachine();
  this.turnsGame();
}

Battle.prototype.initializeBattleBoard = function() {
  this.$startBackground.remove();
  this.$battleBoard.fadeIn();
  this.loadBattleMusic();
}

Battle.prototype.loadBattleMusic = function() {
  this.$backgroundSound.attr('src', this.battleMusicSrc);
}

Battle.prototype.turnsGame = function() {
  // Set Listeners for player 1
  PLAYER1_SELECTORS.forEach(function(selector, index) {
    $(selector).on("click", function() {
      this.attackPokemon1(index);
      setTimeout(function() {
        var randomAttack = Math.floor(Math.random() * 3);
        this.attackPokemon2(randomAttack);
      }.bind(this), 3000);
    }.bind(this));
  }.bind(this));
}

Battle.prototype.attackPokemon1 = function(numberAttack) {
  this.blockAttackButtons();

  var pointsLife = this.player1.pokemon[0].attackPoints(numberAttack);
  var pointsType = this.player1.pokemon[0].valueTypePokemon(this.player2.pokemon[0].type, numberAttack);
  pointsLife *= pointsType;
  this.player1.pokemon[0].attackMovement(numberAttack);
  this.player2.pokemon[0].receiveAttack(pointsLife);
  this.toggleActivePokemon();
  this.player1.pokemon[0].attackMessage(numberAttack, pointsLife, pointsType); 

  this.player1.pokemon[0].checkPPAttack(numberAttack);

  if(this.player2.pokemon[0].isAlive()) {  
    this.player2.pokemon[0].receiveMovement();
  } else {
    this.player2.deadPokemon();
    if (this.player2.pokemon.length === 0) {
        this.player2.losesBattle();
        this.player1.winsBattle();
    } else {
      setTimeout(function() {
        this.player2.changeMachinePokemon();
      }.bind(this), 1200);
    }
  }
}

Battle.prototype.attackPokemon2 = function(numberAttack) { 
  var pointsLife = this.player2.pokemon[0].attackPoints(numberAttack);
  var pointsType = this.player2.pokemon[0].valueTypePokemon(this.player1.pokemon[0].type, numberAttack);
  pointsLife *= pointsType;
  this.player2.pokemon[0].attackMovement(numberAttack);
  this.player1.pokemon[0].receiveAttack(pointsLife);
  this.toggleActivePokemon();
  this.player2.pokemon[0].attackMessage(numberAttack, pointsLife, pointsType);
  
  if(this.player1.pokemon[0].isAlive()) { 
    this.player1.pokemon[0].receiveMovement();
  } else {
    this.player1.deadPokemon();
    if (this.player1.pokemon.length === 0) {
        this.player1.losesBattle();
        this.player2.winsBattle();
    } else {
      setTimeout(function() {
        this.player1.changePokemon();
      }.bind(this), 1200);
    }
  }
}

  Battle.prototype.toggleActivePokemon = function() {
    if(this.$playerPanel1.hasClass('panel-active')) {
      this.$playerPanel1.removeClass('panel-active');
      this.$playerPanel2.addClass('panel-active');
    } else {
      this.$playerPanel2.removeClass('panel-active');
      this.$playerPanel1.addClass('panel-active');
    }
  }

  Battle.prototype.blockAttackButtons = function() {
    PLAYER1_SELECTORS.forEach(function(selector) {
      $(selector).prop('disabled', true);
      setTimeout(function() {
        $(selector).prop('disabled', false);
      }, 3500);
    })
  }

