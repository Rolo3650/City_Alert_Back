import express from 'express';
import { ImageDB } from '../../database/publication/image.js';
import { middleware } from '../../middleware/index.js';

const imageRoutes = express();
const imagebd = new ImageDB();

imageRoutes.get('/get-images', middleware, async (req, res) => {

  const images = await imagebd.getImages();
  const images_array = images.map(image => ({
    id_image: image.getIdImage(),
    image: image.getUrl(),
    deleted: image.getDeleted(),
  }));

  return res.status(200).send({
    ok: true,
    images_array
  });

});


export { imageRoutes };
