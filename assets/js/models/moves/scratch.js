function Scratch() {
  Move.call(this,
  "Scratch",
  "./assets/img/scratch.png",
  "scratch",
  );
}

Scratch.prototype = Object.create(Move.prototype);