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
import { SexDB } from '../../database/user/sex.js';
import { returnSexJSON } from '../../helpers/user/sex.js';
import { middleware } from '../../middleware/index.js';
const sexRoutes = express();
const sexbd = new SexDB();
sexRoutes.get('/get-sexs', middleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sexs = yield sexbd.getSexs();
    const sexs_array = sexs.map(sex => returnSexJSON(sex));
    return res.status(200).send({
        ok: true,
        sexs_array
    });
}));
export { sexRoutes };
