class Form{
    constructor(){

    }
    display(){
       var title = createElement('h1'); 
       title.html('car racing game');
       title.position(130,0);
       var input = createInput('name');
       input.position(130,160);
       var button = createButton('PLAY');
       button.position(250,200);
       var greeting = createElement('h2');
       button.mousePressed(function(){
           input.hide();
           button.hide();
           button.position(1000,1000);
           var name = input.value();
           playerCount++;
           player.updateName(name);
           player.updateCount(playerCount);
           greeting.html("hello!! " + name);
           greeting.position(130,160);
        
       });
    }
}