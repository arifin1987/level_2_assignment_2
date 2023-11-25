import { NextFunction, Request, Response } from 'express';
import { UserServices } from './user.service';
import userValidationSchema from './user.validation';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user: userData } = req.body;
    // data validation using zod
    const zodParseData = userValidationSchema.parse(userData);

    const result = await UserServices.createUserIntoDB(zodParseData);

    res.status(200).json({
      success: true,
      message: 'User is created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsersFromDB();

    res.status(200).json({
      success: true,
      message: 'Users are retrieved stuccessfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSpecificUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UserServices.getSpecificUserFromDB(userId);
    res.status(200).json({
      success: true,
      message: 'User is retrieved stuccessfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const updateSpecificUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const result = await UserServices.updateUserDataIntoDB(userId);
    res.status(200).json({
      success: true,
      message: 'User data updated stuccessfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteSpecificUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UserServices.deleteUserDataFromDB(userId);
    res.status(200).json({
      success: true,
      message: 'User deleted stuccessfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
export const UserControllers = {
  createUser,
  getAllUsers,
  getSpecificUser,
  updateSpecificUser,
  deleteSpecificUser,
};
