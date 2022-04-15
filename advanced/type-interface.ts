/**
 *  1. type aliases
 *  a name for any type
 */

export function defineTypeAliases() {
  let pet: 'cat';
  //   pet = 'dog';
  //
  type petType = 'cat' | 'dog'; 

  type location = {
    x: number;
    y: number;
  };

  type identify = number | string;
  type handleEvent = (e: string) => void;
  type handleEventWithoutParam = () => void;

    const dog: string = 'dog';
    let pet2: petType = dog as 'dog';

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
  const pointA: location = {
    x: 2,
    y: 2
  };

  type location2 = {
    x: number;
    y: number;
  }

}

// Differences Between Type Aliases and Interfaces

//  Extending via intersections
() => {

  type animal = {
    name: string;
  };
  type propertyAnimal  = {
     speed: number;
     name: number;
  }


  type pet = animal & propertyAnimal;

  const dog: pet  = {
    name: 'a',
    
  }


  // const cat: pet = {
  //   name: 'cat',
  //   speed: 1,
  // };
};
// Extending
{
  interface animal {
    name: string;
  }

  interface pet extends animal {
    speed: number;
  }
  const cat: pet = {
    name: 'cat',
    speed: 1,
  };
}

// Adding new fields to an existing interface
{
  interface location {
    x: number;
    y: number;
  }

  interface location {
    dx: number;
    dy?: number;
  }
  const newLocation: location = {
    x: 1,
    y: 1,
    dx: 1,
  };
}
