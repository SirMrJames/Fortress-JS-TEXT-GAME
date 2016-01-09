function Person(name) {
	this.name=name;
	this.a=0; // a section of fights
	this.b=0; // b section of fights
	this.c=0;
	this.level=1;
	this.health=100;
	this.death=0;
	this.redroom  = function(){
		this.health -= 15;
		if (this.health < 1)
			this.health = 1;
	}

	this.addhealth = function(health){
		this.health += health;
		if (this.health > 100)
			this.health = 100;
	}
	
	this.removehealth = function(health){
		this.health -= health;
	}

	this.addlevel = function(){
		this.level += 1;
	}
}
var player = new Person("default");

function enemy(a,b){
	this.health = a;
	this.level = b;
}