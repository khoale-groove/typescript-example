// move from a less precise type to a more precise type

type Animal = {
  name: string;
  legs: number | undefined;
  canDoSomething: false;
};

// function addLeg(animal: Animal) {
//   animal.legs = animal.legs + 1;
// }

/**
 * typeof
 */
function anotherMethodAddLeg(animal: Animal) {
  if (typeof animal.legs === 'number') {
    animal.legs = animal.legs + 1;
  }
}

/**
 * in
 */
type Person = {
  name: string;
  legs?: number;
  firstName: string;
  canDoSomething: true;
};

function addLeg1(thing: Person | Animal) {
  if ('firstName' in thing) {
    thing.legs = 2;
    // thing.firstName = 'name'
  }
}

/**
 * never
 */

function detect(thing: Person | Animal) {
  switch (thing.canDoSomething) {
    case true:
      return 'person';
    case false:
      return 'animal';
    default:
      const anything: never = thing;
      return anything;
  }
}
