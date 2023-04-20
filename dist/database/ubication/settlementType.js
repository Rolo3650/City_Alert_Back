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
var _SettlementTypeDB_con;
import { SettlementType } from "../../classes/ubication/settlementType.js";
import { con } from "../connection.js";
class SettlementTypeDB {
    constructor() {
        _SettlementTypeDB_con.set(this, void 0);
        this.getSettlementTypes = () => {
            const promise = new Promise((resolve) => {
                __classPrivateFieldGet(this, _SettlementTypeDB_con, "f").query(`
        SELECT * FROM csettlementtype
        ORDER BY 'id_settlement_type' DESC
      ;`, (error, result) => {
                    if (error) {
                        console.error(error);
                    }
                    else {
                        if (result) {
                            let settlement_types = result.map((data) => {
                                return new SettlementType(data.id_settlement_type, data.settlement_type);
                            });
                            resolve(settlement_types);
                        }
                        ;
                    }
                    ;
                });
            });
            return promise;
        };
        __classPrivateFieldSet(this, _SettlementTypeDB_con, con, "f");
    }
}
_SettlementTypeDB_con = new WeakMap();
;
export { SettlementTypeDB };
