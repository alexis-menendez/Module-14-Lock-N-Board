// file path Module-14-Lock-N-Board/server/src/seeds/user-seeds.ts

import { User } from '../models/user.js';

export const seedUsers = async () => {
  await User.bulkCreate([
    { username: 'JollyGuru', password: 'password' },
    { username: 'SunnyScribe', password: 'password' },
    { username: 'RadiantComet', password: 'password' },
  ], { individualHooks: true });
};