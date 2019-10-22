class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = Math.floor(Math.random(1000) * 100);
        this.sprite = 'images/enemy-bug.png';
    }
    update(dt) {
        this.x += this.speed * dt;
        if (this.x > 500) {
            this.x = -50;
        }

        if (player.x < this.x + 75 &&
            player.x + 75 > this.x &&
            player.y < this.y + 50 &&
            50 + player.y > this.y) {
            player.x = 200;
            player.y = 405;
        }
        
        if (player.y == -10) {
            player.x = 200;
            player.y = 405;
        }
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }


}



let allEnemies = [];

let enemy1 = new Enemy(0, 60);
let enemy2 = new Enemy(0, 140);
let enemy3 = new Enemy(0, 225);

allEnemies.push(enemy1, enemy2, enemy3);



class Player {
    constructor(x, y) {
        this.sprite = 'images/char-boy.png';
        this.x = x;
        this.y = y;
    }
    
    update(dt) {
        
    }
    
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    
    
    handleInput(key) {
        switch (key) {

            case 'up':
                if (this.y > 0) this.y -= 83;
                break;

            case 'down':
                if (this.y < 405) this.y += 83;
                break;

            case 'left':
                if (this.x > 0) this.x -= 101;
                break;

            case 'right':
                if (this.x < 400) this.x += 101;
                break;
        }
    }


}



let player = new Player(200, 405);


document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
