import {Router} from 'express';
import { addApplication } from "../controllers/applicationControllers";

const router = Router();

router.post('/appications', addApplication);

export default router;
