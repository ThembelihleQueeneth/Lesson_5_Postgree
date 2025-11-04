import express  from "express";
import dotenv from "dotenv";
import { testBBConnection } from "./config/database";
import ApplicationRoutes from "./routes/applicationRoutes";

dotenv.config();

const app  = express();
const PORT = process.env.PORT || 5000;

const startServer = async () => {
    await testBBConnection();
    app.use(express.json());

    app.use('/api', ApplicationRoutes)

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
};
startServer();