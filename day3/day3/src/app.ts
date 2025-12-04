import { Hero } from "./hero.js";

let hero = new Hero("Batman","Bruce","Wayne","i can fly");
console.log(hero.title);
console.log(hero.fullname());
console.log(hero.mission);
hero.mission = "save the world";
console.log(hero.mission);
// console.log(hero.version);// no response
console.log(Hero.version);// 1001
console.log(hero.canWalk);//  
console.log(hero.superPower);//  