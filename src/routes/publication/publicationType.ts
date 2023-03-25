import express from 'express';
import { PublicationTypeDB } from '../../database/publication/publicationType.js';
import { returnPublicationTypeJSON } from '../../helpers/publication/publicationType.js';
import { middleware } from '../../middleware/index.js';

const publicationTypeRoutes = express();
const publicationTypebd = new PublicationTypeDB();

publicationTypeRoutes.get('/get-publication-types', middleware, async (req, res) => {

  const publicationTypes = await publicationTypebd.getPublicationTypes();
  const publicationTypes_array = publicationTypes.map(publicationType => returnPublicationTypeJSON(publicationType));

  return res.status(200).send({
    ok: true,
    publicationTypes_array
  });

});


export { publicationTypeRoutes };
