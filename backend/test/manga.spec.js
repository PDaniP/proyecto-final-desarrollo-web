import request from 'supertest';
import { expect } from 'chai';
import app from '../src/app.js';
import { connectTestDB, disconnectTestDB } from './helpers/db.js';

let mongod;

describe('Manga endpoints', function() {
  this.timeout(10000);

  before(async () => {
    mongod = await connectTestDB();
  });

  after(async () => {
    await disconnectTestDB(mongod);
  });

  it('should create a manga (POST /mangas)', async () => {
    const res = await request(app)
      .post('/mangas')
      .send({ title: 'Test Manga', author: 'Tester', description: 'Desc', coverImage: 'http://img' });

    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('message');
  });

  it('should return an array of mangas (GET /mangas)', async () => {
    const res = await request(app).get('/mangas');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

  it('should return a manga by id (GET /mangas/:id)', async () => {
    // create one via POST
    await request(app)
      .post('/mangas')
      .send({ title: 'Another Manga' });

    const list = await request(app).get('/mangas');
    expect(list.status).to.equal(200);
    const items = list.body;
    expect(items.length).to.be.greaterThan(0);
    const id = items[0]._id || items[0].id;
    const res = await request(app).get(`/mangas/${id}`);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('title');
  });
});
