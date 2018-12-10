function Sounds() {
  this.$backgroundSound = $('#background-sound');
  this.$effectSound = $('#effect-sound');

  this.$soundButton = $('.music-on');
  this.$effectsButton = $('.effects-on');

  this.$soundImg = $('.music-on img');
  this.$effectsImg = $('.effects-on img');

  this.isBackgroundOn = true;
  this.isEffectsOn = true;

  this.musicOnImgSrc = "assets/img/speaker-on.png";
  this.musicOffImgSrc = "assets/img/speaker-off.png";
  this.effectsOnImgSrc = "assets/img/fx-on.png";
  this.effectsOffImgSrc = "assets/img/fx-off.png";
}

Sounds.prototype.start = function() {
  this.setSound();
  this.setEffects();
}

Sounds.prototype.setSound = function() {
  this.$backgroundSound.animate({volume: 0.6}, 1000);
  this.$soundButton.click(function() {
    if(this.isBackgroundOn) {
      this.isBackgroundOn = false;
      this.$backgroundSound.prop('muted', true);
      this.$soundImg.attr('src', this.musicOffImgSrc);
    }
    else {
      this.isBackgroundOn = true;
      this.$backgroundSound.prop('muted', false);
      this.$soundImg.prop('src', this.musicOnImgSrc);
    }
  }.bind(this));
}

Sounds.prototype.setEffects = function() {
  this.$effectsButton.click(function() {
    if(this.isEffectsOn) {
      this.isEffectsOn = false;
      this.$effectSound.prop('muted', true);
      this.$effectsImg.attr('src', this.effectsOffImgSrc);
    }
    else {
      this.isEffectsOn = true;
      this.$effectSound.prop('muted', false);
      this.$effectsImg.attr('src', this.effectsOnImgSrc);
    }
  }.bind(this));
}


