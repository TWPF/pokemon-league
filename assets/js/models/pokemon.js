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
    this.updateLife();
    this.setAttackButtons();
}

Pokemon.prototype.setImage = function() {
    if(this.isLeft) {
        $('#pokemon-img-1').removeClass('attack-right');
        $('#pokemon-img-1').removeClass('receive-attack-left');
        $('#pokemon-img-1').attr('src', this.imageSrc);
        $('#pokemon-img-1').fadeIn();
    } else {
        $('#pokemon-img-1').removeClass('attack-left');
        $('#pokemon-img-1').removeClass('receive-attack-right');
        $('#pokemon-img-2').attr('src', this.imageSrc);
        $('#pokemon-img-2').fadeIn();
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



//Rendering logic

Pokemon.prototype.attackMovement = function(numberAttack) {
    if(this.isLeft) {
        $('#pokemon-img-1').addClass('attack-right');
        setTimeout(function() {
            $('#pokemon-img-1').removeClass('attack-right');
        }, 1000);
        
    } else {
        $('#pokemon-img-2').addClass('attack-left');
        setTimeout(function() {
            $('#pokemon-img-2').removeClass('attack-left');
        }, 1000);
    }
}

Pokemon.prototype.receiveMovement = function(numberAttack) {
    if(this.isLeft) {
        $('#pokemon-img-1').addClass('receive-attack-left');
        setTimeout(function() {
            $('#pokemon-img-1').removeClass('receive-attack-left');
        }, 1000);
        
    } else {
        $('#pokemon-img-2').addClass('receive-attack-right');
        setTimeout(function() {
            $('#pokemon-img-2').removeClass('receive-attack-right');
        }, 1000);
    }
}



Pokemon.prototype.updateLife = function () {
    if(this.isLeft) {
        $('#pokemon-ps-1').text("Life: " + this.ps + "/100");
        $('#pokemon-health-1').attr("value", this.ps);
    } else {
        $('#pokemon-ps-2').text("Life: " + this.ps + "/100");
        $('#pokemon-health-2').attr("value", this.ps);
    }
}

Pokemon.prototype.dissapearPokemon = function() {
    setTimeout(function() {
        if(this.isLeft) {
            $('#pokemon-img-1').fadeOut();
        } else {
            $('#pokemon-img-2').fadeOut();
        }
    }.bind(this), 1000)
}

//END Rendering logic


//Game logic

Pokemon.prototype.attackPoints = function(numberAttack) {
    return this.movements[numberAttack].damage;
}

Pokemon.prototype.receiveAttack = function (pointsAttack) {
    if (pointsAttack >= this.ps) {
        this.isDead();
    } else {
    this.ps -= pointsAttack;
    this.updateLife();
    }
}

Pokemon.prototype.isAlive = function() {
    return this.ps > 0;
}

Pokemon.prototype.isDead = function() {
    this.ps = 0;
    this.updateLife();
}

//END Game logic

