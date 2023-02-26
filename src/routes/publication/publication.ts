import express from 'express';
import { ComentDB } from '../../database/publication/coment.js';
import { ImageDB } from '../../database/publication/image.js';
import { PublicationDB } from '../../database/publication/publication.js';
import { ReactionDB } from '../../database/publication/reaction.js';
import { UserDB } from '../../database/user/user.js';
import { returnPublication } from '../../helpers/publication/publication.js';
import { middleware } from '../../middleware/index.js';

const publicationRoutes = express();
const publicationbd = new PublicationDB();
const userbd = new UserDB();
const reactionbd = new ReactionDB();
const comentbd = new ComentDB();
const imagebd = new ImageDB();

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
    return returnPublication(publication)
  });

  return res.status(200).send({
    ok: true,
    publications_array
  });

});


export { publicationRoutes };
