import express from 'express';
import { municipalityRoutes } from './ubication/municipality.js';
import { postalCodeRoutes } from './ubication/postalCodes.js';
import { stateRoutes } from './ubication/state.js';
import { userRoutes } from './user/user.js';

const router = express();

// user routes
router.use('/', userRoutes);

// ubication routes
router.use('/', stateRoutes);
router.use('/', municipalityRoutes);
router.use('/', postalCodeRoutes);

export { router };
