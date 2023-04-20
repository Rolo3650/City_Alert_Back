import { regex } from "./regex.js";
const config = {
  PORT: process.env.PORT || 3000,
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_USER: process.env.DB_USER || 'root',
  DB_PASSWORD: process.env.DB_PASSWORD || 'Roja161203.',
  DB_NAME: process.env.DB_NAME || 'mydb',
  DB_PORT: process.env.DB_PORT || 3306,
  SALTROUNDS: 10,
  regex: regex()
};
export { config };
