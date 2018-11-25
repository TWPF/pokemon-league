function Pikachu(ctx, player) {
  Pokemon.call(this, ctx, "./assets/img/pikachu.gif", player);
  this.name = "Pikachu";
}

Pikachu.prototype = Object.create(Pokemon.prototype);
