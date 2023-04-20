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
var _PublicationDB_con;
import moment from "moment";
import { returnPublication } from "../../helpers/publication/publication.js";
import { con } from "../connection.js";
class PublicationDB {
    constructor() {
        _PublicationDB_con.set(this, void 0);
        this.getPublications = () => {
            const promise = new Promise((resolve) => {
                __classPrivateFieldGet(this, _PublicationDB_con, "f").query(`
        SELECT * FROM mpublication AS pu
        INNER JOIN cpublicationtype AS pt ON pu.id_publication_type = pt.id_publication_type
        INNER JOIN muser AS us ON pu.id_user = us.id_user
        INNER JOIN msettlement AS stl ON pu.id_settlement = stl.id_settlement
        INNER JOIN cpostalcode AS pc ON stl.id_zip_pc = pc.zip_pc
        INNER JOIN cstate AS st ON pc.id_state = st.id_state
        INNER JOIN cmunicipality AS mu ON pc.id_municipality = mu.id_municipality
        INNER JOIN csettlementtype AS stl_type ON stl.id_settlement_type = stl_type.id_settlement_type
        ORDER BY \`id_publication\` DESC
      ;`, (error, result) => {
                    if (error) {
                        console.error(error);
                    }
                    else {
                        if (result) {
                            let publications = result.map((data) => returnPublication(data));
                            resolve(publications);
                        }
                        ;
                    }
                    ;
                });
            });
            return promise;
        };
        this.getPublication = (id) => {
            const promise = new Promise((resolve) => {
                __classPrivateFieldGet(this, _PublicationDB_con, "f").query(`
        SELECT * FROM mpublication AS pu
        INNER JOIN cpublicationtype AS pt ON pu.id_publication_type = pt.id_publication_type
        INNER JOIN muser AS us ON pu.id_user = us.id_user
        INNER JOIN msettlement AS stl ON pu.id_settlement = stl.id_settlement
        INNER JOIN cpostalcode AS pc ON stl.id_zip_pc = pc.zip_pc
        INNER JOIN cstate AS st ON pc.id_state = st.id_state
        INNER JOIN cmunicipality AS mu ON pc.id_municipality = mu.id_municipality
        INNER JOIN csettlementtype AS stl_type ON stl.id_settlement_type = stl_type.id_settlement_type
        WHERE pu.id_publication = ${id}
        ORDER BY 'id_publication' DESC
      ;`, (error, result) => {
                    if (error) {
                        console.error(error);
                    }
                    else {
                        if (result) {
                            let publication = result.map((data) => returnPublication(data))[0];
                            resolve(publication);
                        }
                        ;
                    }
                    ;
                });
            });
            return promise;
        };
        this.getLastPublication = () => {
            const promise = new Promise((resolve) => {
                __classPrivateFieldGet(this, _PublicationDB_con, "f").query(`
        SELECT * FROM mpublication AS pu
        INNER JOIN cpublicationtype AS pt ON pu.id_publication_type = pt.id_publication_type
        INNER JOIN muser AS us ON pu.id_user = us.id_user
        INNER JOIN msettlement AS stl ON pu.id_settlement = stl.id_settlement
        INNER JOIN cpostalcode AS pc ON stl.id_zip_pc = pc.zip_pc
        INNER JOIN cstate AS st ON pc.id_state = st.id_state
        INNER JOIN cmunicipality AS mu ON pc.id_municipality = mu.id_municipality
        INNER JOIN csettlementtype AS stl_type ON stl.id_settlement_type = stl_type.id_settlement_type
        ORDER BY \`id_publication\` DESC
        LIMIT 1
      ;`, (error, result) => {
                    if (error) {
                        console.error(error);
                    }
                    else {
                        if (result) {
                            let publications = result.map((data) => returnPublication(data));
                            resolve(publications);
                        }
                        ;
                    }
                    ;
                });
            });
            return promise;
        };
        this.createPublication = (publication) => {
            const promise = new Promise((resolve) => {
                var _a, _b, _c;
                __classPrivateFieldGet(this, _PublicationDB_con, "f").query(`
      INSERT INTO mpublication (
        \`id_publication\`,
        \`description\`,
        \`date\`,
        \`deleted\`,
        \`solved\`,
        \`id_publication_type\`,
        \`id_user\`,
        \`id_settlement\`)
        VALUES (
        '${publication === null || publication === void 0 ? void 0 : publication.getIdPublication()}',
        '${publication === null || publication === void 0 ? void 0 : publication.getDescription()}',
        '${moment(publication === null || publication === void 0 ? void 0 : publication.getDate()).format("YYYY-MM-DD")}',
        '${'0'}',
        '${'0'}',
        '${(_a = publication === null || publication === void 0 ? void 0 : publication.getPublicationType()) === null || _a === void 0 ? void 0 : _a.getIdPublicationType()}',
        '${(_b = publication === null || publication === void 0 ? void 0 : publication.getUser()) === null || _b === void 0 ? void 0 : _b.getIdUser()}',
        '${(_c = publication === null || publication === void 0 ? void 0 : publication.getSettlement()) === null || _c === void 0 ? void 0 : _c.getIdSettlement()}')
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
        __classPrivateFieldSet(this, _PublicationDB_con, con, "f");
    }
}
_PublicationDB_con = new WeakMap();
;
export { PublicationDB };
