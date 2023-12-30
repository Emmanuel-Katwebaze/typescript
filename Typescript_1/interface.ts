interface Address {
    street: string;
    city: string;
    state: string;
    pin: string
};

class Employee2 {
    #id: number;
    protected name: string;
    address: Address;
  
    constructor(id: number, name: string, address: Address) {
      this.address = address;
      this.name = name;
      this.#id = id;
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

  let john2 = new Employee2(1, "John", { street: "ABC", city: "Kampala", state: "Central",pin: "37827" });

  export interface User {
    name: string;
    age?: number;
    id: number;
    email: string;
}


  let user: User = {name : "John", id: 1, email : ""};

  // Extending Interfaces
  interface Employees extends User {
    salary: number;
  }

  let employee: Employees = {name: "John", id: 1, email: "", salary: 1000};


  export interface Login {
    Login(): User;
  }

    // object destructuring
    let {name : userName, email : userEmail} : User = {name : "Emma", id: 2, email : "emma@gmail.com"};

    // Array destructuring
    let [user1, user2, ...restUsers]: User[] = [
        {name : "Emma", id: 1, email : "emma@gmail.com"}, 
        {name : "Emma1", id: 2, email : "emma1@gmail.com"},
        {name : "Emma2", id: 3, email : "emma2@gmail.com"},
        {name : "Emma2", id: 3, email : "emma2@gmail.com"}
    ];

    console.log(user1);
    console.log(user2);
    console.log(restUsers);

    //let result = restUsers.filter(user => user.id > 3);

    // when writing backend code in typescript it's advisable to use classes and not interfaces because interfaces do not exist when compiled to JS so you will lose the types.

    // Decorators
    // have to enable experimental decorators in tsconfig.json for them to work

    // @Component({})
    // class Component {
    //     constructor(public name: string){}
    // }