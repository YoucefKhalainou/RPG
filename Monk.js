class Monk extends Character {

    constructor(hp = 8, mana = 200, dmg = 2, name = "Moana") {
        super(hp, mana, dmg, name);
    }

    heal() {
        this.hp += 8;
        this.mana -= 25;
    }
}