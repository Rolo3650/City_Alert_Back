import express from 'express';
import bodyParser from 'body-parser';
import { config } from './utils/config.js';
import { router } from './routes/index.js';

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen(config.PORT, () => {
  console.log(`Sirviendo en el puerto: ${config.PORT} \n`);
});

app.use('/', router)

