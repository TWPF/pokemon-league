function Battle() {
  
  this.pokemon1 = new Charizard(1);
  this.pokemon2 = new Pikachu(2);
  this.player1 = new Player('Javi', this.pokemon1, 1);
  this.player2 = new Player('Marta', this.pokemon2, 2);
  
}

Battle.prototype.start = function() {
  this.player1.initialize();
  this.player2.initialize();
  this.turnsGame();
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



Battle.prototype.turnsGame = function() {
  // starts1 (activamos listeners player1 y cuando pulse uno, desactivamos)
  // pokemon2 is alive? No, pokemon muerto
  // Sí, seguimos

  // player2 attacks (activamos listeners player2 y cuando pulse uno, desactivamos)
  // pokemon1 is alive? No, pokemon muerto
  // Sí, seguimos

  PLAYER1_SELECTORS.forEach(function(selector, index) {
    $(selector).on("click", function() {
      this.clickAttackPokemon1(index);
      this.offListenersPlayer1();
    }.bind(this));
  }.bind(this));

  PLAYER2_SELECTORS.forEach(function(selector, index) {
    $(selector).on("click", function() {
      this.clickAttackPokemon2(index);
      this.offListenersPlayer2();
    }.bind(this));
  }.bind(this));

}

Battle.prototype.offListenersPlayer1 = function() {
  PLAYER1_SELECTORS.forEach(function(selector, index) {
    $(selector).off("click");
  }.bind(this));
}

Battle.prototype.offListenersPlayer2 = function() {
  PLAYER2_SELECTORS.forEach(function(selector, index) {
    $(selector).off("click");
  }.bind(this));
}

