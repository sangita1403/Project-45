var track,player1;
var distplayer1 = 0;
var distplayer2 = 0;
var gameState = "start"

function preload(){
    track = loadImage("Images/track.jpg")
}

function setup(){
    var canvas = createCanvas(1000,windowHeight)
    player1 = createSprite(166,windowHeight+130,50,50)
    player2 = createSprite(854,windowHeight+130,50,50)
    player1.shapeColor="blue"
    player2.shapeColor="red"
    
}

function draw(){
    background("white");
    image(track,0,-windowHeight*2+290,1000,windowHeight*3)
    textSize(20);
    text("x:"+mouseX,50,windowHeight-200);
    text("y:"+mouseY,50,windowHeight-175);

    if(keyDown("DOWN_ARROW") && gameState === "start"){
        player1.y-=5
    }

    if(gameState === "start"){
        player2.velocityY = random(-2,-7)
    }
    
    camera.position.y = player1.y;
    distplayer1 = player1.y;
    distplayer2 = player2.y;
    console.log(distplayer1);
    console.log(player2.y);
    if(player1.y <= -850 ){
        player2.velocityY = 0;
        gameState = "end";
        textSize(30);
        text("Yay, you won!",500,-700);
    }
    
    if(player2.y <= -850){
        player2.velocityY = 0;
        gameState = "end";
        textSize(30);
        text("Opps, you lost try again",500,-700);
    }

    drawSprites();
}