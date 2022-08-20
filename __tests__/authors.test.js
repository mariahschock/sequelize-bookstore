const request = require('supertest');
const app = require('../lib/app');
const db = require('../lib/models');

describe('author routes', () => {
  beforeEach(async () => {
    await db.sequelize.sync({ force: true });
    try {
      await db.author.bulkCreate([
        { name: 'Anthony Doerr',
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
      await db.book.bulkCreate([
        {
          title: 'All the Light We Cannot See',
          released: 2014,
          authorId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Cloud Cuckoo Land',
          released: 2021,
          authorId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'The Invisible Life of Addie LaRue',
          released: 2020,
          authorId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'The Art of Racing in the Rain',
          released: 2008,
          authorId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'The Secret History',
          released: 1992,
          authorId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'The Goldfinch',
          released: 2013,
          authorId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'The Great Gatsby',
          released: 1925,
          authorId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'East of Eden',
          released: 1952,
          authorId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    } catch (e) {
      console.log(e);
    }
  });
  
  afterAll(async () => {
    await db.sequelize.close();
  });
  
  it('GET /authors should return list of authors', async () => {
    const res = await request(app).get('/api/v1/authors');
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(6);
  });
  it('GET /authors/:id should return author detail', async () => {
    const res = await request(app).get('/api/v1/authors/1');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: 1,
      name: 'Anthony Doerr',
      pob: 'Cleveland, Ohio',
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
    });
  });
});

