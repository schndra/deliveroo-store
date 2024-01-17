"use strict";
const { Op } = require("sequelize");
const { testFactory } = require("./factories/demoTest");

const testSuffix = "**test**";

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
    for (const test of testFactory(10, testSuffix)) {
      await queryInterface.bulkInsert("tests", [test]);
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(
      "tests",
      {
        content: {
          [Op.like]: `%${testSuffix}`,
        },
      },
      {}
    );
  },
};
