interface UserInterface {
  name: string;
  email: string;
  age: number;
  register();
  payInvoice();
}

class User implements UserInterface {
  private name: string;
  private email: string;
  protected age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log("User created : " + this.name);
  }

  register() {
    console.log(this.name + " is registered");
  }

  payInvoice() {
    console.log(this.name + " is paid invoice");
  }
}

const john = new User("Brandon Ha", "john@gmail.com", 2);

john.register();

class Member extends User {
  id: number;

  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }

  payInvoice() {
    super.payInvoice();
  }
}

let mike = new Member(12, "mike", "mike@gmail.com", 23);
mike.payInvoice();
