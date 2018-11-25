function Battle(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.canvas.width = window.innerWidth;
  this.canvas.height = window.innerHeight;
  this.ctx = this.canvas.getContext('2d');


  this.charizard = new Charizard(this.ctx, 1);
  this.pikachu = new Pikachu(this.ctx, 2);
  this.bg = new BackgroundBattle(this.ctx);
  this.bgtitle = new BackgroundTitle(this.ctx);
}

Battle.prototype.start = function() {
  setInterval(function() {
    this.clear();
    this.draw();
  }.bind(this), DRAW_INTERVAL_MS);
}

Battle.prototype.draw = function() {
  this.bg.draw();
  this.bgtitle.draw();
  this.charizard.draw();
  this.pikachu.draw();
}

Battle.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
}



