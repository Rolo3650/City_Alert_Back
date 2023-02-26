import express from 'express';
import { UserDB } from '../../database/user/user.js';
import { returnUser } from '../../helpers/user/user.js';
import { middleware } from '../../middleware/index.js';

const userRoutes = express();
const userbd = new UserDB();

userRoutes.get('/get-users', middleware, async (req, res) => {

  const users = await userbd.getUsers();
  const users_array = users.map(user => returnUser(user));

  return res.status(200).send({
    ok: true,
    users_array
  });

});


export { userRoutes };
