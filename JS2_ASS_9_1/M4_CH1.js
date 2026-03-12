// Challenge 1 (Module 4)

class MyIterable {
  constructor() {
    this.elements = new Set();
  }

  add(element) {
    this.elements.add(element);    // duplicates ignored by Set
  }

  del(element) {
    this.elements.delete(element);
  }

  has(element) {
    return this.elements.has(element);
  }

  get length() {
    return this.elements.size;
  }

  *[Symbol.iterator]() {
    for (let el of this.elements) {
      yield el;
    }
  }
}

// test
let iterable = new MyIterable();
iterable.add(2);
iterable.add(5);
iterable.add(3);
iterable.add(2);
iterable.del(3);

console.log(iterable.length); // -> 2
console.log(iterable.has(2)); // -> true
console.log(iterable.has(3)); // -> false
console.log(...iterable);     // -> 2 5
