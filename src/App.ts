import express from 'express';
import bodyParser from 'body-parser';
import { config } from './utils/config.js';
import { router } from './routes/index.js';
import cors from 'cors';

const app = express();

app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(bodyParser.json({ limit: '10mb' }));

app.use(
  cors({
    origin: "*",
  })
);

app.listen(config.PORT, () => {
  console.log(`Sirviendo en el puerto: ${config.PORT} \n`);
});

app.use('/', router);
