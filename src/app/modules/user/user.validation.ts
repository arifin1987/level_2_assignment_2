import { z } from 'zod';

const userValidationSchema = z.object({
  userId: z.number(),
  username: z.string().min(1),
  password: z.string().min(1),
  fullName: z.object({
    firstName: z
      .string()
      .min(1)
      .max(20)
      .trim()
      .refine((data) => !!data, { message: 'First Name is required' }),
    lastName: z
      .string()
      .min(1)
      .max(20)
      .trim()
      .refine((data) => !!data, { message: 'Last Name is required' }),
  }),
  age: z.number(),
  email: z.string().email(),
  isActive: z.boolean().default(false),
  hobbies: z.array(z.string()),
  address: z.object({
    street: z.string(),
    city: z.string(),
    country: z.string(),
  }),
  orders: z.array(
    z.object({
      productName: z.string(),
      price: z.number(),
      quantity: z.number(),
    }),
  ),
});

export default userValidationSchema;
