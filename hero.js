class Hero {
    #health;

    constructor(name, health, attack) {
        this.name = name;
        this.#health = health;
        this.attack = attack;
    }

    getHealth() {
        return this.#health;
    }

    getStats() {
        console.log(" \n ");
        console.log("Name: " + this.name);
        console.log("Health: " + this.#health);
        console.log("Attack: " + this.attack);
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


const Magus = new Wizard("Magus", 100, 10);
Magus.useAbility();
Magus.getStats();

const Elphaba= new Witch("Elphaba", 80, 8, 50);
Elphaba.useAbility(); 
Elphaba.getStats();


function performAbility(hero) {
    console.log("\n");
    hero.useAbility();
}


performAbility(Magus);

performAbility(Elphaba);

