//starts html canvas* and adds the main loop.
var scene;
var ball;

function init(){
    
    //creates a scene object, which has its own properties and actions
    scene = new Scene();
    scene.setSize(300,300)
    //create a sprite object to representour ball
    ball = new Sprite(scene, "http://aharrisbooks.net/h5g/h5g_5/redBall.png" ,50, 50);
    ball.setMoveAngle(60);
    ball.setSpeed(3);
    ball.setBoundAction(BOUNCE);
    
    scene.start();
}

function update(){
    scene.clear();
    ball.update();
    
}