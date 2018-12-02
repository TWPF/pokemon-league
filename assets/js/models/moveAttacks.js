function Bite() {
  Move.call(this,
  "Bite",
  "./assets/img/bite.png",
  "bite",
  );
}

Bite.prototype = Object.create(Move.prototype);


function Hydropump() {
  Move.call(this,
  "Hydro pump",
  "./assets/img/hydropump.png",
  "hydro",
  );
}

Hydropump.prototype = Object.create(Move.prototype);


function Flamethrower() {
  Move.call(this,
  "Flamethrower",
  "./assets/img/flame.png",
  "flame",
  );
}

Flamethrower.prototype = Object.create(Move.prototype);


function Scratch() {
  Move.call(this,
  "Scratch",
  "./assets/img/scratch.png",
  "scratch",
  );
}

Scratch.prototype = Object.create(Move.prototype);


function Inferno() {
  Move.call(this,
  "Inferno",
  "./assets/img/flame.png",
  "flame",
  );
}

Inferno.prototype = Object.create(Move.prototype);


function Thunderbolt() {
  Move.call(this,
  "Thunderbolt",
  "./assets/img/thunderbolt.png",
  "thunderbolt",
  );
}

Thunderbolt.prototype = Object.create(Move.prototype);


function Thunderstorm() {
  Move.call(this,
  "Thunder Storm",
  "./assets/img/thunderstorm.png",
  "thunderstorm",
  );
}

Thunderstorm.prototype = Object.create(Move.prototype);