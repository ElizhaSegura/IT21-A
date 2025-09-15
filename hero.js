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

const wizard = new Wizard("Grand Magus", 100, 10);
wizard.useAbility();

