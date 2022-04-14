/**
 *  1. type aliases
 *  a name for any type
 */

export function defineTypeAliases() {
  let pet: 'cat';
  //   pet = 'dog';
  //
  type petType = 'cat' | 'dog';
  let pet2: petType = 'cat';

  type location = {
    x: number;
    y: number;
  };

  type identify = number | string;
  type handleEvent = (e: string) => void;
  type handleEventWithoutParam = () => void;

  //   const handle: handleEvent = (a: number) => {};
  //   const handle: handleEvent = (a: string) => {};
}

/**
 * 2. Interfaces
 * a way to name an object type
 *
 */
export function defineInterfaces() {
  interface location {
    x: number;
    y: number;
  }

  interface location {
    // x: string;
    dx: number;
    dy?: number;
  }

  const pointA: location = {
    x: 1,
    y: 1,
    dx: 1,
  };
}

// Differences Between Type Aliases and Interfaces
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
