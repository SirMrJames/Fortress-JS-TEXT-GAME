
var player = new Person("default");
if (toplay() ==true){
	game();
}



function game(){
	if (player.name == "default")
	{
		beginning();
	}
	//more if statements to be added here

	if (player.a == 0 && player.b == 0){
		starter();
	}	
	var roomnumber = 0;
	while(roomnumber < 5){
		var room=Math.floor(Math.random() * 3);
		event(room);
		roomnumber+=1;
		if(player.health < 1)
			game();
	}
}