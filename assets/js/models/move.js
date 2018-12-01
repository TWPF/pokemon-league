function Move(name) {
  this.name = name;
  this.damage = this.randomDamage();
}

Move.prototype.randomDamage = function() {
  // Returns a damage between 10 and 35
  return Math.floor(Math.random() * 26) + 10;
}

