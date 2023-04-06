import express from 'express';
import { PostalCodeDB } from '../../database/ubication/postalCode.js';
import { middleware } from '../../middleware/index.js';
import { returnPostalCodeJSON } from '../../helpers/ubication/postalCode.js';
import { config } from '../../utils/config.js';

const postalCodeRoutes = express();
const postalCodebd = new PostalCodeDB();

postalCodeRoutes.get('/get-postal-codes', middleware, async (req, res) => {

  const postalCodes = await postalCodebd.getPostalCodes();
  const postalCodes_array = postalCodes.map(postalCode => returnPostalCodeJSON(postalCode));

  return res.status(200).send({
    ok: true,
    postalCodes_array
  });

});

postalCodeRoutes.get('/get-postal-codes-by-id-state', middleware, async (req, res) => {

  let { id }: any = req.query;

  if (id) {
    if (config.regex.number.test(id)) {
      const postalCodes = await postalCodebd.getPostalCodesByState(parseInt(id));
      const postalCodes_array = postalCodes.map(postalCode => returnPostalCodeJSON(postalCode));

      return res.status(200).send({
        ok: true,
        postalCodes_array
      });
    } else {
      return res.status(200).send({
        ok: false,
        error: "Invalid Data"
      });
    }
  } else {
    return res.status(200).send({
      ok: false,
      error: "Missing Data"
    });
  }

});


export { postalCodeRoutes };
