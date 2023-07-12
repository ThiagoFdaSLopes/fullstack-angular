import { ModelStatic, Op } from 'sequelize';
import Influencer from '../database/models/Influencer';
import IQuery from '../interfaces/IQuery';
import IWhereClause from '../interfaces/IWhereClause';

export default class InfluencerService {
    protected model: ModelStatic<Influencer> = Influencer;

    async GetAllInfluencers(): Promise<Influencer[] | null> {
        const result = await this.model.findAll();
        return result;
    }

    async SearchInfluencer(query: IQuery): Promise<Influencer[] | null> {
        let whereClause: IWhereClause = {
            [Op.or]: [
                { name: { [Op.like]: `%${query.name}%`}},
                { country: { [Op.like]: `%${query.country}%`}},
                { category: { [Op.like]: `%${query.category}%`}},
            ]
        }
        if (query.followers !== undefined) {
            whereClause[Op.or].push({ followers: { [Op.gte]: Number(query.followers) } })
        }
        const result = await this.model.findAll({
            where: whereClause
        })
        return result.length > 0 ? result : null;
    }
}