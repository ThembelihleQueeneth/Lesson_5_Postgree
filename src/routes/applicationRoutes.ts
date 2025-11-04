import {Router} from 'express';
import { addApplication, getAllApplications, getApplicationById, updateApplicationById, deleteApplicationsById } from "../controllers/applicationControllers";

const router = Router();

router.post('/applications', addApplication);
router.post('/applications', addApplication);
router.get('/applications', getAllApplications);
router.get('/applications/:id', getApplicationById);
router.put('/applications/:id', updateApplicationById);
router.delete('/applications/:id', deleteApplicationsById);

export default router;
