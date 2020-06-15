/*
  교차 타입 (Intersection Types)

  - 여러 타입을 하나로 결합함

*/
enum AnimalType {
  LION,
  DOG,
  CAT
}

interface Person {
  name: string,
  age: number
}

interface Animal {
  type: AnimalType
}

const person: Person & Animal = {
  age: 1,
  name: 'aa',
  type: AnimalType.DOG
};

console.log('person', person);

export {};