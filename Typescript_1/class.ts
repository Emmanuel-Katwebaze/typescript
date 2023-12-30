import {Login, User} from "./interface";

// can also use import * as UserLogin from "./interface";
// then use UserLogin.Login and UserLogin.User

class Employee implements Login{
  #id: number;
  protected name: string;
  address: string;

  constructor(id: number, name: string, address: string) {
    this.address = address;
    this.name = name;
    this.#id = id;
  }
  Login(): User {
    return {name : "John", id: 1, email : ""};
  }

  get empId() : number {
    return this.#id;
  }

  set empId(id: number) {
    this.#id = id;
  }

  static getEmployeeCount(): number {
    return 50;
  }

  getNameWithAddress(): string {
    return `${this.name} stays at ${this.address}`;
  }
}
Employee.getEmployeeCount();

let john = new Employee(1, "John", "Highway 71");

john.empId = 100;

console.log(john.empId);

// john.id - can't access because #id is private

// john.name - can only access inside scope of parent class or child class

// john.id = 1;
// john.name = "John";
// john.address = "Highway 71";
console.log(john);

class Manager extends Employee {
    constructor(id: number, name: string, address: string){
        super(id, name, address);
    }

    getNameWithAddress(): string {
        return `${this.name} is a manager at ${this.address}`;
      }
}

let address = john.getNameWithAddress()
console.log(address);

let mike = new Manager(2, "Mike", "Cherise Drive");

console.log(mike.getNameWithAddress());