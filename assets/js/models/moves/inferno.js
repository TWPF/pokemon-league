function Inferno() {
  Move.call(this,
  "Inferno",
  "./assets/img/flame.png",
  "flame",
  );
}

Inferno.prototype = Object.create(Move.prototype);