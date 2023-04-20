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
var _PostalCodeDB_con;
import { returnPostalCode } from "../../helpers/ubication/postalCode.js";
import { con } from "../connection.js";
class PostalCodeDB {
    constructor() {
        _PostalCodeDB_con.set(this, void 0);
        this.getPostalCodes = () => {
            const promise = new Promise((resolve) => {
                __classPrivateFieldGet(this, _PostalCodeDB_con, "f").query(`
        SELECT * FROM cpostalcode AS pc
        INNER JOIN cstate AS st ON pc.id_state = st.id_state
        INNER JOIN cmunicipality AS mu ON pc.id_municipality = mu.id_municipality
        ORDER BY 'zip_pc' DESC
      ;`, (error, result) => {
                    if (error) {
                        console.error(error);
                    }
                    else {
                        if (result) {
                            let postalCodes = result.map((data) => returnPostalCode(data));
                            resolve(postalCodes);
                        }
                        ;
                    }
                    ;
                });
            });
            return promise;
        };
        this.getPostalCodesByState = (id) => {
            const promise = new Promise((resolve) => {
                __classPrivateFieldGet(this, _PostalCodeDB_con, "f").query(`
        SELECT * FROM cpostalcode AS pc
        INNER JOIN cstate AS st ON pc.id_state = st.id_state
        INNER JOIN cmunicipality AS mu ON pc.id_municipality = mu.id_municipality
        WHERE pc.id_state = ${id}
        ORDER BY 'zip_pc' DESC
      ;`, (error, result) => {
                    if (error) {
                        console.error(error);
                    }
                    else {
                        if (result) {
                            let postalCodes = result.map((data) => returnPostalCode(data));
                            resolve(postalCodes);
                        }
                        ;
                    }
                    ;
                });
            });
            return promise;
        };
        __classPrivateFieldSet(this, _PostalCodeDB_con, con, "f");
    }
}
_PostalCodeDB_con = new WeakMap();
;
export { PostalCodeDB };
