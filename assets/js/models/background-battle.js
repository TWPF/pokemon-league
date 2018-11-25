function BackgroundBattle(ctx) {
  this.ctx = ctx;
  
  this.x = 0;
  this.y = 0;

  this.w = this.ctx.canvas.width;
  this.h = this.ctx.canvas.height;

  this.img = new Image();
  this.img.src = "https://vignette.wikia.nocookie.net/fantendo/images/5/51/Pok%C3%A9mon_Stadium_2.jpg/revision/latest?cb=20141221100214";
}

BackgroundBattle.prototype.draw = function() {
  this.ctx.drawImage(
    this.img,
    this.x,
    this.y,
    this.w,
    this.h
  );
}