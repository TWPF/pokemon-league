function Gyarados(playerPosition) {
  Pokemon.call(this,
    "Gyarados",
    "./assets/img/gyarados.gif",
    "water",
    [new Bite(), new Icefang(), new Hydropump(), new Scaryface()],
    playerPosition || 1);
}
Gyarados.prototype = Object.create(Pokemon.prototype);