var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Hero_mission;
import Vijay from "./human.js";
class Hero extends Vijay {
    constructor(htitle, fname, lname, spower) {
        super(spower);
        this.title = "default title";
        this.firstname = "";
        this.lastname = "";
        _Hero_mission.set(this, "my secret mission");
        this.title = htitle;
        this.firstname = fname;
        this.lastname = lname;
        console.log("constructor was called");
    }
    ;
    fullname() {
        return this.firstname + " " + this.lastname;
    }
    get mission() {
        return __classPrivateFieldGet(this, _Hero_mission, "f");
    }
    set mission(nmission) {
        __classPrivateFieldSet(this, _Hero_mission, nmission, "f");
    }
}
_Hero_mission = new WeakMap();
Hero.version = 1001;
;
export { Hero };
