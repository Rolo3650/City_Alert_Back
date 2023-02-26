import express from 'express';
import { comentRoutes } from './publication/coment.js';
import { imageRoutes } from './publication/image.js';
import { publicationRoutes } from './publication/publication.js';
import { publicationTypeRoutes } from './publication/publicationType.js';
import { reactionRoutes } from './publication/reaction.js';
import { municipalityRoutes } from './ubication/municipality.js';
import { postalCodeRoutes } from './ubication/postalCodes.js';
import { settlementRoutes } from './ubication/settlement.js';
import { settlementTypeRoutes } from './ubication/settlementType.js';
import { stateRoutes } from './ubication/state.js';
import { personRoutes } from './user/person.js';
import { sexRoutes } from './user/sex.js';
import { userRoutes } from './user/user.js';
import { userTypeRoutes } from './user/userType.js';

const router = express();

router.get('/', (req, res) => {
  res.send("City Alert Back");
});

// user routes
router.use('/', userRoutes);
router.use('/', sexRoutes);
router.use('/', userTypeRoutes);
router.use('/', personRoutes);

// ubication routes
router.use('/', stateRoutes);
router.use('/', municipalityRoutes);
router.use('/', postalCodeRoutes);
router.use('/', settlementTypeRoutes);
router.use('/', settlementRoutes);

// publication routes
router.use('/', publicationTypeRoutes);
router.use('/', imageRoutes);
router.use('/', comentRoutes);
router.use('/', reactionRoutes);
router.use('/', publicationRoutes);

export { router };
