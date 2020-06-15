// Partial로 만든 뒤 필드를 추가할 수 있음 
type PartialWithNewMember<T> = {
  [P in keyof T]?: T[P];
} & { newMember: boolean }

interface iter {
  a: string,
  b: string;
};
type tp2 = PartialWithNewMember<iter>;
let tp2Let: tp2 = {
  a: 'asd',
  newMember: true
};

console.log('tp2Let', tp2Let);

// 이런식으로 타입 지정도 가능함
type Keys = 'option1' | 'option2';
type Flags = { [K in Keys]: boolean };

let keyofff: keyof any;
keyofff = 'a'
keyofff = 123;
keyofff = Symbol('key');

export {};