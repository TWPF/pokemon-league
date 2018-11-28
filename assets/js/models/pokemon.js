function Pokemon(name, imageSrc, type, movements, playerPosition) {
    this.name = name;
    this.imageSrc = imageSrc;
    this.playerPosition = playerPosition;
    this.ps = 100;
    this.type = type;
    this.movements = movements;
    this.isLeft = playerPosition === 1;
}   


// Initialize the Pokemon data

Pokemon.prototype.initialize = function() {
    this.setImage();
    this.setName();
    this.setPsPoints();
    this.setAttackButtons();
}

Pokemon.prototype.setImage = function() {
    if(this.isLeft) {
        $('#pokemon-img-1').attr('src', this.imageSrc);
    } else {
        $('#pokemon-img-2').attr('src', this.imageSrc);
    }
}

Pokemon.prototype.setName = function() {
    if(this.isLeft) {
        $('#pokemon-name-1').text(this.name);
    } else {
        $('#pokemon-name-2').text(this.name);
    }
}

Pokemon.prototype.setPsPoints = function() {
    if(this.isLeft) {
        $('#pokemon-ps-1').text("Life: " + this.ps + "/100");
    } else {
        $('#pokemon-ps-2').text("Life: " + this.ps + "/100");
    }
}

Pokemon.prototype.setAttackButtons = function() {
    if (this.isLeft) {
        for (var i = 0; i < 4; i++) {
            $(PLAYER1_SELECTORS[i]).text(this.movements[i].name);
        }
    } else {
        for (var i=0; i<4; i++) {
            $(PLAYER2_SELECTORS[i]).text(this.movements[i].name);
        }
    }
}

//END Initialize the Pokemon data



//Attacks

Pokemon.prototype.attackMovement = function(numberAttack) {
    if(this.isLeft) {
        setTimeout(function() {
            $('#pokemon-img-1').css("margin-right","5%");
        }, 1000);
        setTimeout(function() {
            $('#pokemon-img-1').css("margin-left","5%");
        }, 1000);
    } else {
        setTimeout(function() {
            $('#pokemon-img-2').css("margin-left","5%");
        }, 1000);
        setTimeout(function() {
            $('#pokemon-img-1').css("margin-right","5%");
        }, 1000);
    }  
}

Pokemon.prototype.attackPoints = function(numberAttack) {
    return this.movements[numberAttack].damage;
}

Pokemon.prototype.receiveAttack = function (pointsAttack) {
    this.ps -= pointsAttack;
    this.updateLife();
}

Pokemon.prototype.updateLife = function () {
    if(this.isLeft) {
        $('#pokemon-ps-1').text("Life: " + this.ps + "/100");
    } else {
        $('#pokemon-ps-2').text("Life: " + this.ps + "/100");
    }
}