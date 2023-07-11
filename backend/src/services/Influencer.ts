import { ModelStatic } from 'sequelize';
import Influencer from '../database/models/Influencer';

export default class InfluencerService {
    protected model: ModelStatic<Influencer> = Influencer;

    async GetAllInfluencers(): Promise<Influencer[] | null> {
        const result = await this.model.findAll();
        return result;
    }
}