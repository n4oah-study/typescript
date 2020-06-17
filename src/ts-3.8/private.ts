// https://github.com/tc39/proposal-class-fields/

class Person {
  #name: string
  
  constructor(name: string) {
    this.#name = name;
  }

  greet() {
    console.log(`Hello ${this.#name}`);
  }
}

let per: Person = new Person('호진');
per.greet();

// per.#name // 접근 불가