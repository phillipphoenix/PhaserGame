var Nomad = Nomad || {};
var timeCheck;

Nomad.Preloader = function () {};

Nomad.Preloader.prototype = {
    preload: function () {
        // Timer to go to the next state.
        timeCheck = this.game.time.now;
        // Load all sprites here!
        this.load.image('logo', 'img/backgrounds/oscillip.png');
    },
    create: function () {
        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
        logo.alpha = 0;
        
        this.game.add.tween(logo).to( { alpha: 1 }, 1500, Phaser.Easing.Linear.None, true, 500, 0, true);
        
        var title = this.game.add.text(0, 0, 'Nomad', {font:'55px Arial', fill: '#fff', boundsAlignH: 'center' }).setTextBounds(0, this.game.world.centerY-30, this.game.world.width, 40);
        title.alpha = 0;
        
        this.game.add.tween(title).to( { alpha: 1 }, 1500, Phaser.Easing.Linear.None, true, 3500, 0, true);
    },
    update: function () {
        // test for 3 second delay
        if (this.game.time.now - timeCheck > 7000) { //7000 fits.
            //3 seconds have elapsed, so safe to do something
            this.state.start('MainMenu');
        }
    }
};