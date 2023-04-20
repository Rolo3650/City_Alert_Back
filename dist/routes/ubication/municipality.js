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
import { MunicipalityDB } from '../../database/ubication/municipality.js';
import { middleware } from '../../middleware/index.js';
const municipalityRoutes = express();
const municipalitybd = new MunicipalityDB();
municipalityRoutes.get('/get-municipalities', middleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const municipalities = yield municipalitybd.getMunicipalitys();
    const municipalities_array = municipalities.map(municipality => ({
        id_municipality: municipality.getIdMunicipality(),
        municipality: municipality.getMunicipality(),
    }));
    return res.status(200).send({
        ok: true,
        municipalities_array
    });
}));
export { municipalityRoutes };
