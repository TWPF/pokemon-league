function Battle() {
  
  this.pokemon1 = new Charizard(1);
  this.pokemon2 = new Pikachu(1);
  this.pokemon3 = new Charizard(1);
  this.pokemon4 = new Pikachu(2);
  this.pokemon5 = new Charizard(2);
  this.pokemon6 = new Pikachu(2);
  this.player1 = new Player('Javi', 1, this.pokemon1, this.pokemon2, this.pokemon3);
  this.player2 = new Player('Marta', 2, this.pokemon4, this.pokemon5, this.pokemon6);

  this.turn = "player1";
}

Battle.prototype.start = function() {
  this.player1.initialize();
  this.player2.initialize();
  this.turnsGame();
}

Battle.prototype.turnsGame = function() {
  // Set Listeners
  PLAYER1_SELECTORS.forEach(function(selector, index) {
    $(selector).on("click", function() {
      if (this.turn === "player1") {
        this.clickAttackPokemon1(index);
        this.turn = "player2";
      }
    }.bind(this));
  }.bind(this));

  PLAYER2_SELECTORS.forEach(function(selector, index) {
    $(selector).on("click", function() {
      if (this.turn === "player2") {
        this.clickAttackPokemon2(index);
        this.turn = "player1";
      }
    }.bind(this));
  }.bind(this));
}


  Battle.prototype.clickAttackPokemon1 = function(numberAttack) {
      console.log(this.player1.pokemon);
      var pointsLife = this.player1.pokemon[0].attackPoints(numberAttack);
      this.player2.pokemon[0].receiveAttack(pointsLife);
      this.player1.pokemon[0].attackMovement(numberAttack);
      this.toggleActivePokemon();

    if(this.player2.pokemon[0].isAlive()) {      
      this.player2.pokemon[0].receiveMovement();
    } else {
      this.player2.deadPokemon();
      if (this.player2.pokemon.length === 0) {
          this.player2.losesBattle();
          this.player1.winsBattle();
      } else {
        setTimeout(function() {
          this.player2.changePokemon();
        }.bind(this), 1200);
      }
    }
  }
  
  Battle.prototype.clickAttackPokemon2 = function(numberAttack) { 
    console.log(this.player2.pokemon);
    var pointsLife = this.player2.pokemon[0].attackPoints(numberAttack);
    this.player1.pokemon[0].receiveAttack(pointsLife);
    this.player2.pokemon[0].attackMovement(numberAttack);
    this.toggleActivePokemon();

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

