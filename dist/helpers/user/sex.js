import { Sex } from "../../classes/user/sex.js";
const returnSexJSON = (sex) => {
    return {
        id_sex: sex === null || sex === void 0 ? void 0 : sex.getIdSex(),
        sex: sex === null || sex === void 0 ? void 0 : sex.getSex(),
    };
};
const returnSex = (data) => {
    return new Sex(data.id_sex, data.sex);
};
export { returnSexJSON, returnSex };
