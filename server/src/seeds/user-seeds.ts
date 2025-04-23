// file path Module-14-Lock-N-Board/server/src/seeds/user-seeds.ts

import { User } from '../models/user.js';

export const seedUsers = async () => {
  await User.bulkCreate([
    { username: 'Test', password: 'password' },
    { username: 'Alexis', password: 'password' },
    { username: 'Divina', password: 'password' },
    { username: 'User', password: 'password' },
    { username: 'Test1', password: '1234' },
    { username: 'Alexis1', password: '1234' },
    { username: 'Divina1', password: '1234' },
    { username: 'User1', password: '1234' },
    { username: 'Test2', password: 'open' },
    { username: 'Alexis2', password: 'open' },
    { username: 'Divina2', password: 'open' },
    { username: 'User2', password: 'open' },
  ], { individualHooks: true });
};