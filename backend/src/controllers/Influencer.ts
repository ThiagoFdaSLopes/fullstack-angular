import { Request, Response } from 'express';
import { InfluencerService } from '../services';
import BaseHttpError from '../errors/BaseHTTPError';

export default class InfluencerController {
    constructor(private influencerService = new InfluencerService()) {}

    public async GetAllInfluencers(req: Request, res: Response): Promise<Response | void> {
        const result = await this.influencerService.GetAllInfluencers();
        if(!result) return res.status(500).json({ message: "Servico indisponivel"})
        return res.status(200).json(result)
    }

    public async SearchInfluencersByQuery(req: Request, res: Response): Promise<Response | void> {
        try {
            const result = await this.influencerService.SearchInfluencersByQuery(req.query);
            if(!result) return res.status(404).json({ message: "Influencers Nao Encontrado"})
            return res.status(200).json(result)
        } catch(error) {
            const err = error as Error
            return res.status(500).json(`${err.message}`)
        }
    }

    public async SearchInfluencersByCombinedOptions(req: Request, res: Response): Promise<Response | void> {
        try {
            const result = await this.influencerService.SearchInfluencersByCombinedOptions(req.query);
            if(!result) return res.status(404).json({ message: "Influencer Nao Encontrado"})
            return res.status(200).json(result)
        } catch(error){
            const err = error as Error
            return res.status(500).json(`${err.message}`)
        }
    }

    public async SearchInfluencerById(req: Request, res: Response): Promise<Response | void> {
        try {
            const result = await this.influencerService.SearchInfluencerById(Number(req.params.id));
            if(!result) return res.status(404).json({ message: "Influencer not found"})
            return res.status(200).json(result)
        } catch(error){
            const err = error as Error
            return res.status(500).json(`${err.message}`)
        }
    }

    public async CreateInfluencer(req: Request, res: Response): Promise<Response | void> {
        try {
            if(res.locals.user.role !== "admin") throw new BaseHttpError("Apenas admin possue essa permissao", 401);
            const result = await this.influencerService.CreateInfluencer(req.body);
            if(!result) return res.status(404).json({ message: "Influencer ja existe"});
            return res.status(200).json(result);
        } catch(error){
            const err = error as Error;
            return res.status(401).json({ message: `${err.message}`});
        }
    }

    public async DeleteInfluencer(req: Request, res: Response): Promise<Response | void> {
        try {
            if(res.locals.user.role !== "admin") throw new BaseHttpError("Apenas admin possue essa permissao", 401);
            const result = await this.influencerService.DeleteInfluencer(Number(req.params.id));
            return res.status(200).json(result);
        } catch(error) {
            const err = error as Error;
            return res.status(401).json({ message: `${err.message}`});
        }
    }

    public async UpdateInfluencer(req: Request, res: Response): Promise<Response | void> {
        try {
            if(res.locals.user.role !== "admin") throw new BaseHttpError("Apenas admin possue essa permissao", 401);
            const result = await this.influencerService.UpdateInfluencer(Number(req.params.id), req.body);
            return res.status(200).json({ id: req.params.id, ...req.body});
        } catch(error) {
            const err = error as Error;
            return res.status(401).json({ message: `${err.message}`});
        }
    }
}