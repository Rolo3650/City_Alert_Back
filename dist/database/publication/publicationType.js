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
var _PublicationTypeDB_con;
import { returnPublicationType } from "../../helpers/publication/publicationType.js";
import { con } from "../connection.js";
class PublicationTypeDB {
    constructor() {
        _PublicationTypeDB_con.set(this, void 0);
        this.getPublicationTypes = () => {
            const promise = new Promise((resolve) => {
                __classPrivateFieldGet(this, _PublicationTypeDB_con, "f").query(`
        SELECT * FROM cpublicationtype
        ORDER BY \`id_publication_type\` DESC
      ;`, (error, result) => {
                    if (error) {
                        console.error(error);
                    }
                    else {
                        if (result) {
                            let publicationTypes = result.map((data) => returnPublicationType(data));
                            resolve(publicationTypes);
                        }
                        ;
                    }
                    ;
                });
            });
            return promise;
        };
        this.getPublicationType = (id) => {
            const promise = new Promise((resolve) => {
                __classPrivateFieldGet(this, _PublicationTypeDB_con, "f").query(`
        SELECT * FROM cpublicationtype
        WHERE \`id_publication_type\` = ${id}
        ORDER BY \`id_publication_type\` DESC
      ;`, (error, result) => {
                    if (error) {
                        console.error(error);
                    }
                    else {
                        if (result) {
                            let publicationTypes = result.map((data) => returnPublicationType(data))[0];
                            resolve(publicationTypes);
                        }
                        ;
                    }
                    ;
                });
            });
            return promise;
        };
        __classPrivateFieldSet(this, _PublicationTypeDB_con, con, "f");
    }
}
_PublicationTypeDB_con = new WeakMap();
;
export { PublicationTypeDB };
