import { User } from '../user.model';
import { IUser } from './user.interface';

const createUserIntoDB = async (user: IUser) => {
  // static method
  if (await User.isUserExists(user.userId)) {
    throw new Error('User already exists!');
  }
  const result = await User.create(user);
  return result;
};

const getAllUsersFromDB = async () => {
  const result = await User.find();
  return result;
};

const getSpecificUserFromDB = async (userId: string | number) => {
  const result = await User.findOne({ userId });
  return result;
};

const updateUserDataIntoDB = async (userId: string | number) => {
  const updateData = {
    username: 'Abdul',
    age: 500,
  };
  const result = await User.findOneAndUpdate({ userId }, updateData);
  return result;
};

const deleteUserDataFromDB = async (userId: string | number) => {
  const result = await User.deleteOne({ userId });
  return result;
};
export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSpecificUserFromDB,
  updateUserDataIntoDB,
  deleteUserDataFromDB,
};
