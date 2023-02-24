import express from 'express';
import { UserTypeDB } from '../../database/user/userType.js';
import { middleware } from '../../middleware/index.js';

const userTypeRoutes = express();
const userTypebd = new UserTypeDB();

userTypeRoutes.get('/get-user-types', middleware, async (req, res) => {

  const userTypes = await userTypebd.getUserTypes();
  const userTypes_array = userTypes.map(userType => ({
    id_userType: userType.getIdUserType(),
    userType: userType.getUserType(),
  }));

  return res.status(200).send({
    ok: true,
    userTypes_array
  });

});


export { userTypeRoutes };
