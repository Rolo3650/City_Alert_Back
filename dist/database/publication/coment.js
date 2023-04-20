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
var _ComentDB_con;
import moment from "moment";
import { returnComent } from "../../helpers/publication/coment.js";
import { con } from "../connection.js";
class ComentDB {
    constructor() {
        _ComentDB_con.set(this, void 0);
        this.getComents = () => {
            const promise = new Promise((resolve) => {
                __classPrivateFieldGet(this, _ComentDB_con, "f").query(`
      SELECT * FROM mcoment AS cm
      INNER JOIN muser AS us ON cm.id_user = us.id_user
      INNER JOIN cusertype AS cu ON us.id_user_type = cu.id_user_type
      INNER JOIN mperson AS pe ON us.id_person = pe.id_person
      INNER JOIN csex AS sx ON pe.id_sex = sx.id_sex
      INNER JOIN msettlement AS stl ON pe.id_settlement = stl.id_settlement
      INNER JOIN cpostalcode AS pc ON stl.id_zip_pc = pc.zip_pc
      INNER JOIN cstate AS st ON pc.id_state = st.id_state
      INNER JOIN cmunicipality AS mu ON pc.id_municipality = mu.id_municipality
      INNER JOIN csettlementtype AS stl_type ON stl.id_settlement_type = stl_type.id_settlement_type
      ORDER BY 'id_coment' DESC
      ;`, (error, result) => {
                    if (error) {
                        console.error(error);
                    }
                    else {
                        if (result) {
                            let coments = result.map((data) => returnComent(data));
                            resolve(coments);
                        }
                        ;
                    }
                    ;
                });
            });
            return promise;
        };
        this.getComentsPerPublication = (id) => {
            const promise = new Promise((resolve) => {
                __classPrivateFieldGet(this, _ComentDB_con, "f").query(`
      SELECT * FROM mcoment AS cm
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
      ORDER BY 'id_coment' DESC
      ;`, (error, result) => {
                    if (error) {
                        console.error(error);
                    }
                    else {
                        if (result) {
                            let coments = result.map((data) => returnComent(data));
                            resolve(coments);
                        }
                        ;
                    }
                    ;
                });
            });
            return promise;
        };
        this.getLastComent = () => {
            const promise = new Promise((resolve) => {
                __classPrivateFieldGet(this, _ComentDB_con, "f").query(`
      SELECT * FROM mcoment AS cm
      INNER JOIN muser AS us ON cm.id_user = us.id_user
      INNER JOIN cusertype AS cu ON us.id_user_type = cu.id_user_type
      INNER JOIN mperson AS pe ON us.id_person = pe.id_person
      INNER JOIN csex AS sx ON pe.id_sex = sx.id_sex
      INNER JOIN msettlement AS stl ON pe.id_settlement = stl.id_settlement
      INNER JOIN cpostalcode AS pc ON stl.id_zip_pc = pc.zip_pc
      INNER JOIN cstate AS st ON pc.id_state = st.id_state
      INNER JOIN cmunicipality AS mu ON pc.id_municipality = mu.id_municipality
      INNER JOIN csettlementtype AS stl_type ON stl.id_settlement_type = stl_type.id_settlement_type
      ORDER BY \`id_coment\` DESC
      LIMIT 1
      ;`, (error, result) => {
                    if (error) {
                        console.error(error);
                    }
                    else {
                        if (result) {
                            let coments = result.map((data) => returnComent(data));
                            resolve(coments);
                        }
                        ;
                    }
                    ;
                });
            });
            return promise;
        };
        this.saveComent = (coment, publication) => {
            const promise = new Promise((resolve) => {
                var _a;
                __classPrivateFieldGet(this, _ComentDB_con, "f").query(`
        INSERT INTO mcoment (
        \`id_coment\`,
        \`coment\`,
        \`date\`,
        \`deleted\`,
        \`id_user\`,
        \`id_publication\`)
        VALUES (
        '${coment === null || coment === void 0 ? void 0 : coment.getIdComent()}',
        '${coment === null || coment === void 0 ? void 0 : coment.getComent()}',
        '${moment(coment === null || coment === void 0 ? void 0 : coment.getDate()).format("YYYY-MM-DD hh:mm:ss")}',
        '0',
        '${(_a = coment === null || coment === void 0 ? void 0 : coment.getUser()) === null || _a === void 0 ? void 0 : _a.getIdUser()}',
        '${publication === null || publication === void 0 ? void 0 : publication.getIdPublication()}')
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
        __classPrivateFieldSet(this, _ComentDB_con, con, "f");
    }
}
_ComentDB_con = new WeakMap();
;
export { ComentDB };
