var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import bcrypt from 'bcryptjs';
import { PersonDB } from '../../database/user/person.js';
import { UserDB } from '../../database/user/user.js';
import { returnUser, returnUserJSON } from '../../helpers/user/user.js';
import { middleware } from '../../middleware/index.js';
import { SettlementDB } from '../../database/ubication/settlement.js';
import { SexDB } from '../../database/user/sex.js';
const userRoutes = express();
const userdb = new UserDB();
const personbd = new PersonDB();
const settlementbd = new SettlementDB();
const sexbd = new SexDB();
userRoutes.get('/get-users', middleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield userdb.getUsers();
    const users_array = users.map(user => returnUserJSON(user));
    return res.status(200).send({
        ok: true,
        users_array
    });
}));
userRoutes.post('/users-registered', middleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { body } = req;
    if (body === null || body === void 0 ? void 0 : body.email) {
        if (typeof body.email === 'string') {
            const already_exist = yield userdb.userExist(body.email);
            if (already_exist.length == 0) {
                return res.status(200).send({
                    ok: true,
                    message: "User does not exist"
                });
            }
            else {
                return res.status(200).send({
                    ok: false,
                    error: 'User already exists'
                });
            }
        }
        else {
            return res.status(200).send({
                ok: false,
                error: 'Invalid Data'
            });
        }
    }
    else {
        return res.status(200).send({
            ok: false,
            error: 'Mising Data'
        });
    }
}));
userRoutes.post('/sign-up', middleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { body } = req;
    body.create_date = new Date();
    if (body.email && body.name && body.last_name && body.birthday && body.id_sex && body.id_settlement && body.password && body.create_date) {
        if (typeof body.email == 'string' && typeof body.name == 'string' && typeof body.last_name == 'string' && typeof body.birthday == 'string' && typeof body.id_sex == 'number' && typeof body.id_settlement == 'number' && typeof body.password == 'string' && body.create_date instanceof Date) {
            let response = {
                ok: true,
                error: ""
            };
            const settlement = yield settlementbd.getSettlement(body.id_settlement);
            const sex = yield sexbd.getSex(body.id_sex);
            if (!(settlement === null || settlement === void 0 ? void 0 : settlement.getIdSettlement())) {
                response.error = "Settlement does not exist";
                response.ok = false;
            }
            else if (!(sex === null || sex === void 0 ? void 0 : sex.getIdSex())) {
                response.error = "Sex does not exist";
                response.ok = false;
            }
            if (response.ok) {
                const already_exist = yield userdb.userExist(body.email);
                if (already_exist.length == 0) {
                    const last_user = (yield userdb.getLastUser())[0];
                    body.id_person = last_user.getIdUser() + 1;
                    body.id_user = last_user.getIdUser() + 1;
                    body.id_user_type = 2;
                    bcrypt.genSalt(10, (err, Salt) => {
                        if (err) {
                            return res.status(200).send({
                                ok: false,
                                error: "Bcrypt Base Error"
                            });
                        }
                        bcrypt.hash(body.password, Salt, (err, hash) => __awaiter(void 0, void 0, void 0, function* () {
                            if (err) {
                                return res.status(200).send({
                                    ok: false,
                                    error: "Bcrypt Base Error"
                                });
                            }
                            body.password = hash;
                            const new_user = returnUser(body);
                            const save_person = yield personbd.savePerson(new_user.getPerson());
                            if (save_person) {
                                const save_user = yield userdb.saveUser(new_user);
                                if (save_user) {
                                    const response_user = yield userdb.getUser(new_user.getIdUser());
                                    return res.status(200).send({
                                        ok: true,
                                        user: returnUserJSON(response_user)
                                    });
                                }
                                else {
                                    return res.status(200).send({
                                        ok: false,
                                        error: "Data Base Error"
                                    });
                                }
                            }
                            else {
                                return res.status(200).send({
                                    ok: false,
                                    error: "Data Base Error"
                                });
                            }
                        }));
                    });
                }
                else {
                    return res.status(200).send({
                        ok: false,
                        error: "User Already Exist"
                    });
                }
            }
            else {
                return res.status(200).send({
                    ok: false,
                    error: response.error
                });
            }
        }
        else {
            return res.status(200).send({
                ok: false,
                error: "Invalid Data"
            });
        }
    }
    else {
        return res.status(200).send({
            ok: false,
            error: "Missing Data"
        });
    }
}));
userRoutes.post('/sign-in', middleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { body } = req;
    if (body.email && body.password) {
        const already_exist = yield userdb.userExist(body.email);
        if (already_exist.length == 1) {
            const user = yield userdb.getUserEmail(body.email);
            bcrypt.compare(body.password, user.getPassword(), (err, result) => {
                if (result) {
                    return res.status(200).send({
                        ok: true,
                        user: returnUserJSON(user)
                    });
                }
                else {
                    return res.status(200).send({
                        ok: false,
                        error: "Wrong password"
                    });
                }
            });
        }
        else {
            return res.status(200).send({
                ok: false,
                error: "Not Found"
            });
        }
    }
    else {
        return res.status(200).send({
            ok: false,
            error: "Missing Data"
        });
    }
}));
userRoutes.delete("/delete-user", middleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { body } = req;
    if (body.id_user && body.id_person) {
        if (typeof body.id_user == 'number' && typeof body.id_person == 'number') {
            let id_user = body.id_user;
            let user = returnUser(body);
            const deletedUser = yield userdb.deleteUser(user);
            if (deletedUser) {
                const deletedPerson = yield personbd.deletePerson(user.getPerson());
                if (deletedPerson) {
                    return res.status(200).send({
                        ok: true,
                        error: `Deleted user with id ${id_user}`
                    });
                }
                else {
                    return res.status(200).send({
                        ok: false,
                        error: "Data Base Error"
                    });
                }
            }
            else {
                return res.status(200).send({
                    ok: false,
                    error: "Data Base Error"
                });
            }
        }
        else {
            return res.status(200).send({
                ok: false,
                error: "Invalid Data"
            });
        }
    }
    else {
        return res.status(200).send({
            ok: false,
            error: "Missing Params"
        });
    }
}));
export { userRoutes };
