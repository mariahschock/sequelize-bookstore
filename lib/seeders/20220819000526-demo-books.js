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
    await queryInterface.bulkInsert('books', [
      {
        title: 'All the Light We Cannot See',
        released: 2014,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Cloud Cuckoo Land',
        released: 2021,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The Invisible Life of Addie LaRue',
        released: 2020,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The Art of Racing in the Rain',
        released: 2008,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The Secret History',
        released: 1992,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The Goldfinch',
        released: 2013,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The Great Gatsby',
        released: 1925,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'East of Eden',
        released: 1952,
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
