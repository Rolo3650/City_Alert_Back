import { Municipality } from "../../classes/ubication/municipality.js";
import { PostalCode } from "../../classes/ubication/postalCode.js";
import { Settlement } from "../../classes/ubication/settlement.js";
import { SettlementType } from "../../classes/ubication/settlementType.js";
import { State } from "../../classes/ubication/state.js";
const returnSettlementJSON = (settlement) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    return {
        id_settlement: settlement === null || settlement === void 0 ? void 0 : settlement.getIdSettlement(),
        name: settlement === null || settlement === void 0 ? void 0 : settlement.getName(),
        pc: {
            id_pc: (_a = settlement === null || settlement === void 0 ? void 0 : settlement.getZipPC()) === null || _a === void 0 ? void 0 : _a.getIdPC(),
            state: {
                id_state: (_c = (_b = settlement === null || settlement === void 0 ? void 0 : settlement.getZipPC()) === null || _b === void 0 ? void 0 : _b.getState()) === null || _c === void 0 ? void 0 : _c.getIdState(),
                state: (_e = (_d = settlement === null || settlement === void 0 ? void 0 : settlement.getZipPC()) === null || _d === void 0 ? void 0 : _d.getState()) === null || _e === void 0 ? void 0 : _e.getState()
            },
            municipality: {
                id_municipality: (_g = (_f = settlement === null || settlement === void 0 ? void 0 : settlement.getZipPC()) === null || _f === void 0 ? void 0 : _f.getMunicipality()) === null || _g === void 0 ? void 0 : _g.getIdMunicipality(),
                municipality: (_j = (_h = settlement === null || settlement === void 0 ? void 0 : settlement.getZipPC()) === null || _h === void 0 ? void 0 : _h.getMunicipality()) === null || _j === void 0 ? void 0 : _j.getMunicipality()
            }
        },
        settlement_type: {
            id_settllement_type: (_k = settlement === null || settlement === void 0 ? void 0 : settlement.getSettlementType()) === null || _k === void 0 ? void 0 : _k.getIdSettlementType(),
            settllement_type: (_l = settlement === null || settlement === void 0 ? void 0 : settlement.getSettlementType()) === null || _l === void 0 ? void 0 : _l.getSettlementType()
        }
    };
};
const returnSettlement = (data) => {
    const st = new State(data.id_state, data.state);
    const mn = new Municipality(data.id_municipality, data.municipality);
    const pc = new PostalCode(data.zip_pc, st, mn);
    const stl_type = new SettlementType(data.id_settlement_type, data.settlement_type);
    return new Settlement(data.id_settlement, data.settlement, pc, stl_type);
};
export { returnSettlementJSON, returnSettlement };
