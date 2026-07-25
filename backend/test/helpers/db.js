import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

let _mongod = null;
let _refCount = 0;

export async function connectTestDB() {
  _refCount += 1;
  if (mongoose.connection.readyState === 1 && _mongod) {
    return _mongod;
  }
  _mongod = await MongoMemoryServer.create();
  const uri = _mongod.getUri();
  await mongoose.connect(uri);
  return _mongod;
}

export async function disconnectTestDB(mongod) {
  _refCount = Math.max(0, _refCount - 1);
  if (_refCount > 0) return;

  try {
    if (mongoose.connection.readyState === 1) {
      await mongoose.connection.dropDatabase();
      await mongoose.connection.close();
    }
  } catch (e) {
    // ignore
  }
  if (mongod && typeof mongod.stop === 'function') {
    await mongod.stop();
  } else if (_mongod && typeof _mongod.stop === 'function') {
    await _mongod.stop();
  }
  _mongod = null;
}
