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
var _MunicipalityDB_con;
import { Municipality } from "../../classes/ubication/municipality.js";
import { con } from "../connection.js";
class MunicipalityDB {
    constructor() {
        _MunicipalityDB_con.set(this, void 0);
        this.getMunicipalitys = () => {
            const promise = new Promise((resolve) => {
                __classPrivateFieldGet(this, _MunicipalityDB_con, "f").query(`
        SELECT * FROM cmunicipality
        ORDER BY 'id_municipality' DESC
      ;`, (error, result) => {
                    if (error) {
                        console.error(error);
                    }
                    else {
                        if (result) {
                            let municipalities = result.map((data) => {
                                return new Municipality(data.id_municipality, data.municipality);
                            });
                            resolve(municipalities);
                        }
                        ;
                    }
                    ;
                });
            });
            return promise;
        };
        __classPrivateFieldSet(this, _MunicipalityDB_con, con, "f");
    }
}
_MunicipalityDB_con = new WeakMap();
;
export { MunicipalityDB };
