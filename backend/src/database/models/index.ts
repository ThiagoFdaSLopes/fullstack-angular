import { Sequelize } from 'sequelize';
import * as config from '../config/database';

const sequelize = new Sequelize(config.default);

export default sequelize;
