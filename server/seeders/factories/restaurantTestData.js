const { faker } = require("@faker-js/faker");

function getUniqueObjectsByCatId(inputArray) {
  const uniqueObjects = [];
  const catIdSet = new Set();

  for (const obj of inputArray) {
    const { catId } = obj;

    if (!catIdSet.has(catId)) {
      catIdSet.add(catId);
      uniqueObjects.push(obj);
    }
  }

  return uniqueObjects;
}

function createRestaurantCategory(restId, catCount, number) {
  return (
    Array(number)
      .fill(1)
      .map((n, i) => n + i)
      // eslint-disable-next-line no-unused-vars
      .map((item, index) => {
        // const id = index + 1;
        return {
          restId,
          catId: faker.number.int({ min: 1, max: catCount }),
        };
      })
  );
}

function createDish(catId, number, testSuffix) {
  return (
    Array(number)
      .fill(1)
      .map((n, i) => n + i)
      // eslint-disable-next-line no-unused-vars
      .map((item, index) => {
        // const id = index + 1;
        return {
          // id,
          name: faker.lorem.words(),
          desc: faker.lorem.sentence({ min: 3, max: 5 }),
          price: faker.number.int({ min: 3, max: 50 }),
          image: faker.image.urlLoremFlickr({ category: "food" }),
          catId,
          // createdAt: new Date(),
          // updatedAt: new Date(),
        };
      })
  );
}

function createCategories(number, testSuffix) {
  return (
    Array(number)
      .fill(1)
      .map((n, i) => n + i)
      // eslint-disable-next-line no-unused-vars
      .map((item, index) => {
        const id = index + 1;
        return {
          id,
          name: faker.commerce.department(),
          image: faker.image.url(),
          dishes: createDish(
            id,
            faker.number.int({ min: 1, max: 10 }),
            testSuffix
          ),
          // createdAt: new Date(),
          // updatedAt: new Date(),
        };
      })
  );
}

const testRestaurantFactory = function* (number, testSuffix) {
  const array = Array(number)
    .fill(1)
    .map((n, i) => n + i);

  // eslint-disable-next-line no-unused-vars
  for (const [index, item] of array.entries()) {
    const id = index + 1;
    yield {
      id,
      name: faker.lorem.words(3),
      desc: faker.lorem.sentence({ min: 3, max: 5 }),
      imgUrl: faker.image.urlLoremFlickr({ category: "food" }),
      lat: faker.location.latitude(),
      long: faker.location.longitude(),
      address: faker.location.streetAddress(),
      rating: faker.number.int({ min: 1, max: 5 }),
      // createdAt: new Date(), // Use current timestamp for createdAt
      // updatedAt: new Date(), // Use current timestamp for updatedAt
      // categories: createCategories(
      //   id,
      //   faker.number.int({ min: 1, max: 5 }),
      //   testSuffix
      // ),
    };
  }
};

module.exports = {
  testRestaurantFactory,
  createCategories,
  createDish,
  createRestaurantCategory,
  getUniqueObjectsByCatId,
};
