import { Request, Response, Router } from 'express';
import { InfluencerController } from '../controllers';
import validateToken from '../middlewares/validateToken';

const influencerController = new InfluencerController();

const influencerRouter = Router();

influencerRouter.post('/register', 
    validateToken, 
    (req: Request, res: Response) => influencerController.CreateInfluencer(req, res));

influencerRouter.put('/update/:id', 
    validateToken, 
    (req: Request, res: Response) => influencerController.UpdateInfluencer(req, res));

influencerRouter.get('/searchCombined', 
    validateToken, 
    (req: Request, res: Response) => influencerController.SearchInfluencersByCombinedOptions(req, res));

influencerRouter.get('/search', 
    validateToken, 
    (req: Request, res: Response) => influencerController.SearchInfluencersByQuery(req, res));

influencerRouter.get('/:id', 
    validateToken, 
    (req: Request, res: Response) => influencerController.SearchInfluencerById(req, res));

influencerRouter.get('/', 
    validateToken, 
    (req: Request, res: Response) => influencerController.GetAllInfluencers(req, res));

influencerRouter.delete('/delete/:id', 
    validateToken, 
    (req: Request, res: Response) => influencerController.DeleteInfluencer(req, res));


export default influencerRouter;