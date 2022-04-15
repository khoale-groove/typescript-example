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
  getFirstElementAny(['groove', 'technology', 'com', 1]);
  getFirstElementAny([1, 2, 3, { a: { b: 'c' } }]);

  // generic
  function getFirstElementGeneric<T>(arr: T[]): T {
    return arr[0];
  }
}

// 2. Generic Interfaces and Classes

export function interfaceAndClass() {
  interface MyInterface<T> {
    field: T;
  }

  class MyClass<T> {
    field: T;
    constructor(field: T) {
      this.field = field;
    }
  }
}

// 3. Generic constraints

type PartialType<T> = {
  [P in keyof T]?: T[P];
};

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, 'a');
//   getProperty(x, 'm');

let y: PartialType<typeof x> = { c: 4, d: 3 };
