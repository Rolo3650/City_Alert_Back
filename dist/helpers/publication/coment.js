import { Coment } from "../../classes/publication/coment.js";
import { Municipality } from "../../classes/ubication/municipality.js";
import { PostalCode } from "../../classes/ubication/postalCode.js";
import { Settlement } from "../../classes/ubication/settlement.js";
import { SettlementType } from "../../classes/ubication/settlementType.js";
import { State } from "../../classes/ubication/state.js";
import { Person } from "../../classes/user/person.js";
import { Sex } from "../../classes/user/sex.js";
import { User } from "../../classes/user/user.js";
import { UserType } from "../../classes/user/userType.js";
const returnComentJSON = (coment) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32;
    return {
        id_coment: coment.getIdComent(),
        coment: coment.getComent(),
        date: coment.getDate(),
        deleted: coment.getDeleted(),
        user: {
            id_user: (_a = coment.getUser()) === null || _a === void 0 ? void 0 : _a.getIdUser(),
            email: (_b = coment.getUser()) === null || _b === void 0 ? void 0 : _b.getEmail(),
            password: (_c = coment.getUser()) === null || _c === void 0 ? void 0 : _c.getPassword(),
            create_date: (_d = coment.getUser()) === null || _d === void 0 ? void 0 : _d.getCreateDate(),
            person: {
                id_person: (_f = (_e = coment.getUser()) === null || _e === void 0 ? void 0 : _e.getPerson()) === null || _f === void 0 ? void 0 : _f.getIdPerson(),
                name: (_h = (_g = coment.getUser()) === null || _g === void 0 ? void 0 : _g.getPerson()) === null || _h === void 0 ? void 0 : _h.getName(),
                last_name: (_k = (_j = coment.getUser()) === null || _j === void 0 ? void 0 : _j.getPerson()) === null || _k === void 0 ? void 0 : _k.getLastName(),
                birthday: (_m = (_l = coment.getUser()) === null || _l === void 0 ? void 0 : _l.getPerson()) === null || _m === void 0 ? void 0 : _m.getBirthday(),
                sex: {
                    id_sex: (_q = (_p = (_o = coment.getUser()) === null || _o === void 0 ? void 0 : _o.getPerson()) === null || _p === void 0 ? void 0 : _p.getSex()) === null || _q === void 0 ? void 0 : _q.getIdSex(),
                    sex: (_t = (_s = (_r = coment.getUser()) === null || _r === void 0 ? void 0 : _r.getPerson()) === null || _s === void 0 ? void 0 : _s.getSex()) === null || _t === void 0 ? void 0 : _t.getSex()
                },
                settlement: {
                    name: (_w = (_v = (_u = coment.getUser()) === null || _u === void 0 ? void 0 : _u.getPerson()) === null || _v === void 0 ? void 0 : _v.getSettlement()) === null || _w === void 0 ? void 0 : _w.getName(),
                    pc: {
                        id_pc: (_0 = (_z = (_y = (_x = coment.getUser()) === null || _x === void 0 ? void 0 : _x.getPerson()) === null || _y === void 0 ? void 0 : _y.getSettlement()) === null || _z === void 0 ? void 0 : _z.getZipPC()) === null || _0 === void 0 ? void 0 : _0.getIdPC(),
                        state: {
                            id_state: (_5 = (_4 = (_3 = (_2 = (_1 = coment.getUser()) === null || _1 === void 0 ? void 0 : _1.getPerson()) === null || _2 === void 0 ? void 0 : _2.getSettlement()) === null || _3 === void 0 ? void 0 : _3.getZipPC()) === null || _4 === void 0 ? void 0 : _4.getState()) === null || _5 === void 0 ? void 0 : _5.getIdState(),
                            state: (_10 = (_9 = (_8 = (_7 = (_6 = coment.getUser()) === null || _6 === void 0 ? void 0 : _6.getPerson()) === null || _7 === void 0 ? void 0 : _7.getSettlement()) === null || _8 === void 0 ? void 0 : _8.getZipPC()) === null || _9 === void 0 ? void 0 : _9.getState()) === null || _10 === void 0 ? void 0 : _10.getState()
                        },
                        municipality: {
                            id_municipality: (_15 = (_14 = (_13 = (_12 = (_11 = coment.getUser()) === null || _11 === void 0 ? void 0 : _11.getPerson()) === null || _12 === void 0 ? void 0 : _12.getSettlement()) === null || _13 === void 0 ? void 0 : _13.getZipPC()) === null || _14 === void 0 ? void 0 : _14.getMunicipality()) === null || _15 === void 0 ? void 0 : _15.getIdMunicipality(),
                            municipality: (_20 = (_19 = (_18 = (_17 = (_16 = coment.getUser()) === null || _16 === void 0 ? void 0 : _16.getPerson()) === null || _17 === void 0 ? void 0 : _17.getSettlement()) === null || _18 === void 0 ? void 0 : _18.getZipPC()) === null || _19 === void 0 ? void 0 : _19.getMunicipality()) === null || _20 === void 0 ? void 0 : _20.getMunicipality()
                        }
                    },
                    settlement: {
                        id_settllement_type: (_24 = (_23 = (_22 = (_21 = coment.getUser()) === null || _21 === void 0 ? void 0 : _21.getPerson()) === null || _22 === void 0 ? void 0 : _22.getSettlement()) === null || _23 === void 0 ? void 0 : _23.getSettlementType()) === null || _24 === void 0 ? void 0 : _24.getIdSettlementType(),
                        settllement_type: (_28 = (_27 = (_26 = (_25 = coment.getUser()) === null || _25 === void 0 ? void 0 : _25.getPerson()) === null || _26 === void 0 ? void 0 : _26.getSettlement()) === null || _27 === void 0 ? void 0 : _27.getSettlementType()) === null || _28 === void 0 ? void 0 : _28.getSettlementType()
                    }
                }
            },
            user_type: {
                id_user_type: (_30 = (_29 = coment.getUser()) === null || _29 === void 0 ? void 0 : _29.getUserType()) === null || _30 === void 0 ? void 0 : _30.getIdUserType(),
                user_type: (_32 = (_31 = coment.getUser()) === null || _31 === void 0 ? void 0 : _31.getUserType()) === null || _32 === void 0 ? void 0 : _32.getUserType()
            }
        }
    };
};
const returnComent = (data) => {
    const st = new State(data.id_state, data.state);
    const mn = new Municipality(data.id_municipality, data.municipality);
    const pc = new PostalCode(data.zip_pc, st, mn);
    const stl_type = new SettlementType(data.id_settlement_type, data.settlement_type);
    const stl = new Settlement(data.id_settlement, data.settlement, pc, stl_type);
    const sex = new Sex(data.id_sex, data.sex);
    const pe = new Person(data.id_person, data.name, data.last_name, new Date(data.birthday), sex, stl);
    const us_type = new UserType(data.id_user_type, data.user_type);
    const us = new User(data.id_user, data.email, data.password, new Date(data.create_date), pe, us_type);
    return new Coment(data.id_coment, data.coment, new Date(data.date), data.deleted ? true : false, us);
};
export { returnComentJSON, returnComent };
