import { Municipality } from "../../classes/ubication/municipality.js";
import { PostalCode } from "../../classes/ubication/postalCode.js";
import { State } from "../../classes/ubication/state.js";
const returnPostalCodeJSON = (postalCode) => {
    var _a, _b, _c, _d;
    return ({
        id_postalCode: postalCode.getIdPC(),
        state: {
            id_state: (_a = postalCode.getState()) === null || _a === void 0 ? void 0 : _a.getIdState(),
            state: (_b = postalCode.getState()) === null || _b === void 0 ? void 0 : _b.getState(),
        },
        municipality: {
            id_municipality: (_c = postalCode.getMunicipality()) === null || _c === void 0 ? void 0 : _c.getIdMunicipality(),
            municipality: (_d = postalCode.getMunicipality()) === null || _d === void 0 ? void 0 : _d.getMunicipality(),
        },
    });
};
const returnPostalCode = (data) => {
    return new PostalCode(data.zip_pc, new State(data.id_state, data.state), new Municipality(data.id_municipality, data.municipality));
};
export { returnPostalCodeJSON, returnPostalCode };
