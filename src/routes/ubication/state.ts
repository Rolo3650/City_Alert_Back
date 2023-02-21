import express from 'express';
import { StateDB } from '../../database/ubication/state.js';
import { middleware } from '../../middleware/index.js';

const stateRoutes = express();
const statebd = new StateDB();

stateRoutes.get('/get-states', middleware, async (req, res) => {

  const states = await statebd.getStates();
  const states_array = states.map(state => ({
    id_state: state.getIdState(),
    state: state.getState(),
  }));

  return res.status(200).send({
    ok: true,
    states_array
  });

});


export { stateRoutes };
