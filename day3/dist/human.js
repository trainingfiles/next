class Human1 {
    constructor(superPower) {
        this.superPower = superPower;
        this.canWalk = "I can walk";
    }
}
class Human2 {
    constructor(superPower) {
        this.superPower = superPower;
        this.canWalk = "I can walk";
    }
}
// export { Human }; // named export 
// export { Human as Hum }; // alias named export 
export default Human1; // default export 
