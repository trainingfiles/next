import  Vijay from "./human.js";

 class Hero extends Vijay{
            title = "default title"
            firstname = "";
            lastname = "";
            static version = 1001;
            #mission = "my secret mission";
            constructor(htitle:string, fname:string, lname:string, spower:string){
                super(spower);
                this.title = htitle;
                this.firstname = fname;
                this.lastname = lname;
                console.log("constructor was called");
            };
            fullname(){
                return this.firstname+" "+this.lastname;
            }
            get mission(){
                return this.#mission;
            }
            set mission(nmission){
                this.#mission = nmission;
            }
       };

export { Hero };