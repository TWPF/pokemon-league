function Battle() {
  
  this.pokemon1 = new Charizard(1);
  this.pokemon2 = new Pikachu(1);
  this.pokemon3 = new Charizard(1);
  this.pokemon4 = new Blastoise(2);
  this.pokemon5 = new Pikachu(2);
  this.pokemon6 = new Charizard(2);
  this.player1 = new Player('Javi', 1, this.pokemon1, this.pokemon2, this.pokemon3);
  this.player2 = new Player('Machine', 2, this.pokemon4, this.pokemon5, this.pokemon6);

}

Battle.prototype.start = function() {
  this.initializeBattleBoard();
  this.player1.initialize();
  this.player2.initializeMachine();
  this.turnsGame();
}

Battle.prototype.initializeBattleBoard = function() {
  $('#characters-selector').hide();
  $('#battle-elements').css('visibility', 'visible');
}

Battle.prototype.turnsGame = function() {
  // Set Listeners for player 1
  PLAYER1_SELECTORS.forEach(function(selector, index) {
    $(selector).on("click", function() {
        this.attackPokemon1(index);
        setTimeout(function() {
          var randomAttack = Math.floor(Math.random() * 3);
          this.attackPokemon2(randomAttack);
        }.bind(this), 2000);
    }.bind(this));
  }.bind(this));
}


  Battle.prototype.attackPokemon1 = function(numberAttack) {
    var pointsLife = this.player1.pokemon[0].attackPoints();
    this.player1.pokemon[0].attackMovement(numberAttack);
    this.player2.pokemon[0].receiveAttack(pointsLife);
    this.toggleActivePokemon();
    this.player1.pokemon[0].attackMessage(numberAttack, pointsLife);    
    
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
    var pointsLife = this.player2.pokemon[0].attackPoints();
    this.player2.pokemon[0].attackMovement(numberAttack);
    this.player1.pokemon[0].receiveAttack(pointsLife);
    this.toggleActivePokemon();
    this.player2.pokemon[0].attackMessage(numberAttack, pointsLife);
    
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
    if($('.player-panel-1').hasClass('panel-active')) {
      $('.player-panel-1').removeClass('panel-active');
      $('.player-panel-2').addClass('panel-active');
    } else {
      $('.player-panel-2').removeClass('panel-active');
      $('.player-panel-1').addClass('panel-active');
    }
  }

