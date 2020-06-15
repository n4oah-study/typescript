// ES6에 추가 됨
// primitive data type인 boolean null undefined number string 과 객체 object외의 타입 Symbol이 추가된 거임 (7번째)

let mySymbol = Symbol('symbol1');
let mySymbol2 = Symbol('symbol1');

const obj: any = {};
obj[mySymbol] = 'key가절대겹치지않음';
obj[mySymbol2] = 'key가절대겹치지않음2';
console.log(obj[mySymbol]) // key가절대겹치지않음
console.log(obj[mySymbol2]) // key가절대겹치지않음2
console.log(obj['symbol1']) // undefined

// iterator 일반 배열을 iterator화 할 수 있음
const arr = ['a', 'b', 'c'];
const iterator = arr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// for
// 전역 레지스트리에 key값이 있으면 반환 없으면 생성
let s1 = Symbol.for('foo') // 생성
let s2 = Symbol.for('foo') // 반환
console.log(s1 === s2) // true