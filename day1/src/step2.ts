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

var count:number = 555;
var title:string = "Avenger";
// var guests:Array<string> = ["","55"];
// var guests:string[] = ["","55"];

// union type
var guests:string | string[] = ["hello","there"];
var agree:(number | boolean) = false;
var agreeagain:(number | boolean | string | Array<string> ) = false;



var users:object = {
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
