
  
var characters = {
	"name": ["Reaper", "Soldier 76", "McCree", "Tracer"],
	"health": [120, 110, 105, 100],
	"attack": [8, 6, 12, 12],
	"counter": [8, 10, 9, 8],
	attackBuff: function(attack) {
		return attack += attack;
	},
	"isOpponent": false,
	"isCharacter": false,
	"characterLock": false,
}





  //initialise variables
  var Reaper = {
  	"name": "Reaper",
  	"health": 120,
  	"attack": 8,
  	"counter": 8,
  	attackBuff(){
  		return this.attack += this.attack;
  	
  	},
	"isOpponent": false,
	"isCharacter": false,
	"characterLock": false,};


  var Soldier76 = {
  	"name": "Soldier76",
  	"health": 110,
  	"attack": 6,
  	"counter": 10,
  	attackBuff(){
  		return this.attack += this.attack;
 	},
 	"isOpponent": false,
	"isCharacter": false,
	"characterLock": false,};

  var McCree = {
  	"name": "McCree",
  	"health": 105,
  	"attack": 12,
  	"counter": 9,
  	attackBuff(){
  		return this.attack += this.attack;
 	},
 	"isOpponent": false,
	"isCharacter": false,
	"characterLock": false,};

  var Tracer = {
  	"name": "Tracer",
	"health": 100,
	"attack": 12,
	"counter": 8,
	attackBuff(){
  		return this.attack += this.attack;
	},
	"isOpponent": false,
	"isCharacter": false,
	"characterLock": false
	}; 

	
	$(".ReaperHP").html(Reaper.health);
	$(".Soldier76HP").html(Soldier76.health);
	$(".McCreeHP").html(McCree.health);
	$(".TracerHP").html(Tracer.health);
	
