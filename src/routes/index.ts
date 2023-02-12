import express from 'express';
import { userRoutes } from './user.js';

const router = express();

router.use('/', userRoutes);

export { router };
