class Human {
  public canWalk = "I can walk";
  constructor(public superPower:string){
    // empty
  }
}

class Hero extends Human {
  // public
  static version = 1001;
  private mission = "my secret mission";
  constructor(public title:string, public firstname:string, public lastname:string, spower:string) {
    super(spower);
    console.log("constructor was called");
  }
  fullname():string {
    return this.firstname + " " + this.lastname;
  }
  get accessMission() {
    return this.mission;
  }
  set accessMission(nmission:string) {
    this.mission = nmission;
  }
}

let hero = new Hero("Batman", "Bruce", "Wayne", "i can fly");
console.log(hero.title);
console.log(hero.fullname());
console.log(hero.accessMission);
hero.accessMission = "save the world";
console.log(hero.accessMission);
console.log(Hero.version); // 1001
console.log(hero.canWalk); //
console.log(hero.superPower); //
