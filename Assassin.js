class Assassin extends Character {

    constructor(hp = 6, mana = 20, dmg = 6, name = "Carle") {
        super(hp, mana, dmg, name);
    }

    shadowHit(person) {
        person.hp -= 7;
        //Protection
        if (person.hp != 0) {
            this.hp -= 7;
        }
        this.mana -= 20;
    }
}