function Battle(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.canvas.width = window.innerWidth;
  this.canvas.height = window.innerHeight;
  this.ctx = this.canvas.getContext('2d');

  this.bg = new BackgroundBattle(this.ctx);
}

Battle.prototype.start = function() {
  setInterval(function() {
    this.clear();
    this.draw();
  }.bind(this), DRAW_INTERVAL_MS);

  audio.play();
}

Battle.prototype.draw = function() {
  this.bg.draw();
}

Battle.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
}



