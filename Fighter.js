class Fighter extends Character {

    constructor(hp = 12, mana = 40, dmg = 4, name = "Grace") {
        super(hp, mana, dmg, name);
    }

    darkVision(person) {
        person.hp -= 5;
        person.mana -= 20;
        this.dmg -= 2;
        //Protection

    }
}