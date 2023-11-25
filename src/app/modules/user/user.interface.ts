import { Model } from 'mongoose';

export type IUser = {
  userId: number;
  username: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
  orders: {
    productName: string;
    price: number;
    quantity: number;
  }[];
};

// creating static
export interface UserModel extends Model<IUser> {
  isUserExists(id: string | number): Promise<IUser | null>;
}
