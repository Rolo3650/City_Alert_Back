var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ReactionDB_con;
import { Reaction } from "../../classes/publication/reaction.js";
import { Municipality } from "../../classes/ubication/municipality.js";
import { PostalCode } from "../../classes/ubication/postalCode.js";
import { Settlement } from "../../classes/ubication/settlement.js";
import { SettlementType } from "../../classes/ubication/settlementType.js";
import { State } from "../../classes/ubication/state.js";
import { Person } from "../../classes/user/person.js";
import { Sex } from "../../classes/user/sex.js";
import { User } from "../../classes/user/user.js";
import { UserType } from "../../classes/user/userType.js";
import { con } from "../connection.js";
class ReactionDB {
    constructor() {
        _ReactionDB_con.set(this, void 0);
        this.getReactions = () => {
            const promise = new Promise((resolve) => {
                __classPrivateFieldGet(this, _ReactionDB_con, "f").query(`
      SELECT * FROM mreaction AS cm
      INNER JOIN muser AS us ON cm.id_user = us.id_user
      INNER JOIN cusertype AS cu ON us.id_user_type = cu.id_user_type
      INNER JOIN mperson AS pe ON us.id_person = pe.id_person
      INNER JOIN csex AS sx ON pe.id_sex = sx.id_sex
      INNER JOIN msettlement AS stl ON pe.id_settlement = stl.id_settlement
      INNER JOIN cpostalcode AS pc ON stl.id_zip_pc = pc.zip_pc
      INNER JOIN cstate AS st ON pc.id_state = st.id_state
      INNER JOIN cmunicipality AS mu ON pc.id_municipality = mu.id_municipality
      INNER JOIN csettlementtype AS stl_type ON stl.id_settlement_type = stl_type.id_settlement_type
      ORDER BY 'id_reaction' DESC
      ;`, (error, result) => {
                    if (error) {
                        console.error(error);
                    }
                    else {
                        if (result) {
                            let reactions = result.map((data) => {
                                const st = new State(data.id_state, data.state);
                                const mn = new Municipality(data.id_municipality, data.municipality);
                                const pc = new PostalCode(data.zip_pc, st, mn);
                                const stl_type = new SettlementType(data.id_settlement_type, data.settlement_type);
                                const stl = new Settlement(data.id_settlement, data.settlement, pc, stl_type);
                                const sex = new Sex(data.id_sex, data.sex);
                                const pe = new Person(data.id_person, data.name, data.last_name, new Date(data.birthday), sex, stl);
                                const us_type = new UserType(data.id_user_type, data.user_type);
                                const us = new User(data.id_user, data.email, data.password, new Date(data.create_date), pe, us_type);
                                return new Reaction(data.id_reaction, us, data.reacted ? true : false);
                            });
                            resolve(reactions);
                        }
                        ;
                    }
                    ;
                });
            });
            return promise;
        };
        this.getReactionsPerPublication = (id) => {
            const promise = new Promise((resolve) => {
                __classPrivateFieldGet(this, _ReactionDB_con, "f").query(`
      SELECT * FROM mreaction AS cm
      INNER JOIN muser AS us ON cm.id_user = us.id_user
      INNER JOIN cusertype AS cu ON us.id_user_type = cu.id_user_type
      INNER JOIN mperson AS pe ON us.id_person = pe.id_person
      INNER JOIN csex AS sx ON pe.id_sex = sx.id_sex
      INNER JOIN msettlement AS stl ON pe.id_settlement = stl.id_settlement
      INNER JOIN cpostalcode AS pc ON stl.id_zip_pc = pc.zip_pc
      INNER JOIN cstate AS st ON pc.id_state = st.id_state
      INNER JOIN cmunicipality AS mu ON pc.id_municipality = mu.id_municipality
      INNER JOIN csettlementtype AS stl_type ON stl.id_settlement_type = stl_type.id_settlement_type
      WHERE cm.id_publication = ${id}
      ORDER BY 'id_reaction' DESC
      ;`, (error, result) => {
                    if (error) {
                        console.error(error);
                    }
                    else {
                        if (result) {
                            let reactions = result.map((data) => {
                                const st = new State(data.id_state, data.state);
                                const mn = new Municipality(data.id_municipality, data.municipality);
                                const pc = new PostalCode(data.zip_pc, st, mn);
                                const stl_type = new SettlementType(data.id_settlement_type, data.settlement_type);
                                const stl = new Settlement(data.id_settlement, data.settlement, pc, stl_type);
                                const sex = new Sex(data.id_sex, data.sex);
                                const pe = new Person(data.id_person, data.name, data.last_name, new Date(data.birthday), sex, stl);
                                const us_type = new UserType(data.id_user_type, data.user_type);
                                const us = new User(data.id_user, data.email, data.password, new Date(data.create_date), pe, us_type);
                                return new Reaction(data.id_reaction, us, data.reacted ? true : false);
                            });
                            resolve(reactions);
                        }
                        ;
                    }
                    ;
                });
            });
            return promise;
        };
        __classPrivateFieldSet(this, _ReactionDB_con, con, "f");
    }
}
_ReactionDB_con = new WeakMap();
;
export { ReactionDB };
