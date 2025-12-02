"use strict";
/*
        for(var count = 0; count < 10; count++){
            console.log(count);
        };
        console.log("out of loop : ",count);// ???
        console.log("=================");// ???
        console.log(window.count);// ???
        */
/*
        var
        let
        const
        */
/*
        console.log(user);
        user = "vijay";
        console.log(user);
        */
var count = 555;
var title = "Avenger";
// var guests:Array<string> = ["","55"];
// var guests:string[] = ["","55"];
// union type
var guests = ["hello", "there"];
var agree = false;
var agreeagain = false;
var users = {
    title: "Batman",
    power: 6,
};
function checkpower() {
    if (user.power > 5) {
        let temptitle = user.title;
        user.title = temptitle + " is strong";
        console.log(temptitle); // ???
    }
    // console.log(user.title);
}
checkpower();
