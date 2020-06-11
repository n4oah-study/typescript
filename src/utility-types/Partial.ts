/*
  Partial<T>

  T의 모든 프로포티를 선택적으로 만드는 타입을 구성함
*/

interface Todo {
  title: string;
  description: string;
}

// description은 not null이지만 Partial을 사용하면 구성 안 해도 됨
const notUseTitle: Partial<Todo> = {
  title: '안녕하세용',
  // age: 22 // error
}

console.log('notUseTitle', notUseTitle);

export {};