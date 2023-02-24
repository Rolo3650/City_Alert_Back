import { UserType } from "../../classes/user/userType.js";
import { con } from "../connection.js";

class UserTypeDB {

  #con: any;

  constructor() {
    this.#con = con;
  }

  getUserTypes = () => {
    const promise = new Promise<UserType[]>((resolve) => {
      this.#con.query(`
        SELECT * FROM cusertype
        ORDER BY 'id_user_type' DESC
      ;`, (error: any, result: any) => {
        if (error) {
          console.error(error);
        } else {
          if (result) {
            let userTypes: UserType[] = result.map((data: any) => {
              return new UserType(data.id_user_type, data.user_type)
            }
            );

            resolve(userTypes);
          };
        };
      });
    });
    return promise;
  }

};

export { UserTypeDB };
