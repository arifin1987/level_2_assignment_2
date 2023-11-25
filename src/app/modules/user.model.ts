import { IUser, UserModel } from './user/user.interface';
import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import config from '../config';

const userSchema = new Schema<IUser, UserModel>({
  userId: { type: Number, required: true, unique: true },
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

// pre save middleware
userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

// post save middleware
userSchema.post('save', function (doc) {
  doc.password = '';
});
// creating a custom static method
userSchema.statics.isUserExists = async function (userId: string) {
  const existingUser = await User.findOne({ userId });
  return existingUser;
};

export const User = model<IUser, UserModel>('User', userSchema);
