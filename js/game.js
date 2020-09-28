class Game{
    constructor(){

    }

    getState(){
        database.ref("gameState").on("value",(data)=>{
            gameState=data.val();
        })
    }

    update(state){
       database.ref("/").update({
           gameState:state,
       });
    }

    async start(){

        if(gameState===0){

            player=new Player();
            var playerCountref= await database.ref("playerCount").once("value");
            if(playerCountref.exists()){
                playerCount=playerCountref.val();
            }
            player.getCount();

            form = new Form();
            form.display();
        }
    }

    play(){

        form.hide();
        textSize(30);
        text("Game Start",120,100);
        Player.getPlayerInfo();
        if(allPlayers!==undefined){
            var yPosition =130;
            for (var i in allPlayers){
                if(i==="player"+player.index) fill("red");

                else fill("black");
                textSize(15);
                text(allPlayers[i].name+":"+allPlayers[i].distance, 120, yPosition);
                yPosition+=20
            }
        }
        if(keyIsDown(UP_ARROW)&& player.index!==null){

            player.distance+=10;
            player.update();
        }
    }
}