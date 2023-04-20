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
var _PersonDB_con;
import moment from "moment";
import { Municipality } from "../../classes/ubication/municipality.js";
import { PostalCode } from "../../classes/ubication/postalCode.js";
import { Settlement } from "../../classes/ubication/settlement.js";
import { SettlementType } from "../../classes/ubication/settlementType.js";
import { State } from "../../classes/ubication/state.js";
import { Person } from "../../classes/user/person.js";
import { Sex } from "../../classes/user/sex.js";
import { con } from "../connection.js";
class PersonDB {
    constructor() {
        _PersonDB_con.set(this, void 0);
        this.getPersons = () => {
            const promise = new Promise((resolve) => {
                __classPrivateFieldGet(this, _PersonDB_con, "f").query(`
        SELECT * FROM mperson AS pe
        INNER JOIN csex AS sx ON pe.id_sex = sx.id_sex
        INNER JOIN msettlement AS stl ON pe.id_settlement = stl.id_settlement
        INNER JOIN cpostalcode AS pc ON stl.id_zip_pc = pc.zip_pc
        INNER JOIN cstate AS st ON pc.id_state = st.id_state
        INNER JOIN cmunicipality AS mu ON pc.id_municipality = mu.id_municipality
        INNER JOIN csettlementtype AS stl_type ON stl.id_settlement_type = stl_type.id_settlement_type
        ORDER BY 'id_person' DESC
      ;`, (error, result) => {
                    if (error) {
                        console.error(error);
                    }
                    else {
                        if (result) {
                            let persons = result.map((data) => {
                                const st = new State(data.id_state, data.state);
                                const mn = new Municipality(data.id_municipality, data.municipality);
                                const pc = new PostalCode(data.zip_pc, st, mn);
                                const stl_type = new SettlementType(data.id_settlement_type, data.settlement_type);
                                const stl = new Settlement(data.id_settlement, data.settlement, pc, stl_type);
                                const sex = new Sex(data.id_sex, data.sex);
                                return new Person(data.id_person, data.name, data.last_name, new Date(data.birthday), sex, stl);
                            });
                            resolve(persons);
                        }
                        ;
                    }
                    ;
                });
            });
            return promise;
        };
        this.savePerson = (person) => {
            const promise = new Promise((resolve) => {
                var _a, _b;
                __classPrivateFieldGet(this, _PersonDB_con, "f").query(`
      INSERT INTO mperson(
        \`id_person\`,
        \`name\`,
        \`last_name\`,
        \`birthday\`,
        \`id_sex\`,
        \`id_settlement\`)
        VALUES (
        '${person === null || person === void 0 ? void 0 : person.getIdPerson()}',
        '${person === null || person === void 0 ? void 0 : person.getName()}',
        '${person === null || person === void 0 ? void 0 : person.getLastName()}',
        '${moment(person === null || person === void 0 ? void 0 : person.getBirthday()).format("YYYY-MM-DD")}',
        '${(_a = person === null || person === void 0 ? void 0 : person.getSex()) === null || _a === void 0 ? void 0 : _a.getIdSex()}',
        '${(_b = person === null || person === void 0 ? void 0 : person.getSettlement()) === null || _b === void 0 ? void 0 : _b.getIdSettlement()}')
      ;`, (error, result) => {
                    if (error) {
                        console.error(error);
                    }
                    else {
                        if (result) {
                            if (result.serverStatus == 2) {
                                resolve(true);
                            }
                            else {
                                resolve(false);
                            }
                        }
                        else {
                            resolve(false);
                        }
                        ;
                    }
                    ;
                });
            });
            return promise;
        };
        this.deletePerson = (person) => {
            const promise = new Promise((resolve) => {
                __classPrivateFieldGet(this, _PersonDB_con, "f").query(`
      DELETE FROM mperson WHERE (\`id_person\` = '${person === null || person === void 0 ? void 0 : person.getIdPerson()}')
      ;`, (error, result) => {
                    if (error) {
                        console.error(error);
                        resolve(false);
                    }
                    else {
                        if (result) {
                            if (result.serverStatus == 2) {
                                resolve(true);
                            }
                            else {
                                resolve(false);
                            }
                        }
                        else {
                            resolve(false);
                        }
                        ;
                    }
                    ;
                });
            });
            return promise;
        };
        __classPrivateFieldSet(this, _PersonDB_con, con, "f");
    }
}
_PersonDB_con = new WeakMap();
;
export { PersonDB };
