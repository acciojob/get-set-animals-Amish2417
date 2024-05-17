//complete this code
class Animal {
	constructor (species){
		this._species = species;
	}
	get getspecies() {
       return this._species;
    }
	function makeSound(){
		console.log(`${this._species} makes a sound`);
	}
	
}

class Dog extends Animal {
	function bark(){
		console.log("woof");
	}
}

class Cat extends Animal {
	function purr(){
		console.log("purr");
	}
	
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
