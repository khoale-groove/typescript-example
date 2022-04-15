// ./advanced/class.ts

type SexType = 'boy' | 'girl' | 'other';

class User {
  name: string;
  readonly sex: SexType;
  _birthday = new Date(1994, 1, 1);
  constructor(name: string, sex: SexType) {
    this.name = name;
    this.sex = sex;
  }
  updateBirthday(newDate: Date) {
    this._birthday = newDate;
  }
}

/**
 *  1. Contructors
 */
export function contructors() {
  class Admin extends User {}
  const admin = new Admin('ADMIN', 'boy');
  admin.name; // => "ADMIN"
  console.log(admin.name);
}

/**
 * 2. Readonly
 */
export function readonly() {
  const user = new User('userName', 'boy');
  user.name = 'otherName';
  user.name; // => "otherName"
  console.log(user.name);
  // user.age = 30;
}

/**
 * 3. methods
 */
export function updateBirthday() {
  const user = new User('userName', 'girl');
  user.updateBirthday(new Date(2000));
}
/**
 * 4. get, set
 *  https://stackoverflow.com/questions/12827266/get-and-set-in-typescript
 */

export function getSetMethods() {
  class Boy extends User {
    constructor(name: string) {
      super(name, 'boy');
    }

    get birthday() {
      return this._birthday;
    }

    set birthday(value: Date) {
      this._birthday = value;
      return;
    }
    updateBirthday() {}
  }
  const man = new Boy('Nam');
  man.birthday = new Date(2002);
}

/**
 * 5. Member Visibility
 * public
 * protected
 * private
 * static
 */
export function memberVisibility() {
  class Boy extends User {
    public firstName: string;
    private lastName: string;
    protected middleName: string;
    constructor(name: string) {
      super(name, 'boy');
      this.firstName = 'A';
      this.lastName = 'B';
      this.middleName = 'C';
    }
  }

  class Teenager extends Boy {
    getName() {
      // return this.firstName
      // return this.lastName
      // return this.middleName
    }
  }
  const teen = new Teenager('Nam');
  teen.firstName;
  // teen.lastName
  // teen.middleName
}

/**
 * 6. Generic Classes
 */
export function genericClasses() {
  //
  class Getting<Type> {
    content: Type;
    constructor(value: Type) {
      this.content = value;
    }
    printText() {
      console.log(this.content);
    }
  }

  const helloText = new Getting('hello world');
  const helloArray = new Getting(['hello', 'world']);
  const helloObject = new Getting({ hello: 'world' });
  helloText.printText();
  helloArray.printText();
  helloObject.printText();
}
