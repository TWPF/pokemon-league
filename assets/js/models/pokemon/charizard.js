function Charizard(ctx, player) {
  Pokemon.call(this, ctx, "./assets/img/charizard.gif", player);
  this.name = "Charizard";
}

Charizard.prototype = Object.create(Pokemon.prototype);
