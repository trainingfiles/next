"use strict";
var avengers = {
    title: "Batman",
    power: 5,
    city: "Gotham",
    price: 11,
};
var { title: avengertitle, power: avengerpower, city: avengercity, price: avengerprice, } = avengers;
console.log(avengerprice);
avengerprice = "$" + avengerprice;
console.log(avengerprice);
console.log(avengers.price);
