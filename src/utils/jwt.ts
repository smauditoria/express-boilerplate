import { UserDocument } from "../models/user.model";
import TokenData from "../interfaces/tokenData.interface";
import DataStoredInToken from "../interfaces/dataStoredInToken";
import * as jwt from 'jsonwebtoken';
import settings from "../config/settings";

export function createToken(user: UserDocument): TokenData {
  const expiresIn = Number(settings.EXPIRES);
  const secret = settings.JWT_SECRET;
  const dataStoredInToken: DataStoredInToken = {
    _id: user._id,
  };
  return {
    expiresIn,
    token: jwt.sign(dataStoredInToken, secret, { expiresIn }),
  };
}
