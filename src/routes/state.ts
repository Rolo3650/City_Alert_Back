import express from 'express';
import { State } from '../classes/state.js';
import { StateBD } from '../database/state.js';

const stateRoutes = express();
const statebd = new StateBD();

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
