import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Influencer extends Model {
    declare readonly id: number;
    declare email: string;
    declare username: string;
    declare password: string;
    declare role: string;
  }
  
  Influencer.init({
    id: {
      type: INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    image: {
      type: STRING,
      allowNull: false,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
    platform: {
      type: STRING,
      allowNull: false,
    },
    country: {
      type: STRING,
      allowNull: false,
    },
    followers: {
      type: INTEGER,
      allowNull: false,
    },
  }, {
    underscored: true,
    sequelize: db,
    modelName: 'Influencer',
    timestamps: false,
    tableName: 'influencers',
  });
  
  export default Influencer;