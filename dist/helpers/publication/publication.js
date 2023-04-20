import { Publication } from "../../classes/publication/publication.js";
import { PublicationType } from "../../classes/publication/publicationType.js";
import { Municipality } from "../../classes/ubication/municipality.js";
import { PostalCode } from "../../classes/ubication/postalCode.js";
import { Settlement } from "../../classes/ubication/settlement.js";
import { SettlementType } from "../../classes/ubication/settlementType.js";
import { State } from "../../classes/ubication/state.js";
import { User } from "../../classes/user/user.js";
const returnPublicationJSON = (publication) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56;
    return {
        id_publication: publication === null || publication === void 0 ? void 0 : publication.getIdPublication(),
        description: publication === null || publication === void 0 ? void 0 : publication.getDescription(),
        date: publication === null || publication === void 0 ? void 0 : publication.getDate(),
        deleted: publication === null || publication === void 0 ? void 0 : publication.getDeleted(),
        solved: publication === null || publication === void 0 ? void 0 : publication.getSolved(),
        publication_type: {
            id_publication_type: (_a = publication === null || publication === void 0 ? void 0 : publication.getPublicationType()) === null || _a === void 0 ? void 0 : _a.getIdPublicationType(),
            publication_type: (_b = publication === null || publication === void 0 ? void 0 : publication.getPublicationType()) === null || _b === void 0 ? void 0 : _b.getPublicationType()
        },
        user: {
            id_user: (_c = publication === null || publication === void 0 ? void 0 : publication.getUser()) === null || _c === void 0 ? void 0 : _c.getIdUser(),
            email: (_d = publication === null || publication === void 0 ? void 0 : publication.getUser()) === null || _d === void 0 ? void 0 : _d.getEmail(),
            password: (_e = publication === null || publication === void 0 ? void 0 : publication.getUser()) === null || _e === void 0 ? void 0 : _e.getPassword(),
            create_date: (_f = publication === null || publication === void 0 ? void 0 : publication.getUser()) === null || _f === void 0 ? void 0 : _f.getCreateDate(),
            person: {
                id_person: (_h = (_g = publication === null || publication === void 0 ? void 0 : publication.getUser()) === null || _g === void 0 ? void 0 : _g.getPerson()) === null || _h === void 0 ? void 0 : _h.getIdPerson(),
                name: (_k = (_j = publication === null || publication === void 0 ? void 0 : publication.getUser()) === null || _j === void 0 ? void 0 : _j.getPerson()) === null || _k === void 0 ? void 0 : _k.getName(),
                last_name: (_m = (_l = publication === null || publication === void 0 ? void 0 : publication.getUser()) === null || _l === void 0 ? void 0 : _l.getPerson()) === null || _m === void 0 ? void 0 : _m.getLastName(),
                birthday: (_p = (_o = publication === null || publication === void 0 ? void 0 : publication.getUser()) === null || _o === void 0 ? void 0 : _o.getPerson()) === null || _p === void 0 ? void 0 : _p.getBirthday(),
                sex: {
                    id_sex: (_s = (_r = (_q = publication === null || publication === void 0 ? void 0 : publication.getUser()) === null || _q === void 0 ? void 0 : _q.getPerson()) === null || _r === void 0 ? void 0 : _r.getSex()) === null || _s === void 0 ? void 0 : _s.getIdSex(),
                    sex: (_v = (_u = (_t = publication === null || publication === void 0 ? void 0 : publication.getUser()) === null || _t === void 0 ? void 0 : _t.getPerson()) === null || _u === void 0 ? void 0 : _u.getSex()) === null || _v === void 0 ? void 0 : _v.getSex()
                },
                settlement: {
                    name: (_y = (_x = (_w = publication === null || publication === void 0 ? void 0 : publication.getUser()) === null || _w === void 0 ? void 0 : _w.getPerson()) === null || _x === void 0 ? void 0 : _x.getSettlement()) === null || _y === void 0 ? void 0 : _y.getName(),
                    pc: {
                        id_pc: (_2 = (_1 = (_0 = (_z = publication === null || publication === void 0 ? void 0 : publication.getUser()) === null || _z === void 0 ? void 0 : _z.getPerson()) === null || _0 === void 0 ? void 0 : _0.getSettlement()) === null || _1 === void 0 ? void 0 : _1.getZipPC()) === null || _2 === void 0 ? void 0 : _2.getIdPC(),
                        state: {
                            id_state: (_7 = (_6 = (_5 = (_4 = (_3 = publication === null || publication === void 0 ? void 0 : publication.getUser()) === null || _3 === void 0 ? void 0 : _3.getPerson()) === null || _4 === void 0 ? void 0 : _4.getSettlement()) === null || _5 === void 0 ? void 0 : _5.getZipPC()) === null || _6 === void 0 ? void 0 : _6.getState()) === null || _7 === void 0 ? void 0 : _7.getIdState(),
                            state: (_12 = (_11 = (_10 = (_9 = (_8 = publication === null || publication === void 0 ? void 0 : publication.getUser()) === null || _8 === void 0 ? void 0 : _8.getPerson()) === null || _9 === void 0 ? void 0 : _9.getSettlement()) === null || _10 === void 0 ? void 0 : _10.getZipPC()) === null || _11 === void 0 ? void 0 : _11.getState()) === null || _12 === void 0 ? void 0 : _12.getState()
                        },
                        municipality: {
                            id_municipality: (_17 = (_16 = (_15 = (_14 = (_13 = publication === null || publication === void 0 ? void 0 : publication.getUser()) === null || _13 === void 0 ? void 0 : _13.getPerson()) === null || _14 === void 0 ? void 0 : _14.getSettlement()) === null || _15 === void 0 ? void 0 : _15.getZipPC()) === null || _16 === void 0 ? void 0 : _16.getMunicipality()) === null || _17 === void 0 ? void 0 : _17.getIdMunicipality(),
                            municipality: (_22 = (_21 = (_20 = (_19 = (_18 = publication === null || publication === void 0 ? void 0 : publication.getUser()) === null || _18 === void 0 ? void 0 : _18.getPerson()) === null || _19 === void 0 ? void 0 : _19.getSettlement()) === null || _20 === void 0 ? void 0 : _20.getZipPC()) === null || _21 === void 0 ? void 0 : _21.getMunicipality()) === null || _22 === void 0 ? void 0 : _22.getMunicipality()
                        }
                    },
                    settlement: {
                        id_settllement_type: (_26 = (_25 = (_24 = (_23 = publication === null || publication === void 0 ? void 0 : publication.getUser()) === null || _23 === void 0 ? void 0 : _23.getPerson()) === null || _24 === void 0 ? void 0 : _24.getSettlement()) === null || _25 === void 0 ? void 0 : _25.getSettlementType()) === null || _26 === void 0 ? void 0 : _26.getIdSettlementType(),
                        settllement_type: (_30 = (_29 = (_28 = (_27 = publication === null || publication === void 0 ? void 0 : publication.getUser()) === null || _27 === void 0 ? void 0 : _27.getPerson()) === null || _28 === void 0 ? void 0 : _28.getSettlement()) === null || _29 === void 0 ? void 0 : _29.getSettlementType()) === null || _30 === void 0 ? void 0 : _30.getSettlementType()
                    }
                }
            },
            user_type: {
                id_user_type: (_32 = (_31 = publication === null || publication === void 0 ? void 0 : publication.getUser()) === null || _31 === void 0 ? void 0 : _31.getUserType()) === null || _32 === void 0 ? void 0 : _32.getIdUserType(),
                user_type: (_34 = (_33 = publication === null || publication === void 0 ? void 0 : publication.getUser()) === null || _33 === void 0 ? void 0 : _33.getUserType()) === null || _34 === void 0 ? void 0 : _34.getUserType()
            }
        },
        settlement: {
            name: (_35 = publication === null || publication === void 0 ? void 0 : publication.getSettlement()) === null || _35 === void 0 ? void 0 : _35.getName(),
            pc: {
                id_pc: (_37 = (_36 = publication === null || publication === void 0 ? void 0 : publication.getSettlement()) === null || _36 === void 0 ? void 0 : _36.getZipPC()) === null || _37 === void 0 ? void 0 : _37.getIdPC(),
                state: {
                    id_state: (_40 = (_39 = (_38 = publication === null || publication === void 0 ? void 0 : publication.getSettlement()) === null || _38 === void 0 ? void 0 : _38.getZipPC()) === null || _39 === void 0 ? void 0 : _39.getState()) === null || _40 === void 0 ? void 0 : _40.getIdState(),
                    state: (_43 = (_42 = (_41 = publication === null || publication === void 0 ? void 0 : publication.getSettlement()) === null || _41 === void 0 ? void 0 : _41.getZipPC()) === null || _42 === void 0 ? void 0 : _42.getState()) === null || _43 === void 0 ? void 0 : _43.getState()
                },
                municipality: {
                    id_municipality: (_46 = (_45 = (_44 = publication === null || publication === void 0 ? void 0 : publication.getSettlement()) === null || _44 === void 0 ? void 0 : _44.getZipPC()) === null || _45 === void 0 ? void 0 : _45.getMunicipality()) === null || _46 === void 0 ? void 0 : _46.getIdMunicipality(),
                    municipality: (_49 = (_48 = (_47 = publication === null || publication === void 0 ? void 0 : publication.getSettlement()) === null || _47 === void 0 ? void 0 : _47.getZipPC()) === null || _48 === void 0 ? void 0 : _48.getMunicipality()) === null || _49 === void 0 ? void 0 : _49.getMunicipality()
                }
            },
            settlement: {
                id_settllement_type: (_51 = (_50 = publication === null || publication === void 0 ? void 0 : publication.getSettlement()) === null || _50 === void 0 ? void 0 : _50.getSettlementType()) === null || _51 === void 0 ? void 0 : _51.getIdSettlementType(),
                settllement_type: (_53 = (_52 = publication === null || publication === void 0 ? void 0 : publication.getSettlement()) === null || _52 === void 0 ? void 0 : _52.getSettlementType()) === null || _53 === void 0 ? void 0 : _53.getSettlementType()
            }
        },
        reactions: (_54 = publication === null || publication === void 0 ? void 0 : publication.getReactions()) === null || _54 === void 0 ? void 0 : _54.map(reaction => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32;
            return ({
                id_reaction: reaction.getIdReaction(),
                user: {
                    id_user: (_a = reaction.getUser()) === null || _a === void 0 ? void 0 : _a.getIdUser(),
                    email: (_b = reaction.getUser()) === null || _b === void 0 ? void 0 : _b.getEmail(),
                    password: (_c = reaction.getUser()) === null || _c === void 0 ? void 0 : _c.getPassword(),
                    create_date: (_d = reaction.getUser()) === null || _d === void 0 ? void 0 : _d.getCreateDate(),
                    person: {
                        id_person: (_f = (_e = reaction.getUser()) === null || _e === void 0 ? void 0 : _e.getPerson()) === null || _f === void 0 ? void 0 : _f.getIdPerson(),
                        name: (_h = (_g = reaction.getUser()) === null || _g === void 0 ? void 0 : _g.getPerson()) === null || _h === void 0 ? void 0 : _h.getName(),
                        last_name: (_k = (_j = reaction.getUser()) === null || _j === void 0 ? void 0 : _j.getPerson()) === null || _k === void 0 ? void 0 : _k.getLastName(),
                        birthday: (_m = (_l = reaction.getUser()) === null || _l === void 0 ? void 0 : _l.getPerson()) === null || _m === void 0 ? void 0 : _m.getBirthday(),
                        sex: {
                            id_sex: (_q = (_p = (_o = reaction.getUser()) === null || _o === void 0 ? void 0 : _o.getPerson()) === null || _p === void 0 ? void 0 : _p.getSex()) === null || _q === void 0 ? void 0 : _q.getIdSex(),
                            sex: (_t = (_s = (_r = reaction.getUser()) === null || _r === void 0 ? void 0 : _r.getPerson()) === null || _s === void 0 ? void 0 : _s.getSex()) === null || _t === void 0 ? void 0 : _t.getSex()
                        },
                        settlement: {
                            name: (_w = (_v = (_u = reaction.getUser()) === null || _u === void 0 ? void 0 : _u.getPerson()) === null || _v === void 0 ? void 0 : _v.getSettlement()) === null || _w === void 0 ? void 0 : _w.getName(),
                            pc: {
                                id_pc: (_0 = (_z = (_y = (_x = reaction.getUser()) === null || _x === void 0 ? void 0 : _x.getPerson()) === null || _y === void 0 ? void 0 : _y.getSettlement()) === null || _z === void 0 ? void 0 : _z.getZipPC()) === null || _0 === void 0 ? void 0 : _0.getIdPC(),
                                state: {
                                    id_state: (_5 = (_4 = (_3 = (_2 = (_1 = reaction.getUser()) === null || _1 === void 0 ? void 0 : _1.getPerson()) === null || _2 === void 0 ? void 0 : _2.getSettlement()) === null || _3 === void 0 ? void 0 : _3.getZipPC()) === null || _4 === void 0 ? void 0 : _4.getState()) === null || _5 === void 0 ? void 0 : _5.getIdState(),
                                    state: (_10 = (_9 = (_8 = (_7 = (_6 = reaction.getUser()) === null || _6 === void 0 ? void 0 : _6.getPerson()) === null || _7 === void 0 ? void 0 : _7.getSettlement()) === null || _8 === void 0 ? void 0 : _8.getZipPC()) === null || _9 === void 0 ? void 0 : _9.getState()) === null || _10 === void 0 ? void 0 : _10.getState()
                                },
                                municipality: {
                                    id_municipality: (_15 = (_14 = (_13 = (_12 = (_11 = reaction.getUser()) === null || _11 === void 0 ? void 0 : _11.getPerson()) === null || _12 === void 0 ? void 0 : _12.getSettlement()) === null || _13 === void 0 ? void 0 : _13.getZipPC()) === null || _14 === void 0 ? void 0 : _14.getMunicipality()) === null || _15 === void 0 ? void 0 : _15.getIdMunicipality(),
                                    municipality: (_20 = (_19 = (_18 = (_17 = (_16 = reaction.getUser()) === null || _16 === void 0 ? void 0 : _16.getPerson()) === null || _17 === void 0 ? void 0 : _17.getSettlement()) === null || _18 === void 0 ? void 0 : _18.getZipPC()) === null || _19 === void 0 ? void 0 : _19.getMunicipality()) === null || _20 === void 0 ? void 0 : _20.getMunicipality()
                                }
                            },
                            settlement: {
                                id_settllement_type: (_24 = (_23 = (_22 = (_21 = reaction.getUser()) === null || _21 === void 0 ? void 0 : _21.getPerson()) === null || _22 === void 0 ? void 0 : _22.getSettlement()) === null || _23 === void 0 ? void 0 : _23.getSettlementType()) === null || _24 === void 0 ? void 0 : _24.getIdSettlementType(),
                                settllement_type: (_28 = (_27 = (_26 = (_25 = reaction.getUser()) === null || _25 === void 0 ? void 0 : _25.getPerson()) === null || _26 === void 0 ? void 0 : _26.getSettlement()) === null || _27 === void 0 ? void 0 : _27.getSettlementType()) === null || _28 === void 0 ? void 0 : _28.getSettlementType()
                            }
                        }
                    },
                    user_type: {
                        id_user_type: (_30 = (_29 = reaction.getUser()) === null || _29 === void 0 ? void 0 : _29.getUserType()) === null || _30 === void 0 ? void 0 : _30.getIdUserType(),
                        user_type: (_32 = (_31 = reaction.getUser()) === null || _31 === void 0 ? void 0 : _31.getUserType()) === null || _32 === void 0 ? void 0 : _32.getUserType()
                    }
                },
                reacted: reaction.getReacted(),
            });
        }),
        coments: (_55 = publication === null || publication === void 0 ? void 0 : publication.getComents()) === null || _55 === void 0 ? void 0 : _55.map(coment => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32;
            return ({
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
            });
        }),
        images: (_56 = publication === null || publication === void 0 ? void 0 : publication.getImages()) === null || _56 === void 0 ? void 0 : _56.map(image => ({
            id_image: image.getIdImage(),
            image: image.getUrl(),
            deleted: image.getDeleted(),
        }))
    };
};
const returnPublication = (data) => {
    const st = new State(data.id_state, data.state);
    const mn = new Municipality(data.id_municipality, data.municipality);
    const pc = new PostalCode(data.zip_pc, st, mn);
    const stl_type = new SettlementType(data.id_settlement_type, data.settlement_type);
    const stl = new Settlement(data.id_settlement, data.settlement, pc, stl_type);
    const pu_type = new PublicationType(data.id_publication_type, data.publication_type);
    const us = new User(data.id_user, null, null, null, null, null);
    return new Publication(data.id_publication, data.description, new Date(data.date), data.deleted ? true : false, data.solved ? true : false, pu_type, us, stl, null, null, null);
};
export { returnPublicationJSON, returnPublication };
