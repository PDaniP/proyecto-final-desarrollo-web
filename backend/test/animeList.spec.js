import request from 'supertest';
import { expect } from 'chai';
import app from '../src/app.js';
import { connectTestDB, disconnectTestDB } from './helpers/db.js';

let mongod;

before(async () => {
  mongod = await connectTestDB();
});

after(async () => {
  await disconnectTestDB(mongod);
});

describe('Anime list endpoints', function() {
  this.timeout(10000);

  it('should add an anime to a user list (POST /anime-list/add)', async () => {
    const res = await request(app)
      .post('/anime-list/add')
      .send({ userId: 'user1', animeId: 123, animeTitle: 'Test Anime', animeCoverImage: 'http://img', lista: 'completado' });

    expect(res.status).to.be.oneOf([200,201]);
    expect(res.body).to.have.property('message');
  });

  it('should retrieve the user anime list (GET /anime-list/:userId)', async () => {
    // ensure there's at least one
    await request(app)
      .post('/anime-list/add')
      .send({ userId: 'user2', animeId: 321, animeTitle: 'Another', animeCoverImage: 'http://img', lista: 'enProgreso' });

    const res = await request(app).get('/anime-list/user2');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('userId');
  });

  it('should remove an anime from a list (POST /anime-list/remove)', async () => {
    // add then remove
    await request(app)
      .post('/anime-list/add')
      .send({ userId: 'user3', animeId: 555, animeTitle: 'ToRemove', animeCoverImage: 'http://img', lista: 'completado' });

    const res = await request(app)
      .post('/anime-list/remove')
      .send({ userId: 'user3', animeId: 555, lista: 'animeCompletado' });

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('message');
  });
});
