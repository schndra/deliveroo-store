const { faker } = require("@faker-js/faker");

const testFactory = function* (number, testSuffix) {
  const array = Array(number)
    .fill(1)
    .map((n, i) => n + i);

  // eslint-disable-next-line no-unused-vars
  for (const item of array) {
    yield {
      content: `${faker.lorem.words(3)} ${testSuffix}`,
    };
  }
};

module.exports = {
  testFactory,
};
