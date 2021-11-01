var gun,gunan;
var target,targetImg,targetGroup,target2,target3;
var l,lImg,la;
var backImg,backImg2;
var isDestroyed = false;
var score = 0
l = 3

function preload(){
    gunan = loadImage("k.png")
    targetImg = loadImage("t.png")
    backImg = loadImage("background.png")
    gsound = loadSound("M1887.mp3")
    target2 = loadImage("c.png")
    target3 = loadImage("orange.png")
    backImg2 = loadImage("p.jpg")
    lImg = loadImage("life.png")
}
function setup() {
    createCanvas(1500, 750);

   
    

    gun = createSprite(100,670,30,40)
    gun.addImage(gunan)
    gun.scale = 0.2

    target = createSprite(60,200,50,70)
    target.addImage(targetImg)
    target.scale = 0.1
    target.velocityY = 4

    targetGroup = new Group()
  }
  
  function draw() {
    if(score<100){
      background( backImg);
    }else{
      background( backImg2);
    }
   
    fill("red")
    textSize(40)
    text(score,1200,50)
    text(l,40,50)
    image(lImg,20,50,25,25)
    if(keyDown("left")){
        gun.x = gun.x-30
    }
    if(keyDown("right")){
        gun.x = gun.x+30
    }
    
    if(target.y >600 ){
        gun.visible = false
        gameOver()
    }
    rtarget();
    rla();
   // target.overlap(bulGroup, function(collector, collected) {
       
        //collected is the sprite in the group collectibles that triggered
        //the event
       // collected.remove();
     // });
     if(target.isTouching(gun)){
         console.log("www")
         target.visible=false
        isDestroyed = true
     }
    drawSprites();
  }
  function rtarget(){
  
     if( isDestroyed){
         x = random(100,1500)
         y = random(50,400)
         target = createSprite(x,y,50,70)
          
          var rand = Math.round(random(1,4));
          switch(rand) {
            case 1:target.addImage(targetImg);
                   target.scale = 0.1
                    break;
            case 2: target.addImage(target2);
                  target.scale = 0.2
                    break;
            case 3:target.addImage(target3);
                   target.scale = 0.1
                    break;
           
            default: break;
          }
          
          target.velocityY = +(4 + score/50);
          score += 10
          isDestroyed = false
     }
  }
  function rla(){
    if (frameCount % 400 === 0) {
      x = random(100,1500)
         y = random(50,400)
      la = createSprite(x,y,50,70)
      la.addImage(lImg)
    la.velocityY = 4
    la.scale = 0.2
    }
  }
  function gameOver() {
    swal(
      {
        title: `Game Over!!!`,
        text: "Thanks for playing!!",
        imageUrl:
          "https://e7.pngegg.com/pngimages/752/485/png-clipart-ajin-demi-human-kei-nagai-anime-%E4%BA%9A%E4%BA%BA-manga-anime-monochrome-cartoon.png",
        imageSize: "150x150",
        confirmButtonText: "Play Again"
      },
      function(isConfirm) {
        if (isConfirm) {
          location.reload();
        }
      }
    );
  }
  

  