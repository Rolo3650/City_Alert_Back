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
var _SettlementDB_con;
import { returnSettlement } from "../../helpers/ubication/settlement.js";
import { con } from "../connection.js";
class SettlementDB {
    constructor() {
        _SettlementDB_con.set(this, void 0);
        this.getSettlements = () => {
            const promise = new Promise((resolve) => {
                __classPrivateFieldGet(this, _SettlementDB_con, "f").query(`
        SELECT * FROM msettlement AS stl
        INNER JOIN cpostalcode AS pc ON stl.id_zip_pc = pc.zip_pc
        INNER JOIN cstate AS st ON pc.id_state = st.id_state
        INNER JOIN cmunicipality AS mu ON pc.id_municipality = mu.id_municipality
        INNER JOIN csettlementtype AS stl_type ON stl.id_settlement_type = stl_type.id_settlement_type
        ORDER BY 'id_settlement' DESC
      ;`, (error, result) => {
                    if (error) {
                        console.error(error);
                    }
                    else {
                        if (result) {
                            let settlements = result.map((data) => returnSettlement(data));
                            resolve(settlements);
                        }
                        ;
                    }
                    ;
                });
            });
            return promise;
        };
        this.getSettlement = (id) => {
            const promise = new Promise((resolve) => {
                __classPrivateFieldGet(this, _SettlementDB_con, "f").query(`
        SELECT * FROM msettlement AS stl
        INNER JOIN cpostalcode AS pc ON stl.id_zip_pc = pc.zip_pc
        INNER JOIN cstate AS st ON pc.id_state = st.id_state
        INNER JOIN cmunicipality AS mu ON pc.id_municipality = mu.id_municipality
        INNER JOIN csettlementtype AS stl_type ON stl.id_settlement_type = stl_type.id_settlement_type
        WHERE stl.id_settlement = ${id}
        ORDER BY 'id_settlement' DESC
      ;`, (error, result) => {
                    if (error) {
                        console.error(error);
                    }
                    else {
                        if (result) {
                            let settlement = result.map((data) => returnSettlement(data))[0];
                            resolve(settlement);
                        }
                        ;
                    }
                    ;
                });
            });
            return promise;
        };
        this.getSettlementsByMunicipality = (id) => {
            const promise = new Promise((resolve) => {
                __classPrivateFieldGet(this, _SettlementDB_con, "f").query(`
        SELECT * FROM msettlement AS stl
        INNER JOIN cpostalcode AS pc ON stl.id_zip_pc = pc.zip_pc
        INNER JOIN cstate AS st ON pc.id_state = st.id_state
        INNER JOIN cmunicipality AS mu ON pc.id_municipality = mu.id_municipality
        INNER JOIN csettlementtype AS stl_type ON stl.id_settlement_type = stl_type.id_settlement_type
        WHERE pc.id_municipality = ${id}
        ORDER BY 'id_settlement' DESC
      ;`, (error, result) => {
                    if (error) {
                        console.error(error);
                    }
                    else {
                        if (result) {
                            let settlements = result.map((data) => returnSettlement(data));
                            resolve(settlements);
                        }
                        ;
                    }
                    ;
                });
            });
            return promise;
        };
        this.getSettlementsByPC = (id) => {
            const promise = new Promise((resolve) => {
                __classPrivateFieldGet(this, _SettlementDB_con, "f").query(`
        SELECT * FROM msettlement AS stl
        INNER JOIN cpostalcode AS pc ON stl.id_zip_pc = pc.zip_pc
        INNER JOIN cstate AS st ON pc.id_state = st.id_state
        INNER JOIN cmunicipality AS mu ON pc.id_municipality = mu.id_municipality
        INNER JOIN csettlementtype AS stl_type ON stl.id_settlement_type = stl_type.id_settlement_type
        WHERE stl.id_zip_pc = ${id}
        ORDER BY 'id_settlement' DESC
      ;`, (error, result) => {
                    if (error) {
                        console.error(error);
                    }
                    else {
                        if (result) {
                            let settlements = result.map((data) => returnSettlement(data));
                            resolve(settlements);
                        }
                        ;
                    }
                    ;
                });
            });
            return promise;
        };
        __classPrivateFieldSet(this, _SettlementDB_con, con, "f");
    }
}
_SettlementDB_con = new WeakMap();
;
export { SettlementDB };
