class Character {

    constructor(hp, dmg, name) {
        this.hp = hp;
        this.dmg = dmg;
        this.name = name;
    };

    status = "playing";

    takeDamage(damage) {
        this.hp -= damage
        if (this.hp <= 0) {
            this.hp = 0
            this.status = "loser"
        }
        return damage
    };

    dealDamage(victim) {

        if (victim.status !== "loser" && this.status == "playing") {
            const dg = victim.takeDamage(this.dmg)
            console.log(`${this.name} is attacking 💥${victim.name}. He deals him 😱😱😱 ${dg} damages. ${victim.name} got ${victim.hp} lifepoints left 🤯🤯🤯`)
            if (victim.hp == 0) {
                console.log(`${victim.name} is died 💀💀💀`)
                victim.status = "loser"
            }
        }
    };

}