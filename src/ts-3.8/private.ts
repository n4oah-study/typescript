// https://github.com/tc39/proposal-class-fields/

class Person {
  private name: string
  #age: number
  
  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  greet() {
    console.log(`Hello ${this.name}이름에 ${this.#age}세`);
  }
}

let per: Person = new Person('호진', 22);
per.greet();

// per.name // 접근 불가
// per.#age // 접근 불가