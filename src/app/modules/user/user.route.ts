import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post('/create-user', UserControllers.createUser);
router.get('/', UserControllers.getAllUsers);
router.get('/:userId', UserControllers.getSpecificUser);
router.put('/:userId', UserControllers.updateSpecificUser);
router.delete('/:userId', UserControllers.deleteSpecificUser);

export const UserRoutes = router;
