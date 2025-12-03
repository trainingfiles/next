// let promise = Promise.resolve("welcome to your life");
// let promise = Promise.reject("error message");

// promise.catch(err => console.log(err));

/* let promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(true){
            resolve("Promise was resolved")
        }
        else{
            reject("Promise was rejected")
        }
    }, 2000 )
});

promise
.then((res) => console.log(res))
.catch((err) => console.log(err))
.finally(() => console.log("promise is complete")) */

/* let promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(true){
            resolve("Promise was resolved")
        }
        else{
            reject("Promise was rejected")
        }
    }, 2000 )
}); */

/* 
promise
.then((res) => console.log(res),(err) => console.log(err)) 
*/

/* promise
.then(res => {
    console.log(res);
    return res.toUpperCase();
})
.then(res1 => {
    console.log(res1);
    return res1.length;
})
.then(res2 => {
    console.log(res2);
})
.catch( error => console.log(error));

 */

/* 
create an array of random numbers
use promise to return the array
in the first then display all the array
in the second then display values that are greater than 10
in the third then display sum of the values that are greater than 10
*/
/* 
let promise1 = ()=>{
    return new Promise<string>((resolve, reject)=>{
    setTimeout(()=>{
        if(false){
            resolve("response from first promise")
        }else{
            reject("error message from first promise")
        }
    },2000)
})
};

let promise2 = ()=>{
    return new Promise<string>((resolve, reject)=>{
    setTimeout(()=>{
        if(true){
            resolve("response from second promise")
        }else{
            reject("error message from second promise")
        }
    },1000)
})
};

let promise3 = ()=>{
    return new Promise<string>((resolve, reject)=>{
    setTimeout(()=>{
        if(true){
            resolve("response from third promise")
        }else{
            reject("error message from third promise")
        }
    },500)
})
}; */


/* 
Promise.all()// all promises must resolve
Promise.any()// any one of the promises must resolve
Promise.race()// which ever promise resolves first or errors first will be used
Promise.allSetled()// waits for all promises to either resolve or reject
*/

/* 
Promise.all([promise1(),promise2(),promise3()])
.then(res => {
    console.log(res)
})
.catch(err => {
    console.log(err)
}) 
*/

/* Promise.any([promise1(),promise2(),promise3()])
.then(res => {
    console.log(res)
})
.catch(err => {
    console.log(err)
})  */

/* Promise.race([promise1(),promise2(),promise3()])
.then(res => {
    console.log(res)
})
.catch(err => {
    console.log(err)
})  */

/*  Promise.allSettled([promise1(),promise2(),promise3()])
.then(res => {
    console.log(res)
})
.catch(err => {
    console.log(err)
})  */

let axios = {
    get : (url:string) => {
        return new Promise<string>((resolve, reject)=>{
            setTimeout(()=>{
                if(true){
                    resolve("promise was resolved")
                }else{
                    reject("Error from promise")
                }
            },2000)
        })
    }
};
/* 
axios.get("http://valtech.com")
.then(res => console.log(res))
.catch(error => console.log(error)) 
*/

let myfun = async function(){
    let res = await axios.get("http://valtech.com");
    console.log(res);
};

myfun();