import { Request, Response} from "express";
import * as ApplicationService from "../service/applicationService";

export const addApplication = async (req: Request, res: Response) => {
    try {

        const newApllication = await ApplicationService.createApplication(req.body);
        res.status(201).json(newApllication)
        
    } catch (error) {
        res.status(500).json({message: "Error in creating application"})
        
    }
}