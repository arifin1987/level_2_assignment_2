import { User } from '../user.model';
import { IUser } from './user.interface';

const createUserIntoDB = async (user: IUser) => {
  const result = await User.create(user);
  return result;
};

export const UserServices = {
  createUserIntoDB,
};
