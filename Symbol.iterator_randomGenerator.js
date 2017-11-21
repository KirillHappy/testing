let randomGenerator = {
  generate() {
    return this[Symbol.iterator]();
  },

  [Symbol.iterator]() {
    let count = 0;

    return {
      next() {
        let value = Math.ceil(Math.random() * 100);
        let done = count > 10;
        count += 1;
        return { value, done };
      }
    };
  }
};

// let random = randomGenerator.generate();
// console.log(random.next().value);

for (let random of randomGenerator) {
  console.log(random);
}