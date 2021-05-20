class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
    
    car1=createSprite(300,300,50,50)
    
    car1.addImage(car1Img)
    
    car2=createSprite(400,300,50,50)
    car2.addImage(car2Img)

    car3=createSprite(500,300,50,50)
    car3.addImage(car3Img)

    car4=createSprite(600,300,50,50)
    car4.addImage(car4Img)
   
    Cars=[car1,car2,car3,car4]
    
  }
  play(){
    form.hide()
    //textSize(30)
    //text("GAME START",120,100)
    Player.getPlayerInfo();

   if(allPlayers!==undefined){

    image(track,0,-displayHeight*4,displayWidth,displayHeight*4)
    //var display_position=130;
    var index=0
    var x=0
    var y

    for(var plr in allPlayers){
      index=index+1;
      x=x+300
      y=displayHeight-allPlayers[plr].distance
      Cars[index-1].x=x
      Cars[index-1].y=y
    
      if(index==player.index){
        Cars[index-1].shapeColor="red"
        camera.position.x=displayWidth/2
        camera.position.y=Cars[index-1].y
      }
      //if(plr==="player"+player.index)
        //fill("red")
        //else
         //fill("black");
    
        //display_position+=20;
        //textSize(15)
        //text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_position)
      }
    }
    if(keyIsDown(UP_ARROW) && player.index!==null){
      player.distance+=50;
      player.update()
    }
    drawSprites()
    
  }
}
