var Nomad = Nomad || {};

//	Create your Phaser game and inject it into the gameContainer div.
//	We did it in a window.onload event, but you can do it anywhere (requireJS load, anonymous function, jQuery dom ready, - whatever floats your boat)
Nomad.game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameContainer');

//	Add the States your game has.
//	You don't have to do this in the html, it could be done in your Boot state too, but for simplicity I'll keep it here.
Nomad.game.state.add('Preloader', Nomad.Preloader);
Nomad.game.state.add('MainMenu', Nomad.MainMenu);
Nomad.game.state.add('Game', Nomad.Game);

//	Now start the Preloader state.
Nomad.game.state.start('Preloader');