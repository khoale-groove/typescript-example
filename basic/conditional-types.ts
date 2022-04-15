// Conditional Types

// 1.
interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;
type Example2 = RegExp extends Animal ? number : string;

// 2.
interface IdLabel {
  id: number;
}
interface NameLabel {
  name: string;
}

declare function createLabel(id: number): IdLabel;
declare function createLabel(name: string): NameLabel;
declare function createLabel(nameOrId: string | number): IdLabel | NameLabel;
declare function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  throw 'unimplemented';
}
