function Battle() {
  
  this.pokemon1 = new Charizard(1);
  this.pokemon2 = new Pikachu(2);
  this.player1 = new Player('Javi', this.pokemon1, 1);
  this.player2 = new Player('Marta', this.pokemon2, 2);

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
    this.pokemon1.attackMovement(numberAttack);
    var pointsLife = this.pokemon1.attackPoints(numberAttack);
    this.pokemon2.receiveAttack(pointsLife);
  }
  
  Battle.prototype.clickAttackPokemon2 = function(numberAttack) {
    this.pokemon2.attackMovement(numberAttack);
    var pointsLife = this.pokemon2.attackPoints(numberAttack);
    this.pokemon1.receiveAttack(pointsLife);
  }

