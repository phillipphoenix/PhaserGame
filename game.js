var Nomad = Nomad || {};

Nomad.Game = function() {};

Nomad.Game.prototype = {
    create: function() {
        matchPosition = this.game.input.keyboard.addKey(Phaser.Keyboard.ONE);
        matchColor = this.game.input.keyboard.addKey(Phaser.Keyboard.TWO);
        matchBoth = this.game.input.keyboard.addKey(Phaser.Keyboard.THREE);

        this.game.add.text(this.game.width-600, 605, 'N-Back Training', {font: '18px Arial', fill: '#fff'});
        this.game.add.text(this.game.width-600, 625, 'Press 1 to match position, Press 2 to match color, Press 3 to Match both', {font: '18px Arial', fill: '#fff'});
        scoreText = this.game.add.text(this.game.width-600, 650, scoreString + Score, {font: '18px Arial', fill: '#fff'});
        messageText = this.game.add.text(this.game.width-600, 675, rightOrWrong, {font: '18px Arial', fill: '#fff'});
        nbackText = this.game.add.text(this.game.width-600, 750, nback_text + nBack_frames, {font: '18px Arial', fill: '#fff'});
    },
    update: function() {
        if (this.game.time.now > timer) {
            messageText.text = "";
            randomTile = this.game.rnd.integerInRange(0, 8);
            randomColor = this.game.rnd.integerInRange(0,1);
        
            if (nBack_colors == 2) {
                if (randomColor == 0) {
                    color = "red";
                } else {
                    color = "blue";
                }
            } else {
                color = "red";
            };
                
            frame = color + randomTile.toString();  
            this.game.add.tileSprite(0,0,600,600,frame);

            gameState.color = color;
            gameState.position = randomTile;

            gameWorld.push({color: gameState.color, position: gameState.position});
        
            timer = this.game.time.now + 2000;
            gameFrame += 1;

        } else if (this.game.time.now > timer - 100) {
            this.game.add.tileSprite(0,0,600,600,'grid');
        }
        matchPosition.onDown.add(this.checkMatchPosition, this); 
        matchColor.onDown.add(this.checkMatchColor, this);
        matchBoth.onDown.add(this.checkMatchBoth, this);
    },
    checkMatchPosition: function() {
        if (gameFrame > nBack_frames) {    
            if (gameWorld[gameFrame-1].position == gameWorld[gameFrame-nBack_frames-1].position) {
                Score += 1;
                scoreText.text = scoreString + Score;
                messageText.text = "Correct!";
            } else {
                messageText.text = "Not a match!";
            }
        }
    },
    checkMatchColor: function() {
        if (gameFrame > nBack_frames) {    
            if (gameWorld[gameFrame-1].color == gameWorld[gameFrame-nBack_frames-1].color) {
                Score += 1;
                scoreText.text = scoreString + Score;
                messageText.text = "Correct!";
            } else {
                messageText.text = "Not a match!";
            }        
        }
    },
    checkMatchBoth: function() {
        if (gameFrame > nBack_frames) {    
            if (gameWorld[gameFrame-1].position == gameWorld[gameFrame-nBack_frames-1].position) {
                if (gameWorld[gameFrame-1].color == gameWorld[gameFrame-nBack_frames-1].color) {
                    Score += 1;
                    scoreText.text = scoreString + Score;
                    messageText.text = "Correct!";
                }            
            } else {
                messageText.text = "Not a match!";
            }
        }
    }
};