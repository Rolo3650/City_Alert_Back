import express from 'express';
import { SexDB } from '../../database/user/sex.js';
import { returnSexJSON } from '../../helpers/user/sex.js';
import { middleware } from '../../middleware/index.js';

const sexRoutes = express();
const sexbd = new SexDB();

sexRoutes.get('/get-sexs', middleware, async (req, res) => {

  const sexs = await sexbd.getSexs();
  const sexs_array = sexs.map(sex => returnSexJSON(sex));

  return res.status(200).send({
    ok: true,
    sexs_array
  });

});


export { sexRoutes };
