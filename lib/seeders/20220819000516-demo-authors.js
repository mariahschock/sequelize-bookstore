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
        dob: '1973-10-27',
        pob: 'Cleveland, Ohio',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'V. E. Schwab',
        dob: '1987-07-07',
        pob: 'California',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Garth Stein',
        dob: '1964,12,06',
        pob: 'Los Angeles, California',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Donna Tartt',
        dob: '1963-12-23',
        pob: 'Greenwood, Mississippi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'F. Scott Fitzgerald',
        dob: '1896-09-24',
        pob: 'Saint Paul, Minnesota',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'John Steinbeck',
        dob: '1902-02-27',
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
