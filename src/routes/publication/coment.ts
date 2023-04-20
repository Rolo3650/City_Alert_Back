import express from 'express';
import { Publication } from '../../classes/publication/publication.js';
import { ComentDB } from '../../database/publication/coment.js';
import { PublicationDB } from '../../database/publication/publication.js';
import { UserDB } from '../../database/user/user.js';
import { returnComent, returnComentJSON } from '../../helpers/publication/coment.js';
import { middleware } from '../../middleware/index.js';

const comentRoutes = express();
const comentbd = new ComentDB();
const userdb = new UserDB();
const publicationdb = new PublicationDB();

comentRoutes.get('/get-coments', middleware, async (req, res) => {

  const coments = await comentbd.getComents();
  const coments_array = coments.map(coment => returnComentJSON(coment));

  return res.status(200).send({
    ok: true,
    coments_array
  });

});

comentRoutes.post('/create-coment', middleware, async (req, res) => {

  let { body } = req;

  body.date = new Date()

  if (body.coment && body.id_publication && body.id_user) {

    if (typeof body.coment == 'string' && typeof body.id_publication == 'number' && typeof body.id_user == 'number' && body.date instanceof Date) {

      let response = {
        ok: true,
        error: ""
      }

      const user = await userdb.getUser(body.id_user)
      const publication = await publicationdb.getPublication(body.id_publication)

      if (!user?.getIdUser()) {
        response.error = "User does not exist"
        response.ok = false
      } else if (!publication?.getIdPublication()) {
        response.error = "Publication does not exist"
        response.ok = false
      }

      if (!response.ok) {
        return res.status(200).send({
          ok: false,
          error: response.error
        });
      } else {

        const last_coment = (await comentbd.getLastComent())[0];

        const id_coment = <number> last_coment.getIdComent() + 1;

        body.id_coment = id_coment;

        const coment = returnComent(body);
        const publication = new Publication(body.id_publication, null, null, null, null, null, null, null, null, null, null)

        // console.log("date", coment.getDate())

        const coment_saved = await comentbd.saveComent(coment, publication);

        if (coment_saved) {

          return res.status(200).send({
            ok: true,
            coment: body
          });

        } else {

          return res.status(200).send({
            ok: false,
            error: "Data base error"
          });

        }
      }

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


export { comentRoutes };
