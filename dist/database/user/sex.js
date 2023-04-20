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
var _SexDB_con;
import { returnSex } from "../../helpers/user/sex.js";
import { con } from "../connection.js";
class SexDB {
    constructor() {
        _SexDB_con.set(this, void 0);
        this.getSexs = () => {
            const promise = new Promise((resolve) => {
                __classPrivateFieldGet(this, _SexDB_con, "f").query(`
        SELECT * FROM csex
        ORDER BY \`id_sex\` ASC
      ;`, (error, result) => {
                    if (error) {
                        console.error(error);
                    }
                    else {
                        if (result) {
                            let sexs = result.map((data) => returnSex(data));
                            resolve(sexs);
                        }
                        ;
                    }
                    ;
                });
            });
            return promise;
        };
        this.getSex = (id) => {
            const promise = new Promise((resolve) => {
                __classPrivateFieldGet(this, _SexDB_con, "f").query(`
        SELECT * FROM csex
        WHERE \`id_sex\` = ${id}
        ORDER BY \`id_sex\` DESC
      ;`, (error, result) => {
                    if (error) {
                        console.error(error);
                    }
                    else {
                        if (result) {
                            let sex = result.map((data) => returnSex(data))[0];
                            resolve(sex);
                        }
                        ;
                    }
                    ;
                });
            });
            return promise;
        };
        __classPrivateFieldSet(this, _SexDB_con, con, "f");
    }
}
_SexDB_con = new WeakMap();
;
export { SexDB };
