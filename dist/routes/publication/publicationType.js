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
import { PublicationTypeDB } from '../../database/publication/publicationType.js';
import { returnPublicationTypeJSON } from '../../helpers/publication/publicationType.js';
import { middleware } from '../../middleware/index.js';
const publicationTypeRoutes = express();
const publicationTypebd = new PublicationTypeDB();
publicationTypeRoutes.get('/get-publication-types', middleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const publicationTypes = yield publicationTypebd.getPublicationTypes();
    const publicationTypes_array = publicationTypes.map(publicationType => returnPublicationTypeJSON(publicationType));
    return res.status(200).send({
        ok: true,
        publicationTypes_array
    });
}));
export { publicationTypeRoutes };
