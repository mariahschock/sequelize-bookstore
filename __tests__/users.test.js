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
