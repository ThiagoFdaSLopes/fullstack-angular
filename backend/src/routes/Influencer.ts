import { Request, Response, Router } from 'express';
import { InfluencerController } from '../controllers';
import validateToken from '../middlewares/validateToken';

const influencerController = new InfluencerController();

const influencerRouter = Router();

influencerRouter.get('/', 
    validateToken, 
    (req: Request, res: Response) => influencerController.GetAllInfluencers(req, res));

export default influencerRouter;