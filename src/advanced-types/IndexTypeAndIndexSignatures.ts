// 인덱스 타입과 인덱스 시그니처 (Index types and index signatures)

interface Dict<T> {
  [key: string]: T;
};

let keys: keyof Dict<string>; // string | number
let value: Dict<number>['foo'] // number