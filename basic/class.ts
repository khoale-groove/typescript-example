class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
class Admin extends User {}
/**
 *  1. Contructors
 */

export function contructors() {
  const admin = new Admin("ADMIN");
  admin.name; // => "ADMIN"
}

/**
 * 2. Readonly
 */
const user = new User("userName");
user.name = "otherName";
user.name; // => "otherName"
console.log(user.name);
