import { Sex } from "../../classes/user/sex.js";

const returnSexJSON = (sex: Sex) => {
  return {
    id_sex: sex.getIdSex(),
    sex: sex.getSex(),
  }
};

const returnSex = (data: any) => {
  return new Sex(data.id_sex, data.sex)
};

export { returnSexJSON, returnSex };
