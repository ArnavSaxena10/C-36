class Player{
    constructor(){

        this.index=null;
        this.distance=0;
        this.name=null;
    }

    getCount(){
        database.ref("playerCount").on("value",(data)=>{
            playerCount=data.val();
            
        })
    }

    updateCount(count){
        database.ref("/").update({playerCount:count})
    }

    update(){
        database.ref("players/player"+this.index).update({

            name:this.name, distance:this.distance
        })
    }

    static getPlayerInfo(){
        database.ref("players").on("value",(data)=>{
            allPlayers= data.val();
        })
    }
}