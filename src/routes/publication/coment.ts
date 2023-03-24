import express from 'express';
import { ComentDB } from '../../database/publication/coment.js';
import { returnComentJSON } from '../../helpers/publication/coment.js';
import { middleware } from '../../middleware/index.js';

const comentRoutes = express();
const comentbd = new ComentDB();

comentRoutes.get('/get-coments', middleware, async (req, res) => {

  const coments = await comentbd.getComents();
  const coments_array = coments.map(coment => returnComentJSON(coment));

  return res.status(200).send({
    ok: true,
    coments_array
  });

});

comentRoutes.post('/create-coment', middleware, async (req, res) => {

  let { body } = req

  body.date = new Date()

  return res.status(200).send({
    ok: true,
    body
  });

});


export { comentRoutes };
