// 1. basic

export function basic() {
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
  getFirstElementAny(['groove', 'technology', 'com', 1]); // => number
  getFirstElementAny([1, 2, 3, { a: { b: 'c' } }]);

  // generic
  function getFirstElementGeneric<Type>(arr: Type[]): Type {
    return arr[0];
  }

  const a = getFirstElementGeneric(['1', '2', 3]); 

}

// 2. Generic Interfaces and Classes

// 3. Generic constraints

type PartialType<T> = {
  [P in keyof T]?: T[P];
};

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key]; 
}

let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, 'a');
  getProperty(x, 'm');

let y: PartialType<typeof x> = { c: 4, d: 3, e: 3 };
