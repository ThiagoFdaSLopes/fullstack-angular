import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Influencer extends Model {
    declare readonly id: number;
    declare image: string;
    declare name: string;
    declare platform: string;
    declare country: string;
    declare followers: number;
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
    category: {
      type: STRING,
      allowNull: false,
    }
  }, {
    underscored: true,
    sequelize: db,
    modelName: 'Influencer',
    timestamps: false,
    tableName: 'influencers',
  });
  
  export default Influencer;