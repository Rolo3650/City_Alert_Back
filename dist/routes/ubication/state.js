var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import { StateDB } from '../../database/ubication/state.js';
import { middleware } from '../../middleware/index.js';
const stateRoutes = express();
const statebd = new StateDB();
stateRoutes.get('/get-states', middleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const states = yield statebd.getStates();
    const states_array = states.map(state => ({
        id_state: state.getIdState(),
        state: state.getState(),
    }));
    return res.status(200).send({
        ok: true,
        states_array
    });
}));
export { stateRoutes };
