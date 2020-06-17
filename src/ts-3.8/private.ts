// https://github.com/tc39/proposal-class-fields/

class Person {
  private name: string // Typescript의 private 키워드 활용하여 (컴파일 / 코딩 중에만 검사 됨)
  #age: number // ES6의 # 으로 private 활용 (런타임 시에도 검사 됨)
  
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