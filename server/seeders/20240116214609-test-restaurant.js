"use strict";

const {
  testRestaurantFactory,
  createCategories,
  createDish,
  createRestaurantCategory,
  getUniqueObjectsByCatId,
} = require("./factories/restaurantTestData");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const testSuffix = "**test**";
    let restaurantList = [];

    for (const restuarant of testRestaurantFactory(10, testSuffix)) {
      // const categoryData = restuarant.categories;
      // delete restuarant.categories;
      restaurantList.push(restuarant);
      await queryInterface.bulkInsert("restaurants", [restuarant]);

      // console.log(categoryData);
    }

    let categoryList = [];
    for (const category of createCategories(10, testSuffix)) {
      const dishList = category.dishes;
      delete category.dishes;
      categoryList.push(category);
      await queryInterface.bulkInsert("categories", [category]);

      await queryInterface.bulkInsert("dishes", dishList);
    }

    // for (const restCat of createRestaurantCategory(
    //   restaurantList.length,
    //   categoryList.length,
    //   5
    // )) {
    //   await queryInterface.bulkInsert("restaurantCategories", [restCat]);
    // }

    for (const restaurant of restaurantList) {
      const restaurantCategory = createRestaurantCategory(
        restaurant.id,
        categoryList.length,
        8
      );

      const uniqueList = getUniqueObjectsByCatId(restaurantCategory);

      // console.log(restaurantCategory);
      // console.log(uniqueob);
      // console.log(removeDuplicateCatId);
      await queryInterface.bulkInsert("restaurantCategories", uniqueList);
    }

    // console.log(cat);
    // console.log(res);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("restaurantCategories", null, {});
    await queryInterface.bulkDelete("dishes", null, {});
    await queryInterface.bulkDelete("categories", null, {});
    await queryInterface.bulkDelete("restaurants", null, {});
    // await queryInterface.bulkDelete("restaurantcategories", null, {});
  },
};
