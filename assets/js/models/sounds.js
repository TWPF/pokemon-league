function Sounds() {
  this.sounds = [
    'start.mp3',
    'battle.mp3'
  ];
  this.$soundBotton = $('.music-on');
}

Sounds.prototype.play = function(track) {
  new Audio("assets/sounds/" + this.sounds[track]).play();
}

