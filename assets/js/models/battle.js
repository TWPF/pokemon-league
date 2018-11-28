function Battle() {
  this.pokemon1 = new Charizard(1);
  this.pokemon2 = new Pikachu(2);
}

Battle.prototype.start = function() {
  this.pokemon1.initialize();
  this.pokemon2.initialize();
  this.setListeners();
}

Battle.prototype.setListeners = function() {
  PLAYER1_SELECTORS.forEach(function(selector, index) {
    $(selector).click(function() {
      this.clickAttackPokemon1(index);
    }.bind(this));
  }.bind(this));
  PLAYER2_SELECTORS.forEach(function(selector, index) {
    $(selector).click(function() {
      this.clickAttackPokemon2(index);
    }.bind(this));
  }.bind(this));
}

Battle.prototype.clickAttackPokemon1 = function(numberAttack) {
  // this.pokemon1.attackMovement(numberAttack);
  var pointsLife = this.pokemon1.attackPoints(numberAttack);
  this.pokemon2.receiveAttack(pointsLife);
}

Battle.prototype.clickAttackPokemon2 = function(numberAttack) {
  // this.pokemon2.attackMovement(numberAttack);
  var pointsLife = this.pokemon2.attackPoints(numberAttack);
  this.pokemon1.receiveAttack(pointsLife);
}




