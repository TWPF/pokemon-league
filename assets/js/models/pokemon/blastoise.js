function Blastoise(playerPosition) {
  Pokemon.call(this,
    "Blastoise",
    "./assets/img/blastoise.gif",
    "water",
    [new Hydropump(), new Bite(), new Skullbash(), new Rapidspin()],
    playerPosition);
}

Blastoise.prototype = Object.create(Pokemon.prototype);