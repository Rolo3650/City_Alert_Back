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
var _UserDB_con;
import moment from "moment";
import { returnUser } from "../../helpers/user/user.js";
import { con } from "../connection.js";
class UserDB {
    constructor() {
        _UserDB_con.set(this, void 0);
        this.getUsers = () => {
            const promise = new Promise((resolve) => {
                __classPrivateFieldGet(this, _UserDB_con, "f").query(`
        SELECT * FROM muser AS us
        INNER JOIN cusertype AS cu ON us.id_user_type = cu.id_user_type
        INNER JOIN mperson AS pe ON us.id_person = pe.id_person
        INNER JOIN csex AS sx ON pe.id_sex = sx.id_sex
        INNER JOIN msettlement AS stl ON pe.id_settlement = stl.id_settlement
        INNER JOIN cpostalcode AS pc ON stl.id_zip_pc = pc.zip_pc
        INNER JOIN cstate AS st ON pc.id_state = st.id_state
        INNER JOIN cmunicipality AS mu ON pc.id_municipality = mu.id_municipality
        INNER JOIN csettlementtype AS stl_type ON stl.id_settlement_type = stl_type.id_settlement_type
        ORDER BY 'id_user' DESC
      ;`, (error, result) => {
                    if (error) {
                        console.error(error);
                    }
                    else {
                        if (result) {
                            let users = result.map((data) => returnUser(data));
                            resolve(users);
                        }
                        ;
                    }
                    ;
                });
            });
            return promise;
        };
        this.getUser = (id) => {
            const promise = new Promise((resolve) => {
                __classPrivateFieldGet(this, _UserDB_con, "f").query(`
        SELECT * FROM muser AS us
        INNER JOIN cusertype AS cu ON us.id_user_type = cu.id_user_type
        INNER JOIN mperson AS pe ON us.id_person = pe.id_person
        INNER JOIN csex AS sx ON pe.id_sex = sx.id_sex
        INNER JOIN msettlement AS stl ON pe.id_settlement = stl.id_settlement
        INNER JOIN cpostalcode AS pc ON stl.id_zip_pc = pc.zip_pc
        INNER JOIN cstate AS st ON pc.id_state = st.id_state
        INNER JOIN cmunicipality AS mu ON pc.id_municipality = mu.id_municipality
        INNER JOIN csettlementtype AS stl_type ON stl.id_settlement_type = stl_type.id_settlement_type
        WHERE us.id_user = ${id}
        ORDER BY 'id_user' DESC
      ;`, (error, result) => {
                    if (error) {
                        console.error(error);
                    }
                    else {
                        if (result) {
                            let users = result.map((data) => returnUser(data))[0];
                            resolve(users);
                        }
                        ;
                    }
                    ;
                });
            });
            return promise;
        };
        this.getUserEmail = (email) => {
            const promise = new Promise((resolve) => {
                __classPrivateFieldGet(this, _UserDB_con, "f").query(`
        SELECT * FROM muser AS us
        INNER JOIN cusertype AS cu ON us.id_user_type = cu.id_user_type
        INNER JOIN mperson AS pe ON us.id_person = pe.id_person
        INNER JOIN csex AS sx ON pe.id_sex = sx.id_sex
        INNER JOIN msettlement AS stl ON pe.id_settlement = stl.id_settlement
        INNER JOIN cpostalcode AS pc ON stl.id_zip_pc = pc.zip_pc
        INNER JOIN cstate AS st ON pc.id_state = st.id_state
        INNER JOIN cmunicipality AS mu ON pc.id_municipality = mu.id_municipality
        INNER JOIN csettlementtype AS stl_type ON stl.id_settlement_type = stl_type.id_settlement_type
        WHERE us.email = "${email}"
        ORDER BY \`id_user\` DESC
      ;`, (error, result) => {
                    if (error) {
                        console.error(error);
                    }
                    else {
                        if (result) {
                            let users = result.map((data) => returnUser(data))[0];
                            resolve(users);
                        }
                        ;
                    }
                    ;
                });
            });
            return promise;
        };
        this.getLastUser = () => {
            const promise = new Promise((resolve) => {
                __classPrivateFieldGet(this, _UserDB_con, "f").query(`
        SELECT * FROM muser AS us
        INNER JOIN cusertype AS cu ON us.id_user_type = cu.id_user_type
        INNER JOIN mperson AS pe ON us.id_person = pe.id_person
        INNER JOIN csex AS sx ON pe.id_sex = sx.id_sex
        INNER JOIN msettlement AS stl ON pe.id_settlement = stl.id_settlement
        INNER JOIN cpostalcode AS pc ON stl.id_zip_pc = pc.zip_pc
        INNER JOIN cstate AS st ON pc.id_state = st.id_state
        INNER JOIN cmunicipality AS mu ON pc.id_municipality = mu.id_municipality
        INNER JOIN csettlementtype AS stl_type ON stl.id_settlement_type = stl_type.id_settlement_type
        ORDER BY \`id_user\` DESC
        LIMIT 1
      ;`, (error, result) => {
                    if (error) {
                        console.error(error);
                    }
                    else {
                        if (result) {
                            let users = result.map((data) => returnUser(data));
                            resolve(users);
                        }
                        ;
                    }
                    ;
                });
            });
            return promise;
        };
        this.userExist = (email) => {
            const promise = new Promise((resolve) => {
                __classPrivateFieldGet(this, _UserDB_con, "f").query(`
        SELECT * FROM muser AS us
        INNER JOIN cusertype AS cu ON us.id_user_type = cu.id_user_type
        INNER JOIN mperson AS pe ON us.id_person = pe.id_person
        INNER JOIN csex AS sx ON pe.id_sex = sx.id_sex
        INNER JOIN msettlement AS stl ON pe.id_settlement = stl.id_settlement
        INNER JOIN cpostalcode AS pc ON stl.id_zip_pc = pc.zip_pc
        INNER JOIN cstate AS st ON pc.id_state = st.id_state
        INNER JOIN cmunicipality AS mu ON pc.id_municipality = mu.id_municipality
        INNER JOIN csettlementtype AS stl_type ON stl.id_settlement_type = stl_type.id_settlement_type
        WHERE us.email = "${email}"
        ORDER BY 'id_user' DESC
        LIMIT 1
      ;`, (error, result) => {
                    if (error) {
                        console.error(error);
                    }
                    else {
                        if (result) {
                            let users = result.map((data) => returnUser(data));
                            resolve(users);
                        }
                        ;
                    }
                    ;
                });
            });
            return promise;
        };
        this.saveUser = (user) => {
            const promise = new Promise((resolve) => {
                var _a, _b;
                __classPrivateFieldGet(this, _UserDB_con, "f").query(`
      INSERT INTO muser (
        \`id_user\`,
        \`email\`,
        \`password\`,
        \`create_date\`,
        \`id_person\`,
        \`id_user_type\`)
        VALUES (
        '${user === null || user === void 0 ? void 0 : user.getIdUser()}',
        '${user === null || user === void 0 ? void 0 : user.getEmail()}',
        '${user === null || user === void 0 ? void 0 : user.getPassword()}',
        '${moment(user === null || user === void 0 ? void 0 : user.getCreateDate()).format("YYYY-MM-DD")}',
        '${(_a = user === null || user === void 0 ? void 0 : user.getPerson()) === null || _a === void 0 ? void 0 : _a.getIdPerson()}',
        '${(_b = user === null || user === void 0 ? void 0 : user.getUserType()) === null || _b === void 0 ? void 0 : _b.getIdUserType()}')
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
        this.deleteUser = (user) => {
            const promise = new Promise((resolve) => {
                __classPrivateFieldGet(this, _UserDB_con, "f").query(`
      DELETE FROM muser WHERE (\`id_user\` = '${user === null || user === void 0 ? void 0 : user.getIdUser()}')
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
        __classPrivateFieldSet(this, _UserDB_con, con, "f");
    }
}
_UserDB_con = new WeakMap();
;
export { UserDB };
