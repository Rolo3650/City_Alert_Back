import express from 'express';
import { PostalCodeDB } from '../../database/ubication/postalCode.js';
import { middleware } from '../../middleware/index.js';

const postalCodeRoutes = express();
const postalCodebd = new PostalCodeDB();

postalCodeRoutes.get('/get-postal-codes', middleware, async (req, res) => {

  const postalCodes = await postalCodebd.getPostalCodes();
  const postalCodes_array = postalCodes.map(postalCode => ({
    id_postalCode: postalCode.getIdPC(),
    state: {
      id_state: postalCode.getState()?.getIdState(),
      state: postalCode.getState()?.getState(),
    },
    municipality: {
      id_state: postalCode.getMunicipality()?.getIdMunicipality(),
      state: postalCode.getMunicipality()?.getMunicipality(),
    },
  }));

  return res.status(200).send({
    ok: true,
    postalCodes_array
  });

});


export { postalCodeRoutes };
