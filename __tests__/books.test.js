const request = require('supertest');
const app = require('../lib/app');
const db = require('../lib/models');

const testUser = {

  email: 'testuser@example.com',
  password: '123456',
};

const registerAndLogin = async (userProps = {}) => {
  const password = userProps.password ?? testUser.password;
  const agent = request.agent(app);
  const user = await db.User.create({ ...testUser, ...userProps });

  const { email } = user;
  await agent.post('/api/v1/users/sessions').send({ email, password });
  return [agent, user];
};

describe('book routes', () => {
  beforeEach(async () => {
    await db.sequelize.sync({ force: true });
    try {
      await db.book.bulkCreate([
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


      
    } catch (e) {
      console.log(e);
    }
  });

  afterAll(async () => {
    await db.sequelize.close();
  });

  it('GET /books should return list of books', async () => {
    const res = await request(app).get('/api/v1/books');
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(8);
  });
  it('GET /books/:id should return book detail', async () => {
    const res = await request(app).get('/api/v1/books/1');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: 1,
      title: 'All the Light We Cannot See',
      released: 2014,
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
    });
  });
});
