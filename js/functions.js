//Essentially asks whether they want to play.



function toplay(){
		while(true){
		var play = prompt("Would you like to play Fortress? \n yes/no ").toUpperCase();
			
		if (play=='YES'){
			return true;
			break;
		}
		else if (play == 'NO'){
			confirm("Thanks for coming");
			return false;
			break;
		}
		else {
			confirm("huh?");
		}
	}
}


function beginning(){
		alert("You wake up...  \n\"where am I?\" you ask yourself. \nyou are in a room with great large golden rooms and massive golden pillars..");
		alert("\na woman with long blue hair walks up to you\n\" I'm Lucy, welcome to the Fortress.. I've been here. well since I can remember \n.. welcome to.. hell basically\".");
		var name=prompt("\n Lucy extends her hand to you and smiles at you with grey eyes \" what's your name \"?");
	    player.name=name;
	    alert("I am your guide " + player.name + " maybe you're the one who can free us from this place");
	    alert("" + player.name + ".. You have to defeat the leaders of this Fortress only then can we break free");
	    alert("I am tired and weak.. I am now imprisoned in this room else I will not live.. But you can free us, please I need you to.. Else I may give up searching for a hero");
	    do{
	    	var check = true;
	   		var ask=prompt("Do you have any questions?\n Put what number you would like to ask \n\n1. \"How did I get here?\" \n 2.\"What must I do?\"\n3.\"Please Let me out!\"\n 4.\"No\"").toUpperCase();
	    	switch (ask){
	    		case "1": case "1.":
	    		alert("I shouldn't tell you much.. but you've been summoned here by the elders.. they think you have the ability to save us..");
	    		break;
	    		case "2": case "2.":
	    		alert("You must go through the rooms one by one... to get to the bosses.. they are the ones who hold the fortress together and terrorize our world");
	    		break;
	    		case "3": case "3.":
	    		alert("I said the same thing... I am sorry that fate has dealt you these odds.. I hope that you can finally be the one who lives.. truly..");
	    		break;
	    		case "4": case "4.": case "NO" :
	    		check = false;
	    		break;
	    		default:
	    		alert("I am sorry, I did not hear you \n \n (Please use the given numbers)");
	    		break;
	    	}
	    }
	    while(check);
}

function starter(){

alert("There are two corridors for you to take to free us from this prison... ")
		var direction = prompt("Which would you like to take, the Path of the Dragon, to the left. \n or the path of the Brute to the right? \n \n (Put dragon, left or 1 for LEFT, or brute, right or 2 for right").toUpperCase();
		if (direction == "BRUTE" || direction =="2" || direction =="RIGHT")
		{
			alert("The brute is STRONG but weak minded.. you can kill him now go on and hope you can make it to him");
		}
		else if (direction == "BRUTE" || direction =="1" || direction =="LEFT"){
			alert("Nowi.. the dragon, she is fierce, but playful... she can be beaten if you're smart");
		}
}

function event(room){
	var eventnum = Math.floor(Math.random() * 3);
	switch (eventnum){
		case 0:
		prompt("You enter a " + roomcolour(room) + " room, you see a dark ghostly figure... it attacks you");
		break;
		case 1:
		prompt("You enter a " + roomcolour(room) + " room, you see a funny looking man with a top hat. He asks you a riddle");
		break;
		case 2:
		prompt("You enter a " + roomcolour(room) + "room, There is nothing in this room");
		break;
	}
}

function roomcolour(room){
	switch (room){
		case 0:
		//health + 20
		return "green"; 
		break;
		case 1:
		//attack + 5
		return "blue";
		break;
		case 2:
		player.redroom();
		return "red";
		break;

	}
}




