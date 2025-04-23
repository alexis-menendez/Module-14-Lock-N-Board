// file path Module-14-Lock-N-Board/server/src/seeds/user-seeds.ts
import { User } from '../models/user.js';
export const seedUsers = async () => {
    await User.bulkCreate([
        { username: 'Test1', password: '1234' },
        { username: 'Alexis1', password: '1234' },
        { username: 'Divina1', password: '1234' },
        { username: 'Test', password: 'password' },
        { username: 'Alexis', password: 'password' },
        { username: 'Divina', password: 'password' },
        { username: 'JollyGuru', password: 'password' },
        { username: 'SunnyScribe', password: 'password' },
        { username: 'RadiantComet', password: 'password' },
    ], { individualHooks: true });
};
