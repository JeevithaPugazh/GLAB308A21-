const adventurer = {
    name : "Robin",
    health : 10,
    inventory : ["sword","portion","artifact"]
}

// console.log(adventurer.inventory[0]);
// console.log(adventurer.inventory[1]);
// console.log(adventurer.inventory[2]);
// create a loop that logs each item in Robin’s inventory.
// adventurer.inventory.forEach((item)=>console.log(item));
adventurer.companion = {
    name : "Leo",
    type: "Cat"

}
// console.log(adventurer.companion);
adventurer.companion.companion = {
name : "Frank",
type : "Flea",
inventory:["small hat","sunglasses"]
}
// console.log(adventurer)
adventurer.roll=function(mod = 0){
const result = Math.floor(Math.random()*20)+1 + mod;
console.log(`${this.name} rolled a ${result}.`)
}

// adventurer.roll();
// adventurer.roll();
// adventurer.roll();

class Character{
    constructor(name){
        this.name = name,
        this.health = 100,
        this.inventory = []
    }
    roll(mod = 0){
        const result = Math.floor(Math.random()*20)+1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
    
}

// const robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];

// robin.roll();
// robin.companion.roll()
// robin.companion.companion.roll();

class Adventurer extends Character{
    constructor(name,role){
        super(name);
        this.role = role;
        this.level = 1;
        this.inventory.push("bedroll", "50 gold coin");
    }

    scout(){
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
    rest(){
        console.log(`${this.name} is resting and regaining health.`);
        this.health = 100;
    }
}

class Companion extends Character{
    constructor(name,type){
        super(name);
        this.type = type
    }
    assist(){
        console.log(`${this.name} cheers on the team! "We've got this!"`)
    }
}

const robin = new Adventurer("Robin","Rogue");
robin.inventory.push("sword","potion", "artifact");

const leo = new Companion("Leo","Cat");
const frank = new Companion("Frank","Flea");
frank.inventory = ["small hat","sunglasses"];

leo.companion = frank;
robin.companion = leo;

// console.log(robin);
// console.log(robin.companion);
console.log(robin.companion.companion);

