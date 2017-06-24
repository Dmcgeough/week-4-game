var numberOfCharacters = $(".choice").length;

var attacker;

var characterList = {
	"name": ["Reaper", "Soldier 76", "McCree", "Tracer"],
	"health": [140, 130, 125, 120],
	"attack": [8, 6, 9, 8],
	"counter": [18, 20, 19, 18],
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
  	"health": 140,
  	"attack": 8,
  	"counter": 18,
  	attackBuff(){
  		return this.attack += attack;
  	
  	},
	"isOpponent": false,
	"isCharacter": false,
	"characterLock": false,},


    Soldier76 : {
  	"name": "Soldier76",
  	"health": 130,
  	"attack": 7,
  	"counter": 20,
  	attackBuff(){
  		return this.attack += attack;
 	},
 	"isOpponent": false,
	"isCharacter": false,
	"characterLock": false,},

    McCree : {
  	"name": "McCree",
  	"health": 125,
  	"attack": 9,
  	"counter": 19,
  	attackBuff(){
  		return this.attack += attack;
 	},
 	"isOpponent": false,
	"isCharacter": false,
	"characterLock": false,},

    Tracer : {
  	"name": "Tracer",
	"health": 130,
	"attack": 8,
	"counter": 18,
	attackBuff(){
  		return this.attack += attack;
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

}
	});

	$(".Attack").click(function() {

		var attackerName = $(".attacker").find(".choice").data("name");
		var opponentName = $(".opponent").find(".choice").data("name");

		console.log(attackerName, opponentName);

		characters[opponentName].health = characters[opponentName].health-characters[attackerName].attack;
		characters[attackerName].health = characters[attackerName].health-characters[opponentName].counter;
		characters[attackerName].attack = characters[attackerName].attack+characters[attackerName].attack;
		// characters[attackerName].health,characters[opponentName].health(
		$(".attacker").find(".HP").html(characters[attackerName].health);
		$(".opponent").find(".HP").html(characters[opponentName].health);

		if (characters[opponentName].health <= 0) {
			$(".opponent").empty();
			numberOfCharacters--
			if (numberOfCharacters===1) {
				alert("You Won!");
				location.reload();
			}
		};



		if (characters[attackerName].health <= 0) {
			$(".attacker").empty(); 
			alert("You Died!");
			location.reload();	
		};


	
	})

