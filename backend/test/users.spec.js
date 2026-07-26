import request from 'supertest';
import { expect } from 'chai';
import app from '../src/app.js';
import { connectTestDB, disconnectTestDB } from './helpers/db.js';

let mongod;
before(async () => {
  process.env.JWT_SECRET = process.env.JWT_SECRET || 'testsecret';
  mongod = await connectTestDB();
});

after(async () => {
  await disconnectTestDB(mongod);
});

describe('User endpoints', function() {
  this.timeout(10000);

  it('should register a user (POST /users/register)', async () => {
    const res = await request(app)
      .post('/users/register')
      .send({ username: 'testuser', email: 'test@example.com', password: 'password123' });

    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('message');
  });

  it('should login the user and set cookie (POST /users/login)', async () => {
    // ensure user exists
    await request(app)
      .post('/users/register')
      .send({ username: 'loginuser', email: 'login@example.com', password: 'pass123' });

    const res = await request(app)
      .post('/users/login')
      .send({ username: 'loginuser', password: 'pass123' });

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('token');
    expect(res.headers).to.have.property('set-cookie');
  });

  it('should return current user when cookie provided (GET /users/current)', async () => {
    // register & login
    await request(app)
      .post('/users/register')
      .send({ username: 'curuser', email: 'cur@example.com', password: 'pass123' });

    const login = await request(app)
      .post('/users/login')
      .send({ username: 'curuser', password: 'pass123' });

    expect(login.status).to.equal(200);
    const cookies = login.headers['set-cookie'];
    const res = await request(app)
      .get('/users/current')
      .set('Cookie', cookies);

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('username');
  });
});
