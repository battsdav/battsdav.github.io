var ship;
var bullet;
var space;
var enemy;
var enembullet;
var enembullets = [];
var shiptimer;
var enemTimer;
var time;
var timer;
var game;
var bullets = [];
var score = 0;
var enemscore = 0;
var gui;
var EPICMUSIC;



function checkCollisions(){
    if(bullet.collidesWith(enemy)){
        bullet.setBoundAction(DIE);
        score += 10;
    } 
    else(enembullet.collidesWith(ship));{
        enembullet.setBoundAction(DIE);
        enemscore += 10;
    }
}


function Finish(){
    if (score >= 3000){
        enemy.hide();
        alert(Player1_WIIINS);
    } else if (enemscore >= 3000){
        alert(Player2_WIIINS);
        ship.hide();
    }
}

function updateGUI(){
    gui.innerHTML = "Player 1 Score: " + score + "<br>"+ "Player 2 Score:" + enemscore;
}


function Bullet(){
    tBullet = new Sprite(game, 'laser.png', 500 ,500);
    
    tBullet.hide();
    
    tBullet.fire = function(){
        bullets.push(this);
        this.show();
        tBullet.setSpeed(35);
        this.setPosition(ship.x, ship.y);
        this.setAngle(ship.getImgAngle());
        this.setBoundAction(DIE);
    
        
    };
    return tBullet;
}

function enemBullet(){
    tenemBullet = new Sprite(game, 'redlaser.png', 500 ,500);
    
    tenemBullet.hide();
    
    tenemBullet.fire = function(){
        enembullets.push(this);
        this.show();
        tenemBullet.setSpeed(35);
        this.setPosition(enemy.x, enemy.y);
        this.setAngle(enemy.getImgAngle());
        this.setBoundAction(DIE);
    
        
    };
    return tenemBullet;
}

function Ship(){
    tShip = new Sprite(game, "ship.png", 350, 200);
    
    tShip.checkKeys = function(){
        if(keysDown[K_RIGHT]){
            this.changeXby(10);
        }
        if(keysDown[K_LEFT]){
            this.changeXby(-10);
        }
        if(keysDown[K_SPACE]){
            if(shiptimer.getElapsedTime() >= 0.1){
                bullet = new Bullet();
                bullet.fire();
                shiptimer.reset();
            }
        }
        this.addVector(this.getImgAngle(), (this.speed / 20));
    };
 return tShip;   
}  

function Enemy(){
    tEnemy = new Sprite(game, 'enemy.png', 50, 80);
    
    tEnemy.checkKeys = function(){
        
        if(keysDown[K_A]){
           this.changeXby(-10); 
        }
        
        if(keysDown[K_D]){
           this.changeXby(10); 
        }
        
        if(keysDown[K_S]){
           if(enemTimer.getElapsedTime() >= 0.1){
               enembullet = new enemBullet();
                enembullet.fire();
                enemTimer.reset();
           } 
        }
        this.addVector(this.getImgAngle(), (this.speed / 20));
    };
     return tEnemy;
}
function init(){
  gui = document.getElementById('gui');
  game = new Scene(1000,500);
  EPICMUSIC = new Sound("bensound-happyrock.mp3");
space = new Sprite(game, "blue.png", 1200, 900);
space.setSpeed(0);
timer = new Timer();
shiptimer = new Timer();
ship = new Ship();
ship.setPosition(game.width/2, 490);
ship.setSpeed(0);
ship.setImgAngle(0.1);
enemTimer = new Timer();
enemy = new Enemy();
enemy.setPosition(game.width/2, 180);
enemy.setSpeed(0);
enemy.setImgAngle(180);

game.start();
EPICMUSIC.play();
}

function update(){
    game.clear();
    Finish();
    updateGUI();
    space.update();
    
    

    
    ship.checkKeys();
    ship.update();
    
    bullets.forEach(function(element){
        element.update();
    });
    
    enemy.checkKeys();
    enemy.update();
    
    enembullets.forEach(function(element){
        element.update();
    });
    checkCollisions();
}