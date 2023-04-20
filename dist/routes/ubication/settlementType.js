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
import { SettlementTypeDB } from '../../database/ubication/settlementType.js';
import { middleware } from '../../middleware/index.js';
const settlementTypeRoutes = express();
const settlement_typebd = new SettlementTypeDB();
settlementTypeRoutes.get('/get-settlement-types', middleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const settlement_types = yield settlement_typebd.getSettlementTypes();
    const settlement_types_array = settlement_types.map(settlement_type => ({
        id_settlement_type: settlement_type.getIdSettlementType(),
        settlement_type: settlement_type.getSettlementType(),
    }));
    return res.status(200).send({
        ok: true,
        settlement_types_array
    });
}));
export { settlementTypeRoutes };
