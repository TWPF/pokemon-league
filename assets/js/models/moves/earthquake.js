function Earthquake() {
  Move.call(this,
  "Earthquake",
  undefined,
  undefined,
  );
}

Earthquake.prototype = Object.create(Move.prototype);