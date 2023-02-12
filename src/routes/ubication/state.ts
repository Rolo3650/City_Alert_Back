import express from 'express';
import { StateDB } from '../../database/ubication/state.js';

const stateRoutes = express();
const statebd = new StateDB();

stateRoutes.get('/get-states', async (req, res) => {

  const states = await statebd.getStates();
  const states_array = states.map(state => ({
    id_state: state.getIdState(),
    state: state.getState(),
  }));

  return res.status(200).send({
    states_array
  });

});


export { stateRoutes };
