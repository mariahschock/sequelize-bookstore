const request = require('supertest');
const app = require('../lib/app');
const db = require('../lib/models');

describe('author routes', () => {
  beforeEach(async () => {
    await db.sequelize.sync({ force: true });
    try {
      await db.author.bulkCreate([
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
});

