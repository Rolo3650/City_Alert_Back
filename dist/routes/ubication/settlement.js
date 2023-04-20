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
import { SettlementDB } from '../../database/ubication/settlement.js';
import { returnSettlementJSON } from '../../helpers/ubication/settlement.js';
import { middleware } from '../../middleware/index.js';
import { config } from '../../utils/config.js';
const settlementRoutes = express();
const settlementbd = new SettlementDB();
settlementRoutes.get('/get-settlements', middleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const settlements = yield settlementbd.getSettlements();
    const settlements_array = settlements.map(settlement => returnSettlementJSON(settlement));
    return res.status(200).send({
        ok: true,
        settlements_array
    });
}));
settlementRoutes.get('/get-settlements-by-id-municipality', middleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.query;
    if (id) {
        if (config.regex.number.test(id)) {
            const settlements = yield settlementbd.getSettlementsByMunicipality(parseInt(id));
            const settlements_array = settlements.map(settlement => returnSettlementJSON(settlement));
            return res.status(200).send({
                ok: true,
                settlements_array
            });
        }
        else {
            return res.status(200).send({
                ok: false,
                error: "Invalid Data"
            });
        }
    }
    else {
        return res.status(200).send({
            ok: false,
            error: "Missing Data"
        });
    }
}));
settlementRoutes.get('/get-settlements-by-id-pc', middleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.query;
    if (id) {
        if (config.regex.number.test(id)) {
            const settlements = yield settlementbd.getSettlementsByPC(parseInt(id));
            const settlements_array = settlements.map(settlement => returnSettlementJSON(settlement));
            return res.status(200).send({
                ok: true,
                settlements_array
            });
        }
        else {
            return res.status(200).send({
                ok: false,
                error: "Invalid Data"
            });
        }
    }
    else {
        return res.status(200).send({
            ok: false,
            error: "Missing Data"
        });
    }
}));
export { settlementRoutes };
