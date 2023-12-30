"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee2_id;
Object.defineProperty(exports, "__esModule", { value: true });
;
class Employee2 {
    constructor(id, name, address) {
        _Employee2_id.set(this, void 0);
        this.address = address;
        this.name = name;
        __classPrivateFieldSet(this, _Employee2_id, id, "f");
    }
    get empId() {
        return __classPrivateFieldGet(this, _Employee2_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Employee2_id, id, "f");
    }
    static getEmployeeCount() {
        return 50;
    }
    getNameWithAddress() {
        return `${this.name} stays at ${this.address}`;
    }
}
_Employee2_id = new WeakMap();
let john2 = new Employee2(1, "John", { street: "ABC", city: "Kampala", state: "Central", pin: "37827" });
let user = { name: "John", id: 1, email: "" };
let employee = { name: "John", id: 1, email: "", salary: 1000 };
// object destructuring
let { name: userName, email: userEmail } = { name: "Emma", id: 2, email: "emma@gmail.com" };
// Array destructuring
let [user1, user2, ...restUsers] = [
    { name: "Emma", id: 1, email: "emma@gmail.com" },
    { name: "Emma1", id: 2, email: "emma1@gmail.com" },
    { name: "Emma2", id: 3, email: "emma2@gmail.com" },
    { name: "Emma2", id: 3, email: "emma2@gmail.com" }
];
console.log(user1);
console.log(user2);
console.log(restUsers);
