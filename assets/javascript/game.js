
  
var characterList = {
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
var characters={
    Reaper : {
  	"name": "Reaper",
  	"health": 120,
  	"attack": 8,
  	"counter": 8,
  	attackBuff(){
  		return this.attack += 6;
  	
  	},
	"isOpponent": false,
	"isCharacter": false,
	"characterLock": false,},


    Soldier76 : {
  	"name": "Soldier76",
  	"health": 110,
  	"attack": 6,
  	"counter": 10,
  	attackBuff(){
  		return this.attack += 6;
 	},
 	"isOpponent": false,
	"isCharacter": false,
	"characterLock": false,},

    McCree : {
  	"name": "McCree",
  	"health": 105,
  	"attack": 12,
  	"counter": 9,
  	attackBuff(){
  		return this.attack += 6;
 	},
 	"isOpponent": false,
	"isCharacter": false,
	"characterLock": false,},

    Tracer : {
  	"name": "Tracer",
	"health": 100,
	"attack": 12,
	"counter": 8,
	attackBuff(){
  		return this.attack += 6;
	},
	"isOpponent": false,
	"isCharacter": false,
	"characterLock": false
	}}; 

	
	$(".ReaperHP").html(characters.Reaper.health);
	$(".Soldier76HP").html(characters.Soldier76.health);
	$(".McCreeHP").html(characters.McCree.health);
	$(".TracerHP").html(characters.Tracer.health);
	

	var attackerchosen=false

	$(".choice").click(function(){
			if (attackerchosen === false) {
  $(".attacker").append($(this))
  attackerchosen = true;
} else {
  $(".opponent").append($(this))
  attackerchosen = false;
}
	});

	$(".Attack").click(function(){
		var attackerName=$(".attacker").find(".choice").data("name")
		var opponentName=$(".opponent").find(".choice").data("name")
		console.log(attackerName, opponentName)
		characters[opponentName].health=characters[opponentName].health-characters[attackerName].attack
		characters[attackerName].health=characters[attackerName].health-characters[opponentName].counter
		characters[attackerName].attack= characters[attackerName].attack+6
		console.log(characters[attackerName].health,characters[opponentName].health)
	});

	




