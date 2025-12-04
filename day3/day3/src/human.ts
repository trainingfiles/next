class Human1 {
  public canWalk = "I can walk";
  constructor(public superPower:string){ }
}

class Human2 {
  public canWalk = "I can walk";
  constructor(public superPower:string){ }
}

// export { Human }; // named export 
// export { Human as Hum }; // alias named export 
export default Human1; // default export 