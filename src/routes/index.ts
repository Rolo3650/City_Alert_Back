import express from 'express';
import { municipalityRoutes } from './municipality.js';
import { stateRoutes } from './state.js';
import { userRoutes } from './user.js';

const router = express();

//user routes
router.use('/', userRoutes);

//location routes
router.use('/', stateRoutes);
router.use('/', municipalityRoutes);

export { router };
