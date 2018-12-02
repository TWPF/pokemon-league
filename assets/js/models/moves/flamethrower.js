function Flamethrower() {
  Move.call(this,
  "Flamethrower",
  "./assets/img/flame.png",
  "flame",
  );
}

Flamethrower.prototype = Object.create(Move.prototype);