function Battle() {
  this.charizard = new Charizard(1);
  this.pikachu = new Pikachu(2);
}

Battle.prototype.start = function() {
  this.charizard.initialize();
  this.pikachu.initialize();
}



