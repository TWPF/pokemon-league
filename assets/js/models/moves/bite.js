function Bite() {
  Move.call(this,
  "Bite",
  "./assets/img/bite.png",
  "bite",
  );
}

Bite.prototype = Object.create(Move.prototype);