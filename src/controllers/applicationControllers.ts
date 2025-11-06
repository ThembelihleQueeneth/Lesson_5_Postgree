import { Request, Response} from "express";
import * as ApplicationService from "../service/applicationService";

export const addApplication = async (req: Request, res: Response) => {
    try {

        const newApllication = await ApplicationService.createApplication(
            req.body,
            req.user!.id
        );
        res.status(201).json(newApllication)
        
    } catch (error) {
        res.status(500).json({message: "Error in creating application"})
        
    }
}

export const getAllApplications = async(req: Request, res: Response) => {
    try {
        const applications = await ApplicationService.findAllApplications();
        res.status(200).json(applications);
        
    } catch (error) {
        res.status(500).json({message: "Error retrieving applications"});
        
    }
};

export const getApplicationById = async(req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const application = await ApplicationService.findApplicationById(id);

        if(!application){
            return res.status(404).json({message: "Application not found"});
        }
        return res.status(200).json(application);
        
    } catch (error) {
         res.status(500).json({message: "Error retrieving applications"});
        
    }
}

export const updateApplicationById = async(req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const updateApplication =  await ApplicationService.updateApplication(id, req.body);

        if(!updateApplication) {
           return res.status(404).json({message: "Application not found"});
        }
        return res.status(200).json(updateApplication);
        
    } catch (error) {
        res.status(500).json({message: "Error updating applications"});
        
    }
}

export const deleteApplicationsById  =  async(req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const deleteApplication =  await ApplicationService.deleteApplications(id);

        if(!deleteApplication) {
           return res.status(404).json({message: "Application not found"});
        }
        return res.status(200).json({message: "Application deleted successfully"});
        
    } catch (error) {
        res.status(500).json({message: "Error deleting applications"});
        
    }
}