class Paladin extends Character {

    constructor(hp = 16, mana = 160, dmg = 3, name = "Ulder ") {
        super(hp, mana, dmg, name);
    }

    healingLighting(person) {
        person.hp -= 4;
        this.hp += 5;
        this.mana -= 40;
    }
}