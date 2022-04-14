//
// 1. basic
function basic() {
  //
  function getFirstElement(arr: string[]): string {
    return arr[0];
  }
  getFirstElement(['groove', 'technology', 'com']);

  //
  function getFirstElementNumber(arr: number[]): number {
    return arr[0];
  }
  getFirstElementNumber([1, 2, 3]);

  //
  function getFirstElementAny(arr: any[]): any {
    return arr[0];
  }
  getFirstElementAny(['groove', 'technology', 'com', 1]);
  getFirstElementAny([1, 2, 3, { a: { b: 'c' } }]);

  // generic
  function getFirstElementGeneric<T>(arr: T[]): T {
    return arr[0];
  }

  // parameter in generic constraints
  function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
  }
  let x = { a: 1, b: 2, c: 3, d: 4 };
  getProperty(x, 'a');
//   getProperty(x, 'm');
}

//  chi su dung generic khi
//  - du lieu can linh hoat (nhieu type)
//  - output lien quan input
