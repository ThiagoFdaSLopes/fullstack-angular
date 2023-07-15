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

    async SearchInfluencers(query: IQuery): Promise<Influencer[] | null> {
        console.log(query)
        let whereClause: IWhereClause = {
            [Op.or]: []
        }

        if (query.name !== undefined && query.name.length > 0) {
            whereClause[Op.or].push({ name: { [Op.like]: `%${query.name}%` } });
        }

        if (query.country !== undefined && query.country.length > 0) {
            whereClause[Op.or].push({ country: { [Op.like]: `%${query.country}%` } });
        }
        
        if (query.category !== undefined && query.category.length > 0) {
            whereClause[Op.or].push({ category: { [Op.like]: `%${query.category}%` } });
        }

        if (query.followers !== undefined && query.followers > 0) {
            whereClause[Op.or].push({ followers: { [Op.gte]: Number(query.followers) } })
        }

        try {
            const result = await this.model.findAll({
                where: whereClause
            })
            console.log(result)
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

    SearchInfluencerById(id: number): Promise<Influencer | null> {
        try {
            const result = this.model.findByPk(id);
            if(!result) throw new Error("Influencer not found");
            return result;
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

    async DeleteInfluencer(id: number): Promise<Influencer[] | null> {
        try {
            const result = await this.model.findOne({
                where: {
                    id
                },
            });
            if(!result) throw new Error("Influencer nao encontrado");

            await result.destroy();
            const allInfluencers = await this.model.findAll();
            return allInfluencers;
        } catch(error) {
            const err = error as Error;
            throw new Error(`${err.message}`);
        }
    }

    async UpdateInfluencer(id: number, body: IInfluencer): Promise<IInfluencer | null> {
        try {
            validateInfluencerCreate(body);
            const findUser = this.model.findOne({where : { id }});
            if(!findUser) throw new Error("Influencer nao encontrado");
            await this.model.update({ ...body }, { where: { id }});
            return body;
        } catch(error) {
            const err = error as Error;
            throw new Error(`${err.message}`);
        }
    }
}