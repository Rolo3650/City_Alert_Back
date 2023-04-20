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
import { PublicationImage } from '../../classes/publication/image.js';
import { ComentDB } from '../../database/publication/coment.js';
import { ImageDB } from '../../database/publication/image.js';
import { PublicationDB } from '../../database/publication/publication.js';
import { PublicationTypeDB } from '../../database/publication/publicationType.js';
import { ReactionDB } from '../../database/publication/reaction.js';
import { SettlementDB } from '../../database/ubication/settlement.js';
import { UserDB } from '../../database/user/user.js';
import { returnPublication, returnPublicationJSON } from '../../helpers/publication/publication.js';
import { middleware } from '../../middleware/index.js';
const publicationRoutes = express();
const publicationbd = new PublicationDB();
const userbd = new UserDB();
const reactionbd = new ReactionDB();
const comentbd = new ComentDB();
const imagebd = new ImageDB();
const settlementbd = new SettlementDB();
const publicationTypebd = new PublicationTypeDB();
publicationRoutes.get('/get-publications', middleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const publications = yield publicationbd.getPublications();
    for (var i = 0; i < publications.length; i++) {
        const user = yield userbd.getUser((_b = (_a = publications[i]) === null || _a === void 0 ? void 0 : _a.getUser()) === null || _b === void 0 ? void 0 : _b.getIdUser());
        const reactions = yield reactionbd.getReactionsPerPublication((_c = publications[i]) === null || _c === void 0 ? void 0 : _c.getIdPublication());
        const coments = yield comentbd.getComentsPerPublication((_d = publications[i]) === null || _d === void 0 ? void 0 : _d.getIdPublication());
        const images = yield imagebd.getImagesPerPublication((_e = publications[i]) === null || _e === void 0 ? void 0 : _e.getIdPublication());
        (_f = publications[i]) === null || _f === void 0 ? void 0 : _f.setUser(user);
        (_g = publications[i]) === null || _g === void 0 ? void 0 : _g.setReactions(reactions);
        (_h = publications[i]) === null || _h === void 0 ? void 0 : _h.setComents(coments);
        (_j = publications[i]) === null || _j === void 0 ? void 0 : _j.setImages(images);
    }
    const publications_array = publications.map((publication) => {
        return returnPublicationJSON(publication);
    });
    return res.status(200).send({
        ok: true,
        publications_array
    });
}));
publicationRoutes.post('/create-publication', middleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _k, _l, _m, _o, _p, _q;
    let { body } = req;
    body.date = new Date();
    if (body.description && body.date && body.id_publication_type && body.id_user && body.id_settlement) {
        if (typeof body.description == 'string' && body.date instanceof Date && typeof body.id_publication_type == 'number' && typeof body.id_user == 'number' && typeof body.id_settlement == 'number') {
            let response = {
                ok: true,
                error: ""
            };
            const user = yield userbd.getUser(body.id_user);
            const settlement = yield settlementbd.getSettlement(body.id_settlement);
            const publicationType = yield publicationTypebd.getPublicationType(body.id_publication_type);
            if (!(user === null || user === void 0 ? void 0 : user.getIdUser())) {
                response.error = "User does not exist";
                response.ok = false;
            }
            else if (!(settlement === null || settlement === void 0 ? void 0 : settlement.getIdSettlement())) {
                response.error = "Settlement does not exist";
                response.ok = false;
            }
            else if (!(publicationType === null || publicationType === void 0 ? void 0 : publicationType.getIdPublicationType())) {
                response.error = "Publication type does not exist";
                response.ok = false;
            }
            if (response.ok) {
                if (((_k = body === null || body === void 0 ? void 0 : body.images) === null || _k === void 0 ? void 0 : _k.length) > 0) {
                    let error_1 = false;
                    (_l = body === null || body === void 0 ? void 0 : body.images) === null || _l === void 0 ? void 0 : _l.forEach((image) => {
                        if (!error_1) {
                            if (!image.url) {
                                error_1 = true;
                            }
                        }
                    });
                    if (error_1) {
                        return res.status(200).send({
                            ok: false,
                            error_1: "Invalid Image URL"
                        });
                    }
                    else {
                        const last_publication = (yield publicationbd.getLastPublication())[0];
                        body.id_publication = last_publication.getIdPublication() + 1;
                        const publication = returnPublication(body);
                        const publication_saved = yield publicationbd.createPublication(publication);
                        let error_2 = false;
                        if (publication_saved) {
                            for (let i = 0; i < ((_m = body === null || body === void 0 ? void 0 : body.images) === null || _m === void 0 ? void 0 : _m.length); i++) {
                                if (!error_2) {
                                    const last_image = (yield imagebd.getLastImage())[0];
                                    const id_image = last_image.getIdImage() + i + 1;
                                    const image = new PublicationImage(id_image, (_o = body === null || body === void 0 ? void 0 : body.images[i]) === null || _o === void 0 ? void 0 : _o.url, false);
                                    const saved_image = yield imagebd.saveImage(image, publication);
                                    if (!saved_image) {
                                        error_2 = true;
                                        return res.status(200).send({
                                            ok: false,
                                            error: "Data Base Error"
                                        });
                                    }
                                }
                            }
                            if (!error_2) {
                                const response_publication = yield publicationbd.getPublication(publication.getIdPublication());
                                const user = yield userbd.getUser((_p = response_publication === null || response_publication === void 0 ? void 0 : response_publication.getUser()) === null || _p === void 0 ? void 0 : _p.getIdUser());
                                const reactions = yield reactionbd.getReactionsPerPublication(response_publication === null || response_publication === void 0 ? void 0 : response_publication.getIdPublication());
                                const coments = yield comentbd.getComentsPerPublication(response_publication === null || response_publication === void 0 ? void 0 : response_publication.getIdPublication());
                                const images = yield imagebd.getImagesPerPublication(response_publication === null || response_publication === void 0 ? void 0 : response_publication.getIdPublication());
                                response_publication === null || response_publication === void 0 ? void 0 : response_publication.setUser(user);
                                response_publication === null || response_publication === void 0 ? void 0 : response_publication.setReactions(reactions);
                                response_publication === null || response_publication === void 0 ? void 0 : response_publication.setComents(coments);
                                response_publication === null || response_publication === void 0 ? void 0 : response_publication.setImages(images);
                                return res.status(200).send({
                                    ok: true,
                                    publication: returnPublicationJSON(response_publication)
                                });
                            }
                        }
                        else {
                            return res.status(200).send({
                                ok: false,
                                error: "Data Base Error"
                            });
                        }
                    }
                }
                else {
                    const last_publication = (yield publicationbd.getLastPublication())[0];
                    body.id_publication = last_publication.getIdPublication() + 1;
                    const publication = returnPublication(body);
                    const publication_saved = yield publicationbd.createPublication(publication);
                    if (publication_saved) {
                        const response_publication = yield publicationbd.getPublication(publication.getIdPublication());
                        const user = yield userbd.getUser((_q = response_publication === null || response_publication === void 0 ? void 0 : response_publication.getUser()) === null || _q === void 0 ? void 0 : _q.getIdUser());
                        const reactions = yield reactionbd.getReactionsPerPublication(response_publication === null || response_publication === void 0 ? void 0 : response_publication.getIdPublication());
                        const coments = yield comentbd.getComentsPerPublication(response_publication === null || response_publication === void 0 ? void 0 : response_publication.getIdPublication());
                        const images = yield imagebd.getImagesPerPublication(response_publication === null || response_publication === void 0 ? void 0 : response_publication.getIdPublication());
                        response_publication === null || response_publication === void 0 ? void 0 : response_publication.setUser(user);
                        response_publication === null || response_publication === void 0 ? void 0 : response_publication.setReactions(reactions);
                        response_publication === null || response_publication === void 0 ? void 0 : response_publication.setComents(coments);
                        response_publication === null || response_publication === void 0 ? void 0 : response_publication.setImages(images);
                        return res.status(200).send({
                            ok: true,
                            publication: returnPublicationJSON(response_publication)
                        });
                    }
                    else {
                        return res.status(200).send({
                            ok: false,
                            error: "Data Base Error"
                        });
                    }
                }
            }
            else {
                return res.status(200).send({
                    ok: false,
                    error: response.error
                });
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
export { publicationRoutes };
