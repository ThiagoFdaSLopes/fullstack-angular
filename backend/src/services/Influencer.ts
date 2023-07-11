import { ModelStatic, Op } from 'sequelize';
import Influencer from '../database/models/Influencer';
import IQuery from '../interfaces/IQuery';

export default class InfluencerService {
    protected model: ModelStatic<Influencer> = Influencer;

    async GetAllInfluencers(): Promise<Influencer[] | null> {
        const result = await this.model.findAll();
        return result;
    }

    async SearchInfluencer(query: IQuery): Promise<Influencer[] | null> {
        const result = await this.model.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.like]: `%${query.name}%`}},
                    { followers: { [Op.like]: `%${query.followers}%`}},
                    { country: { [Op.like]: `%${query.country}%`}},
                    { category: { [Op.like]: `%${query.category}%`}},
                ]
            }
        })
        return result.length > 0 ? result : null;
    }
}