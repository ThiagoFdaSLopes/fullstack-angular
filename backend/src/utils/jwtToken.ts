import { sign, verify } from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { IPayload } from '../interfaces/IPayload';

dotenv.config();

function createToken(payload: IPayload): string {
  return sign(payload, process.env.JWT_SECRET || "secret");
}

export function decodeToken(token: string) {
  return verify(token, process.env.JWT_SECRET || "secret");
}

export default createToken;