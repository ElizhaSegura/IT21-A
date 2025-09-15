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
}
// const hero = new Hero("Thorin", 100, 10);

class Wizard extends Hero {
    useAbility() {
        console.log(`${this.name} casts... ilLuSi0n bLaAasT!!!`);
    }
}

//console.log(hero.getHealth());

class Witch extends Hero{
    constructor(name,health,attack,mana){
        super(name,health,attack);
        this.mana = mana;
}
  
    useAbility(){
        console.log(`${this.name} roars Eeeemeraaaald VooOooorrrtex!!!`);
    }
}

const wizard = new Wizard("Grand Magus", 100, 10);
wizard.useAbility();

const witch = new Witch("Elphaba", 80, 8, 50);
witch.useAbility();

