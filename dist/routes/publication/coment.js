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
import { Publication } from '../../classes/publication/publication.js';
import { ComentDB } from '../../database/publication/coment.js';
import { PublicationDB } from '../../database/publication/publication.js';
import { UserDB } from '../../database/user/user.js';
import { returnComent, returnComentJSON } from '../../helpers/publication/coment.js';
import { middleware } from '../../middleware/index.js';
const comentRoutes = express();
const comentbd = new ComentDB();
const userdb = new UserDB();
const publicationdb = new PublicationDB();
comentRoutes.get('/get-coments', middleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const coments = yield comentbd.getComents();
    const coments_array = coments.map(coment => returnComentJSON(coment));
    return res.status(200).send({
        ok: true,
        coments_array
    });
}));
comentRoutes.post('/create-coment', middleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { body } = req;
    body.date = new Date();
    if (body.coment && body.id_publication && body.id_user) {
        if (typeof body.coment == 'string' && typeof body.id_publication == 'number' && typeof body.id_user == 'number' && body.date instanceof Date) {
            let response = {
                ok: true,
                error: ""
            };
            const user = yield userdb.getUser(body.id_user);
            const publication = yield publicationdb.getPublication(body.id_publication);
            if (!(user === null || user === void 0 ? void 0 : user.getIdUser())) {
                response.error = "User does not exist";
                response.ok = false;
            }
            else if (!(publication === null || publication === void 0 ? void 0 : publication.getIdPublication())) {
                response.error = "Publication does not exist";
                response.ok = false;
            }
            if (!response.ok) {
                return res.status(200).send({
                    ok: false,
                    error: response.error
                });
            }
            else {
                const last_coment = (yield comentbd.getLastComent())[0];
                const id_coment = last_coment.getIdComent() + 1;
                body.id_coment = id_coment;
                const coment = returnComent(body);
                const publication = new Publication(body.id_publication, null, null, null, null, null, null, null, null, null, null);
                // console.log("date", coment.getDate())
                const coment_saved = yield comentbd.saveComent(coment, publication);
                if (coment_saved) {
                    return res.status(200).send({
                        ok: true,
                        coment: body
                    });
                }
                else {
                    return res.status(200).send({
                        ok: false,
                        error: "Data base error"
                    });
                }
            }
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
export { comentRoutes };
