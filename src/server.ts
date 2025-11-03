import express  from "express";
import dotenv from "dotenv";
import { testBBConnection } from "./config/database";

dotenv.config();

const app  = express();
const PORT = process.env.PORT || 3000;

const startServer = async () => {
    await testBBConnection();
    app.use(express.json);

    app.listen(PORT, () => {
        console.log(`Server is running on http://locaslhost:${PORT}`);
    });
};
startServer();