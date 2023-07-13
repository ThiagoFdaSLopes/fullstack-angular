import { ModelStatic, Op } from 'sequelize';
import Influencer from '../database/models/Influencer';
import IQuery from '../interfaces/IQuery';
import IWhereClause from '../interfaces/IWhereClause';
import IInfluencer from '../interfaces/IInfluencer';
import { validateInfluencerCreate } from './validations/schema';

export default class InfluencerService {
    protected model: ModelStatic<Influencer> = Influencer;

    async GetAllInfluencers(): Promise<Influencer[] | null> {
        const result = await this.model.findAll();
        return result;
    }

    async SearchInfluencersByQuery(query: IQuery): Promise<Influencer[] | null> {
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

        try {
            const result = await this.model.findAll({
                where: whereClause
            })
            return result.length > 0 ? result : null;
        } catch(error) {
            const err = error as Error;
            throw new Error(`${err.message}`);
        }
    }

    async SearchInfluencersByCombinedOptions(query: IQuery): Promise<Influencer | null> {
        let whereClause = {
            [Op.and]: [
                { name: { [Op.like]: `%${query.name}%`}},
                { country: { [Op.like]: `%${query.country}%`}},
                { category: { [Op.like]: `%${query.category}%`}},
                { followers: { [Op.gte]: Number(query.followers) | 0}},
            ]
        }
        try {
            const result = await this.model.findOne({
                where: whereClause
            })
            return result ? result : null;
        } catch(error) {
            const err = error as Error;
            throw new Error(`${err.message}`);
        }
    }

    async CreateInfluencer(influencer: IInfluencer): Promise<Influencer | null> {
        try {
            validateInfluencerCreate(influencer)
            const [result, created] = await this.model.findOrCreate({
                where: {
                    name: influencer.name
                },
                defaults: {
                    ...influencer
                },
                returning: true,
            });
            return created ? result?.dataValues : null
        } catch(error) {
            const err = error as Error;
            throw new Error(`${err.message}`);
        }
    }

    async DeleteInfluencer(id: number): Promise<Influencer | null> {
        try {
            const result = await this.model.findOne({
                where: {
                    id
                },
            });
            if(!result) throw new Error("Influencer nao encontrado");

            await result.destroy();
            return result;
        }catch(error) {
            const err = error as Error;
            throw new Error(`${err.message}`);
        }
    }
}