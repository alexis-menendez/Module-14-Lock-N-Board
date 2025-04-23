// file path Module-14-Lock-N-Board/server/src/seeds/index.ts
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });
console.log("From seed file:", process.env.DB_PASSWORD);
import { seedUsers } from './user-seeds.js';
import { seedTickets } from './ticket-seeds.js';
import { sequelize } from '../models/index.js';
const seedAll = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('\n----- DATABASE SYNCED -----\n');
        await seedUsers();
        console.log('\n----- USERS SEEDED -----\n');
        await seedTickets();
        console.log('\n----- TICKETS SEEDED -----\n');
        process.exit(0);
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};
seedAll();
