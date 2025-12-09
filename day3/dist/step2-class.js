class Human {
    constructor(superPower) {
        this.superPower = superPower;
        this.canWalk = "I can walk";
        // empty
    }
}
class Hero extends Human {
    constructor(title, firstname, lastname, spower) {
        super(spower);
        this.title = title;
        this.firstname = firstname;
        this.lastname = lastname;
        this.mission = "my secret mission";
        console.log("constructor was called");
    }
    fullname() {
        return this.firstname + " " + this.lastname;
    }
    get accessMission() {
        return this.mission;
    }
    set accessMission(nmission) {
        this.mission = nmission;
    }
}
// public
Hero.version = 1001;
let hero = new Hero("Batman", "Bruce", "Wayne", "i can fly");
console.log(hero.title);
console.log(hero.fullname());
console.log(hero.accessMission);
hero.accessMission = "save the world";
console.log(hero.accessMission);
console.log(Hero.version); // 1001
console.log(hero.canWalk); //
console.log(hero.superPower); //
