import { Municipality } from "../../classes/ubication/municipality.js";
import { PostalCode } from "../../classes/ubication/postalCode.js";
import { Settlement } from "../../classes/ubication/settlement.js";
import { SettlementType } from "../../classes/ubication/settlementType.js";
import { State } from "../../classes/ubication/state.js";
import { Person } from "../../classes/user/person.js";
import { Sex } from "../../classes/user/sex.js";
import { User } from "../../classes/user/user.js";
import { UserType } from "../../classes/user/userType.js";
const returnUserJSON = (user) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14;
    return {
        id_user: user === null || user === void 0 ? void 0 : user.getIdUser(),
        email: user === null || user === void 0 ? void 0 : user.getEmail(),
        password: user === null || user === void 0 ? void 0 : user.getPassword(),
        create_date: user === null || user === void 0 ? void 0 : user.getCreateDate(),
        person: {
            id_person: (_a = user === null || user === void 0 ? void 0 : user.getPerson()) === null || _a === void 0 ? void 0 : _a.getIdPerson(),
            name: (_b = user === null || user === void 0 ? void 0 : user.getPerson()) === null || _b === void 0 ? void 0 : _b.getName(),
            last_name: (_c = user === null || user === void 0 ? void 0 : user.getPerson()) === null || _c === void 0 ? void 0 : _c.getLastName(),
            birthday: (_d = user === null || user === void 0 ? void 0 : user.getPerson()) === null || _d === void 0 ? void 0 : _d.getBirthday(),
            sex: {
                id_sex: (_f = (_e = user === null || user === void 0 ? void 0 : user.getPerson()) === null || _e === void 0 ? void 0 : _e.getSex()) === null || _f === void 0 ? void 0 : _f.getIdSex(),
                sex: (_h = (_g = user === null || user === void 0 ? void 0 : user.getPerson()) === null || _g === void 0 ? void 0 : _g.getSex()) === null || _h === void 0 ? void 0 : _h.getSex()
            },
            settlement: {
                id_settlement: (_k = (_j = user === null || user === void 0 ? void 0 : user.getPerson()) === null || _j === void 0 ? void 0 : _j.getSettlement()) === null || _k === void 0 ? void 0 : _k.getIdSettlement(),
                name: (_m = (_l = user === null || user === void 0 ? void 0 : user.getPerson()) === null || _l === void 0 ? void 0 : _l.getSettlement()) === null || _m === void 0 ? void 0 : _m.getName(),
                pc: {
                    id_pc: (_q = (_p = (_o = user === null || user === void 0 ? void 0 : user.getPerson()) === null || _o === void 0 ? void 0 : _o.getSettlement()) === null || _p === void 0 ? void 0 : _p.getZipPC()) === null || _q === void 0 ? void 0 : _q.getIdPC(),
                    state: {
                        id_state: (_u = (_t = (_s = (_r = user === null || user === void 0 ? void 0 : user.getPerson()) === null || _r === void 0 ? void 0 : _r.getSettlement()) === null || _s === void 0 ? void 0 : _s.getZipPC()) === null || _t === void 0 ? void 0 : _t.getState()) === null || _u === void 0 ? void 0 : _u.getIdState(),
                        state: (_y = (_x = (_w = (_v = user === null || user === void 0 ? void 0 : user.getPerson()) === null || _v === void 0 ? void 0 : _v.getSettlement()) === null || _w === void 0 ? void 0 : _w.getZipPC()) === null || _x === void 0 ? void 0 : _x.getState()) === null || _y === void 0 ? void 0 : _y.getState()
                    },
                    municipality: {
                        id_municipality: (_2 = (_1 = (_0 = (_z = user === null || user === void 0 ? void 0 : user.getPerson()) === null || _z === void 0 ? void 0 : _z.getSettlement()) === null || _0 === void 0 ? void 0 : _0.getZipPC()) === null || _1 === void 0 ? void 0 : _1.getMunicipality()) === null || _2 === void 0 ? void 0 : _2.getIdMunicipality(),
                        municipality: (_6 = (_5 = (_4 = (_3 = user === null || user === void 0 ? void 0 : user.getPerson()) === null || _3 === void 0 ? void 0 : _3.getSettlement()) === null || _4 === void 0 ? void 0 : _4.getZipPC()) === null || _5 === void 0 ? void 0 : _5.getMunicipality()) === null || _6 === void 0 ? void 0 : _6.getMunicipality()
                    }
                },
                settlement_type: {
                    id_settllement_type: (_9 = (_8 = (_7 = user === null || user === void 0 ? void 0 : user.getPerson()) === null || _7 === void 0 ? void 0 : _7.getSettlement()) === null || _8 === void 0 ? void 0 : _8.getSettlementType()) === null || _9 === void 0 ? void 0 : _9.getIdSettlementType(),
                    settllement_type: (_12 = (_11 = (_10 = user === null || user === void 0 ? void 0 : user.getPerson()) === null || _10 === void 0 ? void 0 : _10.getSettlement()) === null || _11 === void 0 ? void 0 : _11.getSettlementType()) === null || _12 === void 0 ? void 0 : _12.getSettlementType()
                }
            }
        },
        user_type: {
            id_user_type: (_13 = user === null || user === void 0 ? void 0 : user.getUserType()) === null || _13 === void 0 ? void 0 : _13.getIdUserType(),
            user_type: (_14 = user === null || user === void 0 ? void 0 : user.getUserType()) === null || _14 === void 0 ? void 0 : _14.getUserType()
        }
    };
};
const returnUser = (data) => {
    const st = new State(data.id_state, data.state);
    const mn = new Municipality(data.id_municipality, data.municipality);
    const pc = new PostalCode(data.zip_pc, st, mn);
    const stl_type = new SettlementType(data.id_settlement_type, data.settlement_type);
    const stl = new Settlement(data.id_settlement, data.settlement, pc, stl_type);
    const sex = new Sex(data.id_sex, data.sex);
    const pe = new Person(data.id_person, data.name, data.last_name, new Date(data.birthday), sex, stl);
    const us_type = new UserType(data.id_user_type, data.user_type);
    return new User(data.id_user, data.email, data.password, new Date(data.create_date), pe, us_type);
};
export { returnUserJSON, returnUser };
