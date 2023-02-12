import express from 'express';
import { stateRoutes } from './state.js';
import { userRoutes } from './user.js';

const router = express();

//user routes
router.use('/', userRoutes);

//location routes
router.use('/', stateRoutes);

export { router };
