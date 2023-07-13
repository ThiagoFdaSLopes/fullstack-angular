import { Request, Response } from 'express';
import { InfluencerService } from '../services';
import BaseHttpError from '../errors/BaseHTTPError';

export default class InfluencerController {
    constructor(private influencerService = new InfluencerService()) {}

    public async GetAllInfluencers(req: Request, res: Response): Promise<Response | void> {
        const result = await this.influencerService.GetAllInfluencers();
        if(!result) return res.status(500).json({ message: "Servico indisponivel"})
        res.status(200).json(result)
    }

    public async SearchInfluencersByQuery(req: Request, res: Response): Promise<Response | void> {
        try {
            const result = await this.influencerService.SearchInfluencersByQuery(req.query);
            if(!result) return res.status(404).json({ message: "Influencers Nao Encontrado"})
            res.status(200).json(result)
        } catch(error) {
            const err = error as Error
            res.status(500).json(`${err.message}`)
        }
    }

    public async SearchInfluencersByCombinedOptions(req: Request, res: Response): Promise<Response | void> {
        try {
            const result = await this.influencerService.SearchInfluencersByCombinedOptions(req.query);
            if(!result) return res.status(404).json({ message: "Influencer Nao Encontrado"})
            res.status(200).json(result)
        } catch(error){
            const err = error as Error
            res.status(500).json(`${err.message}`)
        }
    }

    public async CreateInfluencer(req: Request, res: Response): Promise<Response | void> {
        try {
            if(res.locals.user.role !== "admin") throw new BaseHttpError("Apenas admin possue essa permissao", 401);
            const result = await this.influencerService.CreateInfluencer(req.body);
            if(!result) return res.status(404).json({ message: "Influencer ja existe"});
            res.status(200).json(result);
        } catch(error){
            const err = error as Error;
            res.status(401).json({ message: `${err.message}`});
        }
    }

    public async DeleteInfluencer(req: Request, res: Response): Promise<Response | void> {
        try {
            if(res.locals.user.role !== "admin") throw new BaseHttpError("Apenas admin possue essa permissao", 401);
            const result = await this.influencerService.DeleteInfluencer(Number(req.params.id));
            res.status(200).json(result);
        } catch(error) {
            const err = error as Error;
            res.status(401).json({ message: `${err.message}`});
        }
    }
}