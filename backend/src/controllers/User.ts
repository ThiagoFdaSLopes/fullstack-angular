import { Request, Response } from 'express';
import createToken from '../utils/jwtToken';
import { UserService } from '../services';

export default class UserController {

  constructor(private userService = new UserService()) {}
	protected errorMessage = 'Invalid email or password';
  public async UserLogin(req: Request, res: Response): Promise<Response | void> {
    try {
      const result = await this.userService.UserLogin(req.body);
      if (result === null) return res.status(401).json({ message: this.errorMessage });
      const token = createToken(result);
      res.status(200).json({ token });
    } catch (error) {
      const err = error as Error;
      if (err.message === this.errorMessage) {
        return res.status(401).json({ message: this.errorMessage });
      }
      console.log(err)
      res.status(400).json({ message: err.message });
    }
  }
}