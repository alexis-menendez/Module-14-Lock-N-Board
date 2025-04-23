// file path Module-14-Lock-N-Board/server/src/server.ts
const forceDatabaseRefresh = false;
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import routes from './routes/index.js';
import { sequelize } from './models/index.js';
import path from "node:path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.static(path.resolve(__dirname, "../../client/dist")));
app.use(express.json());
app.use(routes);
app.get("*", (_req, res) => {
    res.sendFile(path.resolve(__dirname, "../../client/dist", "index.html"));
});
sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
});
