// 조건부 타입의 타입 추론

// CustomReturnType
type CustomReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

function anyFunc(a: string): string | number {
  return a + 'asd';
}

type a = CustomReturnType<typeof anyFunc>;

// Unpacked

type Unpacked<T> =
    T extends (infer U)[] ? U :
    T extends (...args: any[]) => infer U ? U :
    T extends Promise<infer U> ? U :
    T;

type T0 = Unpacked<string>;  // string
type T1 = Unpacked<string[]>;  // string
type T2 = Unpacked<() => string>;  // string
type T3 = Unpacked<Promise<string>>;  // string
type T4 = Unpacked<Promise<string>[]>;  // Promise<string>
type T5 = Unpacked<Unpacked<Promise<string>[]>>;  // string

// infer로 파라미터에 들어온 a, b의 타입을 추론할 수 있다.
type Foo<T> = T extends { a: infer U, b: infer U } ? U : never;
type T10 = Foo<{ a: string, b: string }>;  // string
type T11 = Foo<{ a: string, b: number }>;  // string | number



export {};