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
import { UserTypeDB } from '../../database/user/userType.js';
import { middleware } from '../../middleware/index.js';
const userTypeRoutes = express();
const userTypebd = new UserTypeDB();
userTypeRoutes.get('/get-user-types', middleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userTypes = yield userTypebd.getUserTypes();
    const userTypes_array = userTypes.map(userType => ({
        id_userType: userType.getIdUserType(),
        userType: userType.getUserType(),
    }));
    return res.status(200).send({
        ok: true,
        userTypes_array
    });
}));
export { userTypeRoutes };
