'use strict';

module.exports = {
  async up (queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Authors', [
      {
        name: 'Anthony Doerr',
        pob: 'Cleveland, Ohio',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'V. E. Schwab',
        pob: 'California',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Garth Stein',
        pob: 'Los Angeles, California',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Donna Tartt',
        pob: 'Greenwood, Mississippi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'F. Scott Fitzgerald',
        pob: 'Saint Paul, Minnesota',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'John Steinbeck',
        pob: 'Salinas, California',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down () {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
