var Nomad = Nomad || {};

Nomad.MainMenu = function() {};

Nomad.MainMenu.prototype = {
    create: function() {
        this.game.add.text(0, 0, 'Nomad', {font:'60px Arial', fill: '#fff', boundsAlignH: 'center' }).setTextBounds(0, 50, this.game.world.width, 40);
        
        play_button = this.game.add.button(16, 500, 'Play', this.startGame, this);
    },
    update: function() {
        
    },
    startGame: function () {
        this.state.start('Game');
    }
};