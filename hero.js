class Hero {
    #health;

    constructor(name, health, attack) {
        this.name = name;
        this.#health = health;
        this.attack = attack;
        this.items = [];
    }

    getHealth() {
        return this.#health;
    }

    getName() {
        console.log(this.name);
    }

    getAttack() {
        console.log(this.attack);
    }

    getStats() {
        console.log(" \n ");
        console.log("Name: " + this.name);
        console.log("Health: " + this.#health);
        console.log("Attack: " + this.attack);
    }

    addItem(item) {
        this.items.push(item);
    }

    totalAttack() {
        return this.attack + this.items.reduce((sum, i) => sum + i.bonusAttack, 0);
    }

}
// const hero = new Hero("Thorin", 100, 10);

class Wizard extends Hero {
    useAbility() {
        console.log(`${this.name} casts... ilLuSi0n bLaAasT!!!`);
    }
}

//console.log(hero.getHealth());

class Witch extends Hero {
    constructor(name, health, attack, mana) {
        super(name, health, attack);
        this.mana = mana;
    }

    useAbility() {
        console.log(`${this.name} roars Eeeemeraaaald VooOooorrrtex!!!`);
    }
}

class Item {
    constructor(name, bonusAttack) {
        this.name = name;
        this.bonusAttack = bonusAttack;
    }
}

const staff = new Item("Staff", 5);
const broom = new Item("Broom", 3);

const Magus = new Wizard("Magus", 100, 10);

//Magus.getStats();
Magus.getName();
Magus.getAttack();

Magus.addItem(staff);
console.log(Magus.totalAttack());
Magus.addItem(staff);
console.log(Magus.totalAttack());
Magus.addItem(staff);
console.log(Magus.totalAttack());
Magus.addItem(staff);
console.log(Magus.totalAttack());


//const Magus = new Wizard("Magus", 100, 10);
//Magus.useAbility();
//Magus.getStats();

//const Elphaba= new Witch("Elphaba", 80, 8, 50);
//Elphaba.useAbility(); 
//Elphaba.getStats();


function performAbility(hero) {
    console.log("\n");
    hero.useAbility();
}


//performAbility(Magus);

//performAbility(Elphaba);

