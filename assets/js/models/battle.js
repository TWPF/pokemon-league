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
  for (var i=0; i<4; i++) {
    $(PLAYER1_SELECTORS[i]).click(function() {
      this.clickAttackPokemon1(i);
    }.bind(this));
  }

    $("#option-5").on("click", function() {
      this.clickAttackPokemon2(0);      
    }.bind(this));
     $("#option-6").on("click", function() {
      this.clickAttackPokemon2(1);      
    }.bind(this));
     $("#option-7").on("click", function() {
      this.clickAttackPokemon2(2);      
    }.bind(this));
     $("#option-8").on("click", function() {
      this.clickAttackPokemon2(3);      
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




