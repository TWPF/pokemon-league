function Pokemon(ctx, src, player) {
    this.ctx = ctx;
    player === 1 ? this.x = this.ctx.canvas.width * 0.20 : this.x = this.ctx.canvas.width * 0.65;
    this.y = this.ctx.canvas.height * 0.42;
    this.w = this.ctx.canvas.width / 6;
    this.h = this.ctx.canvas.height / 4;
    this.sprite = new Image();
    this.sprite.src = src;

}

Pokemon.prototype.draw = function() {
    this.ctx.drawImage(
        this.sprite,
        this.x,
        this.y,
        this.w,
        this.h
    );
};
