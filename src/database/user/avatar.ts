import { Avatar } from "../../classes/user/avatar.js";
import { returnAvatar } from "../../helpers/user/avatar.js";
import { con } from "../connection.js";

class AvatarDB {

  #con: any;

  constructor() {
    this.#con = con;
  }

  getLastAvatar = () => {
    const promise = new Promise<Avatar[]>((resolve) => {
      this.#con.query(`
          SELECT * FROM mavatar
          ORDER BY \`id_avatar\` DESC
          LIMIT 1
        ;`, (error: any, result: any) => {
        if (error) {
          console.error(error);
        } else {
          if (result) {
            let avatars: Avatar[] = result.map((data: any) => returnAvatar(data));

            resolve(avatars);
          };
        };
      });
    });
    return promise;
  }

  saveAvatar = (avatar: Avatar | null | undefined) => {
    const promise = new Promise<boolean>((resolve) => {
      this.#con.query(`
      INSERT INTO mavatar (
        \`id_avatar\`,
        \`url\`,
        \`deleted\`)
        VALUES (
        '${avatar?.getIdAvatar()}',
        '${avatar?.getUrl()}',
        '0')
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

}

export {
  AvatarDB
}
