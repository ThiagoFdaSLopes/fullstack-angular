import { Request, Response } from 'express';
import { InfluencerService } from '../services';

export default class InfluencerController {
    constructor(private influencerService = new InfluencerService()) {}

    public async GetAllInfluencers(req: Request, res: Response): Promise<Response | void> {
        const result = await this.influencerService.GetAllInfluencers();
        if(!result) return res.status(500).json({ message: "Servico indisponivel"})
        res.status(200).json(result)
    }

    public async SearchInfluencer(req: Request, res: Response): Promise<Response | void> {
        const result = await this.influencerService.SearchInfluencer(req.query);
        if(!result) return res.status(404).json({ message: "Influencers Nao Encontrado"})
        res.status(200).json(result)
    }
}