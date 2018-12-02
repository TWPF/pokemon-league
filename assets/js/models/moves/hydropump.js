function Hydropump() {
  Move.call(this,
  "Hydro pump",
  "./assets/img/hydropump.png",
  "hydro",
  );
}

Hydropump.prototype = Object.create(Move.prototype);