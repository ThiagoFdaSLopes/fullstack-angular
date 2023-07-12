import { Op } from "sequelize";

export default interface WhereClause {
    [Op.or]: {
      name?: { [Op.like]: string };
      country?: { [Op.like]: string };
      category?: { [Op.like]: string };
      followers?: { [Op.gte]: number };
    }[];
}