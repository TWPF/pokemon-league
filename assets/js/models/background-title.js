function BackgroundTitle(ctx) {
  this.ctx = ctx;
  
  this.x = 320;
  this.y = 30;

  this.w = 600;
  this.h = 200;

  this.img = new Image();
  this.img.src = "./assets/img/title.png";
}

BackgroundTitle.prototype.draw = function() {
  this.ctx.drawImage(
    this.img,
    this.x,
    this.y,
    this.w,
    this.h
  );
}