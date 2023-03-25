import { Sex } from "../../classes/user/sex.js";
import { returnSex } from "../../helpers/user/sex.js";
import { con } from "../connection.js";

class SexDB {

  #con: any;

  constructor() {
    this.#con = con;
  }

  getSexs = () => {
    const promise = new Promise<Sex[]>((resolve) => {
      this.#con.query(`
        SELECT * FROM csex
        ORDER BY \`id_sex\` DESC
      ;`, (error: any, result: any) => {
        if (error) {
          console.error(error);
        } else {
          if (result) {
            let sexs: Sex[] = result.map((data: any) => returnSex(data));

            resolve(sexs);
          };
        };
      });
    });
    return promise;
  }

  getSex = (id: number) => {
    const promise = new Promise<Sex>((resolve) => {
      this.#con.query(`
        SELECT * FROM csex
        WHERE \`id_sex\` = ${id}
        ORDER BY \`id_sex\` DESC
      ;`, (error: any, result: any) => {
        if (error) {
          console.error(error);
        } else {
          if (result) {
            let sex: Sex = result.map((data: any) => returnSex(data))[0];

            resolve(sex);
          };
        };
      });
    });
    return promise;
  }


};

export { SexDB };
