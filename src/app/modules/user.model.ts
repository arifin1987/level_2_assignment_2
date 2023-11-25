import { IUser } from './user/user.interface';
import { Schema, model } from 'mongoose';

const userSchema = new Schema<IUser>({
  userId: { type: Number },
  username: { type: String, required: true },
  password: { type: String, required: true },
  fullName: {
    firstName: {
      type: String,
      required: [true, 'First Name is required'],
      trim: true,
      maxlength: [20, 'First Name cannot be more than 20 characters'],
    },
    lastName: {
      type: String,
      required: [true, 'First Name is required'],
      trim: true,
      maxlength: [20, 'First Name cannot be more than 20 characters'],
    },
  },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: { type: Boolean, default: false },
  hobbies: { type: [String] },
  address: {
    street: { type: String },
    city: { type: String },
    country: { type: String },
  },
  orders: [
    {
      productName: { type: String },
      price: { type: Number },
      quantity: { type: Number },
    },
  ],
});

export const User = model<IUser>('User', userSchema);
