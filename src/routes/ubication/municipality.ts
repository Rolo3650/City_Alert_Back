import express from 'express';
import { MunicipalityDB } from '../../database/ubication/municipality.js';
import { middleware } from '../../middleware/index.js';

const municipalityRoutes = express();
const municipalitybd = new MunicipalityDB();

municipalityRoutes.get('/get-municipalities', middleware, async (req, res) => {

  const municipalities = await municipalitybd.getMunicipalitys();
  const municipalities_array = municipalities.map(municipality => ({
    id_municipality: municipality.getIdMunicipality(),
    municipality: municipality.getMunicipality(),
  }));

  return res.status(200).send({
    municipalities_array
  });

});


export { municipalityRoutes };
