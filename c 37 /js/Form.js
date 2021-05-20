class Form {
  constructor() {
    this.button = createButton('Play');
     this.input = createInput("Name");
     this.greeting = createElement('h3');
  }
  hide(){
    this.greeting.hide()
    this.input.hide()
    this.button.hide()
    
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2-40,100);
    
    
    
    this.input.position(displayWidth/2-150,displayHeight/2-100);
    this.button.position(displayWidth/2-150,displayHeight/2-50);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
    
      player.name = this.input.value();
      
      playerCount+=1;

      player.index=playerCount;
      
      player.update()
      player.updateCount(playerCount);
      
      this.greeting.html("Hello " + player.name )
      this.greeting.position(displayWidth/2-130,displayHeight-100)
    });

  }
}
