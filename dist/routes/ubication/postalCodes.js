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
import { PostalCodeDB } from '../../database/ubication/postalCode.js';
import { middleware } from '../../middleware/index.js';
import { returnPostalCodeJSON } from '../../helpers/ubication/postalCode.js';
import { config } from '../../utils/config.js';
const postalCodeRoutes = express();
const postalCodebd = new PostalCodeDB();
postalCodeRoutes.get('/get-postal-codes', middleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const postalCodes = yield postalCodebd.getPostalCodes();
    const postalCodes_array = postalCodes.map(postalCode => returnPostalCodeJSON(postalCode));
    return res.status(200).send({
        ok: true,
        postalCodes_array
    });
}));
postalCodeRoutes.get('/get-postal-codes-by-id-state', middleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.query;
    if (id) {
        if (config.regex.number.test(id)) {
            const postalCodes = yield postalCodebd.getPostalCodesByState(parseInt(id));
            const postalCodes_array = postalCodes.map(postalCode => returnPostalCodeJSON(postalCode));
            return res.status(200).send({
                ok: true,
                postalCodes_array
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
export { postalCodeRoutes };
