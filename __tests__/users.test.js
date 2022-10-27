const request = require('supertest');
const app = require('../lib/app');
const db = require('../lib/models');

const testUser = {
  email: 'testuser@example.com',
  password: '123456',
};

describe('user routes', () => {
  beforeEach(async () => {
    await db.sequelize.sync({ force: true });
  });
  afterAll(async () => {
    await db.sequelize.close();
  });
  it('creates new user', async () => {
    const res = await request(app).post('/api/v1/users').send(testUser);
    const { email } = testUser;

    expect(res.body).toEqual({
      id: expect.any(Number),
      email,
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
    });
  });
});
