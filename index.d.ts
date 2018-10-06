interface Array<T> {
  Aggregate<T, U>(seed: U, accum: (memo: U, val: T) => U): U;
  Aggregate<T>(accum: (memo: T, val: T) => T): T;
  ElementAt<T>(index: number): T;
  Last<T>(): T;
  Max<number>(): number;
  Max<T>(xform: (x: T) => number): T;
  Prepend<T>(element: T): Array<T>;
  Reverse<T>(): Array<T>;
  Select<T, U>(xform: (x: T) => U): Array<U>;
  TakeWhile<T>(predicate: (X: T) => boolean): Array<T>;
  Union<T>(adder: Array<T>): Array<T>;
  Where<T>(predicate: (X: T) => boolean): Array<T>;
}
