function Pokemon(name, imageSrc, type, movements, playerPosition) {
    this.name = name;
    this.imageSrc = imageSrc;
    this.playerPosition = playerPosition;
    this.ps = 100;
    this.type = type;
    this.movements = movements;
    this.isLeft = playerPosition === 1;

    this.$pokemonImg1 = $('#pokemon-img-1');
    this.$pokemonImg2 = $('#pokemon-img-2');
    this.$pokemonName1 = $('#pokemon-name-1');
    this.$pokemonName2 = $('#pokemon-name-2');
    this.$pokemonPS1 = $('#pokemon-ps-1');
    this.$pokemonPS2 = $('#pokemon-ps-2');
    this.$pokemonHealth1 = $('#pokemon-health-1');
    this.$pokemonHealth2 = $('#pokemon-health-2');

    this.$attack1 = $('#attack-1');
    this.$attack2 = $('#attack-2');

    this.$statusMessage = $('#status-message');

    this.$backgroundSound = $('#background-sound');
    this.$effectSound = $('#effect-sound');

    this.attackLeftSound = "assets/sounds/attack-left.mp3";
    this.attackRightSound = "assets/sounds/attack-right.mp3";
}   


// Initialize the Pokemon data

Pokemon.prototype.initialize = function() {
    this.setImage();
    this.setName();
    this.updateLife();
    this.setAttackButtons();
}

Pokemon.prototype.initializeMachine = function() {
    this.setImage();
    this.setName();
    this.updateLife();
}

Pokemon.prototype.setImage = function() {
    if(this.isLeft) {
        this.$pokemonImg1.removeClass('attack-right');
        this.$pokemonImg1.removeClass('receive-attack-left');
        this.$pokemonImg1.attr('src', this.imageSrc);
        this.$pokemonImg1.fadeIn(2000);
    } else {
        this.$pokemonImg1.removeClass('attack-left');
        this.$pokemonImg1.removeClass('receive-attack-right');
        this.$pokemonImg2.attr('src', this.imageSrc);
        this.$pokemonImg2.fadeIn(2000);
    }
}

Pokemon.prototype.setName = function() {
    if(this.isLeft) {
        this.$pokemonName1.text(this.name);
    } else {
        this.$pokemonName2.text(this.name);
    }
}

Pokemon.prototype.setPsPoints = function() {
    if(this.isLeft) {
        this.$pokemonPS1.text("Life: " + this.ps + "/100");
    } else {
        this.$pokemonPS2.text("Life: " + this.ps + "/100");
    }
}

Pokemon.prototype.setAttackButtons = function() {
        for (var i = 0; i < 4; i++) {
            $(PLAYER1_SELECTORS[i]).text(this.movements[i].name + "  " + this.movements[i].powerpoints + "/5");
            $(PLAYER1_SELECTORS[i]).removeClass('disabled');
        }
}

//END Initialize the Pokemon data



//Rendering logic

Pokemon.prototype.attackMovement = function(numberAttack) {
    if(this.isLeft) {
        if(!this.hasAnimation(numberAttack)) {
            this.$pokemonImg1.addClass('attack-basic-right');
            this.$attack1.addClass(this.movements[numberAttack].classAnimation + '-left');
            this.$attack1.attr('src', this.movements[numberAttack].imageSrc);
            setTimeout(function() {
                this.$pokemonImg1.removeClass('attack-basic-right');
                this.$attack1.removeClass(this.movements[numberAttack].classAnimation + '-left');
                this.$attack1.removeAttr('src');
                this.$effectSound.attr('src', this.attackLeftSound);
            }.bind(this), 1000);  
        } else {
            this.$pokemonImg1.addClass('attack-right');
            setTimeout(function() {
                this.$pokemonImg1.removeClass('attack-right');
                this.$effectSound.attr('src', this.attackLeftSound);
            }.bind(this), 1000);
        }
    } else {
        if(!this.hasAnimation(numberAttack)) {
            this.$pokemonImg2.addClass('attack-basic-left');
            this.$attack2.addClass(this.movements[numberAttack].classAnimation + '-right');
            this.$attack2.attr('src', this.movements[numberAttack].imageSrc);
            setTimeout(function() {
                this.$pokemonImg2.removeClass('attack-basic-left');
                this.$attack2.removeClass(this.movements[numberAttack].classAnimation + '-right');
                this.$attack2.removeAttr('src');
                this.$effectSound.attr('src', this.attackRightSound);
            }.bind(this), 1000);
        } else {
            this.$pokemonImg2.addClass('attack-left');
            setTimeout(function() {
                this.$pokemonImg2.removeClass('attack-left');
                this.$effectSound.attr('src', this.attackRightSound);
            }.bind(this), 1000);
        }
    }
}


Pokemon.prototype.receiveMovement = function(numberAttack) {
    if(this.isLeft) {
        this.$pokemonImg1.addClass('receive-attack-left');
        setTimeout(function() {
            this.$pokemonImg1.removeClass('receive-attack-left');
        }.bind(this), 1000);
        
    } else {
        this.$pokemonImg2.addClass('receive-attack-right');
        setTimeout(function() {
            this.$pokemonImg2.removeClass('receive-attack-right');
        }.bind(this), 1000);
    }
}

Pokemon.prototype.updateLife = function () {
    if(this.isLeft) {
        this.$pokemonPS1.text("Life: " + this.ps + "/100");
        this.$pokemonHealth1.attr("value", this.ps);
    } else {
        this.$pokemonPS2.text("Life: " + this.ps + "/100");
        this.$pokemonHealth2.attr("value", this.ps);
    }
}

