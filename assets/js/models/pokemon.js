function Pokemon(src, type, movements, player) {
    //player === 1 ? this.x = this.ctx.canvas.width * 0.20 : this.x = this.ctx.canvas.width * 0.65;

    this.src = src;
    this.player = player;
    this.ps = 100;
    this.type = type;
    this.movements = movements;
}

Pokemon.prototype.setAttackListeners = function() {
    if (this.player === 1) {
        for (var i = 0; i < 4; i++) {
            $(PLAYER1_SELECTORS[i]).text(this.movements[i].name);
        }
    } else {
        for (var i=0; i<4; i++) {
            $(PLAYER2_SELECTORS[i]).text(this.movements[i].name);
        }
    }
}

Pokemon.prototype.attackClick = function(nameAttack) {

}
