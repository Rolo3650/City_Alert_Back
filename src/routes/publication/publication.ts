import express from 'express';
import { PublicationImage } from '../../classes/publication/image.js';
import { ComentDB } from '../../database/publication/coment.js';
import { ImageDB } from '../../database/publication/image.js';
import { PublicationDB } from '../../database/publication/publication.js';
import { PublicationTypeDB } from '../../database/publication/publicationType.js';
import { ReactionDB } from '../../database/publication/reaction.js';
import { SettlementDB } from '../../database/ubication/settlement.js';
import { UserDB } from '../../database/user/user.js';
import { returnPublication, returnPublicationJSON } from '../../helpers/publication/publication.js';
import { middleware } from '../../middleware/index.js';

const publicationRoutes = express();
const publicationbd = new PublicationDB();
const userbd = new UserDB();
const reactionbd = new ReactionDB();
const comentbd = new ComentDB();
const imagebd = new ImageDB();
const settlementbd = new SettlementDB();
const publicationTypebd = new PublicationTypeDB();

publicationRoutes.get('/get-publications', middleware, async (req, res) => {

  const publications = await publicationbd.getPublications();

  for (var i = 0; i < publications.length; i++) {
    const user = await userbd.getUser(publications[i]?.getUser()?.getIdUser())
    const reactions = await reactionbd.getReactionsPerPublication(publications[i]?.getIdPublication())
    const coments = await comentbd.getComentsPerPublication(publications[i]?.getIdPublication())
    const images = await imagebd.getImagesPerPublication(publications[i]?.getIdPublication())

    publications[i]?.setUser(user)
    publications[i]?.setReactions(reactions)
    publications[i]?.setComents(coments)
    publications[i]?.setImages(images)
  }

  const publications_array = publications.map((publication) => {
    return returnPublicationJSON(publication)
  });

  return res.status(200).send({
    ok: true,
    publications_array
  });

});

publicationRoutes.post('/create-publication', middleware, async (req, res) => {

  let { body } = req;

  body.date = new Date()

  if (body.description && body.date && body.id_publication_type && body.id_user && body.id_settlement) {

    if (typeof body.description == 'string' && body.date instanceof Date && typeof body.id_publication_type == 'number' && typeof body.id_user == 'number' && typeof body.id_settlement == 'number') {

      let response = {
        ok: true,
        error: ""
      }

      const user = await userbd.getUser(body.id_user)
      const settlement = await settlementbd.getSettlement(body.id_settlement);
      const publicationType = await publicationTypebd.getPublicationType(body.id_publication_type)

      if (!user?.getIdUser()) {
        response.error = "User does not exist"
        response.ok = false
      } else if (!settlement?.getIdSettlement()) {
        response.error = "Settlement does not exist"
        response.ok = false
      } else if (!publicationType?.getIdPublicationType()) {
        response.error = "Publication type does not exist"
        response.ok = false
      }

      if (response.ok) {
        if (body?.images?.length > 0) {

          let error_1 = false;

          body?.images?.forEach((image: any) => {
            if (!error_1) {
              if (!image.url) {
                error_1 = true;
              }
            }
          })

          if (error_1) {
            return res.status(200).send({
              ok: false,
              error_1: "Invalid Image URL"
            });
          } else {

            const last_publication = (await publicationbd.getLastPublication())[0];

            body.id_publication = <number>last_publication.getIdPublication() + 1;

            const publication = returnPublication(body);

            const publication_saved = await publicationbd.createPublication(publication);

            let error_2 = false;

            if (publication_saved) {

              for (let i = 0; i < body?.images?.length; i++) {

                if (!error_2) {
                  const last_image = (await imagebd.getLastImage())[0]
                  const id_image = <number>last_image.getIdImage() + i + 1;

                  const image = new PublicationImage(id_image, <string>body?.images[i]?.url, false)

                  const saved_image = await imagebd.saveImage(image, publication);

                  if (!saved_image) {
                    error_2 = true;
                    return res.status(200).send({
                      ok: false,
                      error: "Data Base Error"
                    });
                  }
                }

              }

              if (!error_2) {
                const response_publication = await publicationbd.getPublication(publication.getIdPublication());

                const user = await userbd.getUser(response_publication?.getUser()?.getIdUser())
                const reactions = await reactionbd.getReactionsPerPublication(response_publication?.getIdPublication())
                const coments = await comentbd.getComentsPerPublication(response_publication?.getIdPublication())
                const images = await imagebd.getImagesPerPublication(response_publication?.getIdPublication())

                response_publication?.setUser(user)
                response_publication?.setReactions(reactions)
                response_publication?.setComents(coments)
                response_publication?.setImages(images)

                return res.status(200).send({
                  ok: true,
                  publication: returnPublicationJSON(response_publication)
                });
              }

            } else {
              return res.status(200).send({
                ok: false,
                error: "Data Base Error"
              });
            }

          }

        } else {

          const last_publication = (await publicationbd.getLastPublication())[0];

          body.id_publication = <number>last_publication.getIdPublication() + 1;

          const publication = returnPublication(body);

          const publication_saved = await publicationbd.createPublication(publication);

          if (publication_saved) {
            const response_publication = await publicationbd.getPublication(publication.getIdPublication());

            const user = await userbd.getUser(response_publication?.getUser()?.getIdUser())
            const reactions = await reactionbd.getReactionsPerPublication(response_publication?.getIdPublication())
            const coments = await comentbd.getComentsPerPublication(response_publication?.getIdPublication())
            const images = await imagebd.getImagesPerPublication(response_publication?.getIdPublication())

            response_publication?.setUser(user)
            response_publication?.setReactions(reactions)
            response_publication?.setComents(coments)
            response_publication?.setImages(images)

            return res.status(200).send({
              ok: true,
              publication: returnPublicationJSON(response_publication)
            });

          } else {
            return res.status(200).send({
              ok: false,
              error: "Data Base Error"
            });
          }

        }
      } else {
        return res.status(200).send({
          ok: false,
          error: response.error
        });
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

publicationRoutes.post('/get-publications-by-settlement', middleware, async (req, res) => {

  let { body } = req

  if (body.id_settlement) {
    const publications = await publicationbd.getPublicationBySettlement(body.id_settlement);

    for (var i = 0; i < publications.length; i++) {
      const user = await userbd.getUser(publications[i]?.getUser()?.getIdUser())
      const reactions = await reactionbd.getReactionsPerPublication(publications[i]?.getIdPublication())
      const coments = await comentbd.getComentsPerPublication(publications[i]?.getIdPublication())
      const images = await imagebd.getImagesPerPublication(publications[i]?.getIdPublication())

      publications[i]?.setUser(user)
      publications[i]?.setReactions(reactions)
      publications[i]?.setComents(coments)
      publications[i]?.setImages(images)
    }

    const publications_array = publications.map((publication) => {
      return returnPublicationJSON(publication)
    });

    return res.status(200).send({
      ok: true,
      publications_array
    });
  } else {
    return res.status(200).send({
      ok: false,
      error: "Missing Params"
    });
  }

});

export { publicationRoutes };
