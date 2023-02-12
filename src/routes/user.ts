import express from 'express';

const userRoutes = express();

userRoutes.get('/', (req, res) => {

  return res.status(200).send({
    hola: 'hola'
  });
})


export { userRoutes };
