import moment from "moment";
import { User } from "../../classes/user/user.js";
import { returnUser } from "../../helpers/user/user.js";
import { con } from "../connection.js";

class UserDB {

  #con: any;

  constructor() {
    this.#con = con;
  }

  getUsers = () => {
    const promise = new Promise<User[]>((resolve) => {
      this.#con.query(`
        SELECT * FROM muser AS us
        INNER JOIN cusertype AS cu ON us.id_user_type = cu.id_user_type
        INNER JOIN mperson AS pe ON us.id_person = pe.id_person
        INNER JOIN csex AS sx ON pe.id_sex = sx.id_sex
        INNER JOIN msettlement AS stl ON pe.id_settlement = stl.id_settlement
        INNER JOIN cpostalcode AS pc ON stl.id_zip_pc = pc.zip_pc
        INNER JOIN cstate AS st ON pc.id_state = st.id_state
        INNER JOIN cmunicipality AS mu ON pc.id_municipality = mu.id_municipality
        INNER JOIN csettlementtype AS stl_type ON stl.id_settlement_type = stl_type.id_settlement_type
        INNER JOIN mavatar AS av ON us.id_avatar = av.id_avatar
        ORDER BY 'id_user' DESC
      ;`, (error: any, result: any) => {
        if (error) {
          console.error(error);
        } else {
          if (result) {
            let users: User[] = result.map((data: any) => returnUser(data));
            resolve(users);
          };
        };
      });
    });
    return promise;
  }

  getUser = (id: number | null | undefined) => {
    const promise = new Promise<User>((resolve) => {
      this.#con.query(`
        SELECT * FROM muser AS us
        INNER JOIN cusertype AS cu ON us.id_user_type = cu.id_user_type
        INNER JOIN mperson AS pe ON us.id_person = pe.id_person
        INNER JOIN csex AS sx ON pe.id_sex = sx.id_sex
        INNER JOIN msettlement AS stl ON pe.id_settlement = stl.id_settlement
        INNER JOIN cpostalcode AS pc ON stl.id_zip_pc = pc.zip_pc
        INNER JOIN cstate AS st ON pc.id_state = st.id_state
        INNER JOIN cmunicipality AS mu ON pc.id_municipality = mu.id_municipality
        INNER JOIN csettlementtype AS stl_type ON stl.id_settlement_type = stl_type.id_settlement_type
        INNER JOIN mavatar AS av ON us.id_avatar = av.id_avatar
        WHERE us.id_user = ${id}
        ORDER BY 'id_user' DESC
      ;`, (error: any, result: any) => {
        if (error) {
          console.error(error);
        } else {
          if (result) {
            let users: User = result.map((data: any) => returnUser(data))[0];
            resolve(users);
          };
        };
      });
    });
    return promise;
  }

  getUserEmail = (email: string | null | undefined) => {
    const promise = new Promise<User>((resolve) => {
      this.#con.query(`
        SELECT * FROM muser AS us
        INNER JOIN cusertype AS cu ON us.id_user_type = cu.id_user_type
        INNER JOIN mperson AS pe ON us.id_person = pe.id_person
        INNER JOIN csex AS sx ON pe.id_sex = sx.id_sex
        INNER JOIN msettlement AS stl ON pe.id_settlement = stl.id_settlement
        INNER JOIN cpostalcode AS pc ON stl.id_zip_pc = pc.zip_pc
        INNER JOIN cstate AS st ON pc.id_state = st.id_state
        INNER JOIN cmunicipality AS mu ON pc.id_municipality = mu.id_municipality
        INNER JOIN csettlementtype AS stl_type ON stl.id_settlement_type = stl_type.id_settlement_type
        INNER JOIN mavatar AS av ON us.id_avatar = av.id_avatar
        WHERE us.email = "${email}"
        ORDER BY \`id_user\` DESC
      ;`, (error: any, result: any) => {
        if (error) {
          console.error(error);
        } else {
          if (result) {
            let users: User = result.map((data: any) => returnUser(data))[0];
            resolve(users);
          };
        };
      });
    });
    return promise;
  }

  getLastUser = () => {
    const promise = new Promise<User[]>((resolve) => {
      this.#con.query(`
        SELECT * FROM muser AS us
        INNER JOIN cusertype AS cu ON us.id_user_type = cu.id_user_type
        INNER JOIN mperson AS pe ON us.id_person = pe.id_person
        INNER JOIN csex AS sx ON pe.id_sex = sx.id_sex
        INNER JOIN msettlement AS stl ON pe.id_settlement = stl.id_settlement
        INNER JOIN cpostalcode AS pc ON stl.id_zip_pc = pc.zip_pc
        INNER JOIN cstate AS st ON pc.id_state = st.id_state
        INNER JOIN cmunicipality AS mu ON pc.id_municipality = mu.id_municipality
        INNER JOIN csettlementtype AS stl_type ON stl.id_settlement_type = stl_type.id_settlement_type
        INNER JOIN mavatar AS av ON us.id_avatar = av.id_avatar
        ORDER BY \`id_user\` DESC
        LIMIT 1
      ;`, (error: any, result: any) => {
        if (error) {
          console.error(error);
        } else {
          if (result) {
            let users: User[] = result.map((data: any) => returnUser(data));
            resolve(users);
          };
        };
      });
    });
    return promise;
  }

  userExist = (email: string | null | undefined) => {
    const promise = new Promise<User[]>((resolve) => {
      this.#con.query(`
        SELECT * FROM muser AS us
        INNER JOIN cusertype AS cu ON us.id_user_type = cu.id_user_type
        INNER JOIN mperson AS pe ON us.id_person = pe.id_person
        INNER JOIN csex AS sx ON pe.id_sex = sx.id_sex
        INNER JOIN msettlement AS stl ON pe.id_settlement = stl.id_settlement
        INNER JOIN cpostalcode AS pc ON stl.id_zip_pc = pc.zip_pc
        INNER JOIN cstate AS st ON pc.id_state = st.id_state
        INNER JOIN cmunicipality AS mu ON pc.id_municipality = mu.id_municipality
        INNER JOIN csettlementtype AS stl_type ON stl.id_settlement_type = stl_type.id_settlement_type
        INNER JOIN mavatar AS av ON us.id_avatar = av.id_avatar
        WHERE us.email = "${email}"
        ORDER BY 'id_user' DESC
        LIMIT 1
      ;`, (error: any, result: any) => {
        if (error) {
          console.error(error);
        } else {
          if (result) {
            let users: User[] = result.map((data: any) => returnUser(data));
            resolve(users);
          };
        };
      });
    });
    return promise;
  }

  saveUser = (user: User | null | undefined) => {
    const promise = new Promise<boolean>((resolve) => {
      this.#con.query(`
      INSERT INTO muser (
        \`id_user\`,
        \`email\`,
        \`password\`,
        \`create_date\`,
        \`id_person\`,
        \`id_user_type\`)
        VALUES (
        '${user?.getIdUser()}',
        '${user?.getEmail()}',
        '${user?.getPassword()}',
        '${moment(user?.getCreateDate()).format("YYYY-MM-DD")}',
        '${user?.getPerson()?.getIdPerson()}',
        '${user?.getUserType()?.getIdUserType()}')
      ;`, (error: any, result: any) => {
        if (error) {
          console.error(error);
        } else {
          if (result) {
            if (result.serverStatus == 2) {
              resolve(true);
            } else {
              resolve(false);
            }
          } else {
            resolve(false);
          };
        };
      });
    });
    return promise;
  }

  deleteUser = (user: User | null | undefined) => {
    const promise = new Promise<boolean>((resolve) => {
      this.#con.query(`
      DELETE FROM muser WHERE (\`id_user\` = '${user?.getIdUser()}')
      ;`, (error: any, result: any) => {
        if (error) {
          console.error(error);
          resolve(false);
        } else {
          if (result) {
            if (result.serverStatus == 2) {
              resolve(true);
            } else {
              resolve(false);
            }
          } else {
            resolve(false);
          };
        };
      });
    });
    return promise;
  }

};

export { UserDB };
