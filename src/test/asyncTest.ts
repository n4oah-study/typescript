export async function asyncTestFunc() {
  return new Promise<string>((resolve, reject) => {
    resolve('hello world');
  });
}
