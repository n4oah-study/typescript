# async/await
- Typescript는 await를 최상위라면 async함수 안에서 안 써도 됨
```ts
// asd.ts

// async함수 안이 아니여도 최상위기 때문에 허용
const res = await fetch(...);
```