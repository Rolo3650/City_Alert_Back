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
var _StateDB_con;
import { State } from "../../classes/ubication/state.js";
import { con } from "../connection.js";
class StateDB {
    constructor() {
        _StateDB_con.set(this, void 0);
        this.getStates = () => {
            const promise = new Promise((resolve) => {
                __classPrivateFieldGet(this, _StateDB_con, "f").query(`
        SELECT * FROM cstate
        ORDER BY 'id_state' DESC
      ;`, (error, result) => {
                    if (error) {
                        console.error(error);
                    }
                    else {
                        if (result) {
                            let states = result.map((data) => {
                                return new State(data.id_state, data.state);
                            });
                            resolve(states);
                        }
                        ;
                    }
                    ;
                });
            });
            return promise;
        };
        __classPrivateFieldSet(this, _StateDB_con, con, "f");
    }
}
_StateDB_con = new WeakMap();
;
export { StateDB };