Pokemon.prototype.updateAttackButton = function (numberAttack) {
    $(PLAYER1_SELECTORS[numberAttack]).text(this.movements[numberAttack].name + "  " + this.movements[numberAttack].powerpoints + "/5");
}



Pokemon.prototype.dissapearPokemon = function() {
    setTimeout(function() {
        if(this.isLeft) {
            this.$pokemonImg1.fadeOut();
        } else {
            this.$pokemonImg2.fadeOut();
        }
    }.bind(this), 500)
}

Pokemon.prototype.attackMessage = function(numberAttack, points, pointsType) {
    switch (pointsType) {
        case 0.5: this.$statusMessage.text(this.name + ' attacks with ' + this.movements[numberAttack].name + " and causes " + points + " points of damage. This attack is not very effective..");
        break;
        case 1: this.$statusMessage.text(this.name + ' attacks with ' + this.movements[numberAttack].name + " and causes " + points + " points of damage.");
        break;
        case 2: this.$statusMessage.text(this.name + ' attacks with ' + this.movements[numberAttack].name + " and causes " + points + " points of damage. This attack is very effective!");
        break;
        default: this.$statusMessage.text("");
        break;
    } 
}

//END Rendering logic


//Game logic

Pokemon.prototype.attackPoints = function(numberAttack) {
    this.movements[numberAttack].powerpoints--;
    return Math.floor(Math.random() * 35) + 10;
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

Pokemon.prototype.hasAnimation = function(numberAttack) {
    return this.movements[numberAttack].classAnimation === undefined;
}

Pokemon.prototype.checkPPAttack = function(numberAttack) {
    this.updateAttackButton(numberAttack);
    if(this.movements[numberAttack].powerpoints <= 0) {
        $(PLAYER1_SELECTORS[numberAttack]).addClass('disabled');
    }
}

Pokemon.prototype.valueTypePokemon = function(typeOfDefendedPokemon, numberAttack) {
    if (this.type === 'physic') {
        switch (typeOfDefendedPokemon) {
            case 'physic': return 0.5; break;
            case 'ice': return 1; break;
            case 'water': return 1; break;
            case 'fire': return 1; break;
            case 'flying': return 1; break;
            case 'dragon': return 1; break;
            case 'ghost': return 1; break;
            case 'electric': return 1; break;
            default: return 1; break;
        }
    }
    if (this.type === 'ice') {
        switch (typeOfDefendedPokemon) {
            case 'physic': return 1; break;
            case 'ice': return 0.5; break;
            case 'water': return 0.5; break;
            case 'fire': return 1; break;
            case 'flying': return 2; break;
            case 'dragon': return 2; break;
            case 'ghost': return 1; break;
            case 'electric': return 1; break;
            default: return 1; break;
        }
    }
    if (this.type === 'water') {
        switch (typeOfDefendedPokemon) {
            case 'physic': return 1; break;
            case 'ice': return 1; break;
            case 'water': return 0.5; break;
            case 'fire': return 2; break;
            case 'flying': return 1; break;
            case 'dragon': return 0.5; break;
            case 'ghost': return 1; break;
            case 'electric': return 1; break;
            default: return 1; break;
        }
    }
    if (this.type === 'fire') {
        switch (typeOfDefendedPokemon) {
            case 'physic': return 1; break;
            case 'ice': return 2; break;
            case 'water': return 0.5; break;
            case 'fire': return 0.5; break;
            case 'flying': return 1; break;
            case 'dragon': return 0.5; break;
            case 'ghost': return 1; break;
            case 'electric': return 1; break;
            default: return 1; break;
        }
    }
    if (this.type === 'flying') {
        switch (typeOfDefendedPokemon) {
            case 'physic': return 1; break;
            case 'ice': return 1; break;
            case 'water': return 1; break;
            case 'fire': return 1; break;
            case 'flying': return 1; break;
            case 'dragon': return 1; break;
            case 'ghost': return 1; break;
            case 'electric': return 0.5; break;
            default: return 1; break;
        }
    }
    if (this.type === 'dragon') {
        switch (typeOfDefendedPokemon) {
            case 'physic': return 1; break;
            case 'ice': return 1; break;
            case 'water': return 1; break;
            case 'fire': return 1; break;
            case 'flying': return 1; break;
            case 'dragon': return 2; break;
            case 'ghost': return 1; break;
            case 'electric': return 1; break;
            default: return 1; break;
        }
    }
    if (this.type === 'ghost') {
        switch (typeOfDefendedPokemon) {
            case 'physic': return 0.5; break;
            case 'ice': return 1; break;
            case 'water': return 1; break;
            case 'fire': return 1; break;
            case 'flying': return 1; break;
            case 'dragon': return 1; break;
            case 'ghost': return 2; break;
            case 'electric': return 1; break;
            default: return 1; break;
        }
    }
    if (this.type === 'electric') {
        switch (typeOfDefendedPokemon) {
            case 'physic': return 1; break;
            case 'ice': return 1; break;
            case 'water': return 2; break;
            case 'fire': return 1; break;
            case 'flying': return 2; break;
            case 'dragon': return 0.5; break;
            case 'ghost': return 1; break;
            case 'electric': return 0.5; break;
            default: return 1; break;
        }
    }
}

//END Game logic

