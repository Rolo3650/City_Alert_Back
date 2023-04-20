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
import { PersonDB } from '../../database/user/person.js';
import { middleware } from '../../middleware/index.js';
const personRoutes = express();
const personbd = new PersonDB();
personRoutes.get('/get-persons', middleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const persons = yield personbd.getPersons();
    const persons_array = persons.map(person => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
        return ({
            id_person: person.getIdPerson(),
            name: person.getName(),
            last_name: person.getLastName(),
            birthday: person.getBirthday(),
            sex: {
                id_sex: (_a = person.getSex()) === null || _a === void 0 ? void 0 : _a.getIdSex(),
                sex: (_b = person.getSex()) === null || _b === void 0 ? void 0 : _b.getSex()
            },
            settlement: {
                name: (_c = person.getSettlement()) === null || _c === void 0 ? void 0 : _c.getName(),
                pc: {
                    id_pc: (_e = (_d = person.getSettlement()) === null || _d === void 0 ? void 0 : _d.getZipPC()) === null || _e === void 0 ? void 0 : _e.getIdPC(),
                    state: {
                        id_state: (_h = (_g = (_f = person.getSettlement()) === null || _f === void 0 ? void 0 : _f.getZipPC()) === null || _g === void 0 ? void 0 : _g.getState()) === null || _h === void 0 ? void 0 : _h.getIdState(),
                        state: (_l = (_k = (_j = person.getSettlement()) === null || _j === void 0 ? void 0 : _j.getZipPC()) === null || _k === void 0 ? void 0 : _k.getState()) === null || _l === void 0 ? void 0 : _l.getState()
                    },
                    municipality: {
                        id_municipality: (_p = (_o = (_m = person.getSettlement()) === null || _m === void 0 ? void 0 : _m.getZipPC()) === null || _o === void 0 ? void 0 : _o.getMunicipality()) === null || _p === void 0 ? void 0 : _p.getIdMunicipality(),
                        municipality: (_s = (_r = (_q = person.getSettlement()) === null || _q === void 0 ? void 0 : _q.getZipPC()) === null || _r === void 0 ? void 0 : _r.getMunicipality()) === null || _s === void 0 ? void 0 : _s.getMunicipality()
                    }
                },
                settlement: {
                    id_settllement_type: (_u = (_t = person.getSettlement()) === null || _t === void 0 ? void 0 : _t.getSettlementType()) === null || _u === void 0 ? void 0 : _u.getIdSettlementType(),
                    settllement_type: (_w = (_v = person.getSettlement()) === null || _v === void 0 ? void 0 : _v.getSettlementType()) === null || _w === void 0 ? void 0 : _w.getSettlementType()
                }
            }
        });
    });
    return res.status(200).send({
        ok: true,
        persons_array
    });
}));
export { personRoutes };
