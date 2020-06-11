/*
  Readonly<T>

  Y의 모든 프로퍼티를 readonly로 변경 함
*/

interface Todo {
  title: string;
};

const todo: Readonly<Todo> = {
  title: '안녕'
};

// todo.title = '하하'; error

export {};