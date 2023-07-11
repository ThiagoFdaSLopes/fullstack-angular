import { ModelStatic } from 'sequelize';
import * as bcrypt from 'bcryptjs';
import { IUser } from '../interfaces/IUser';
import { IUserCreate } from '../interfaces/IUserCreate';
import User from '../database/models/User';
import { validateUserLogin, validateUserCreate } from './validations/schema';

export default class UserService {
  protected model: ModelStatic<User> = User;

  async UserLogin(user: IUser): Promise<User | null> {
    try {
      validateUserLogin(user);
      const result = await this.model.findOne(
        { where: { email: user.email } },
      );
      const validateUser = bcrypt.compareSync(user.password, result?.password || '-');

      return validateUser ? result?.dataValues : null;
    } catch (error) {
      const err = error as Error;
      throw new Error(`${err.message}`);
    }
  }

  async UserCreate(user: IUserCreate): Promise<User | null > {
    try {
      validateUserCreate(user);
      const passwordHash = await bcrypt.hash(user.password, 10)
      const [result, created] = await this.model.findOrCreate({
        where: { email: user.email },
        defaults: {
          email: user.email,
          password: passwordHash,
          username: user.userName,
          role: "user"
        },
        returning: true
      })
        return created ? result?.dataValues : null
    } catch(error) {
      const err = error as Error;
      throw new Error(`${err.message}`);
    }
  }
}