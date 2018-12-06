function Gengar(playerPosition) {
  Pokemon.call(this, 
    "Gengar", 
    "./assets/img/gengar.gif", 
    "ghost", 
    [new Nightmare(), new Move("Hex"), new Thunderstorm(), new Shadowball()],
     playerPosition || 1);
}

Gengar.prototype = Object.create(Pokemon.prototype);