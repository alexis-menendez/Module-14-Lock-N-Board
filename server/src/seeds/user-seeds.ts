// file path Module-14-Lock-N-Board/server/src/seeds/user-seeds.ts

import { User } from '../models/user.js';

export const seedUsers = async () => {
  await User.bulkCreate([
    { username: 'test', password: 'test' },
    { username: 'user', password: 'user' },
    { username: 'alexis', password: 'alexis' },
    { username: 'divina', password: 'divina' },
    { username: 'Test0', password: 'password' },
    { username: 'User0', password: 'password' },
    { username: 'Alexis0', password: 'password' },
    { username: 'Divina0', password: 'password' },
    { username: 'Test1', password: '1234' },
    { username: 'User1', password: '1234' },
    { username: 'Alexis1', password: '1234' },
    { username: 'Divina1', password: '1234' },
    { username: 'Test2', password: 'open' },
    { username: 'User2', password: 'open' },
    { username: 'Alexis2', password: 'open' },
    { username: 'Divina2', password: 'open' },

  ], { individualHooks: true });
};