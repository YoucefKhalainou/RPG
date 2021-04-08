class Berzerker extends Character {

    constructor(hp = 8, mana = 0, dmg = 4, name = "Draven") {
        super(hp, mana, dmg, name);
    }

    rage(person, nb_of_attack) {
        this.hp -= 1;
        person.hp -= this.dmg + nb_of_attack;
    }
}