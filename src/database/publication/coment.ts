import { Coment } from "../../classes/publication/coment.js";
import { Municipality } from "../../classes/ubication/municipality.js";
import { PostalCode } from "../../classes/ubication/postalCode.js";
import { Settlement } from "../../classes/ubication/settlement.js";
import { SettlementType } from "../../classes/ubication/settlementType.js";
import { State } from "../../classes/ubication/state.js";
import { Person } from "../../classes/user/person.js";
import { Sex } from "../../classes/user/sex.js";
import { User } from "../../classes/user/user.js";
import { UserType } from "../../classes/user/userType.js";
import { con } from "../connection.js";

class ComentDB {

  #con: any;

  constructor() {
    this.#con = con;
  }

  getComents = () => {
    const promise = new Promise<Coment[]>((resolve) => {
      this.#con.query(`
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
      ;`, (error: any, result: any) => {
        if (error) {
          console.error(error);
        } else {
          if (result) {
            let coments: Coment[] = result.map((data: any) => {
              const st = new State(data.id_state, data.state);
              const mn = new Municipality(data.id_municipality, data.municipality);

              const pc = new PostalCode(data.zip_pc, st, mn);

              const stl_type = new SettlementType(data.id_settlement_type, data.settlement_type);

              const stl = new Settlement(data.id_settlement, data.settlement, pc, stl_type);

              const sex = new Sex(data.id_sex, data.sex);

              const pe = new Person(data.id_person, data.name, data.last_name, new Date(data.birthday), sex, stl);

              const us_type = new UserType(data.id_user_type, data.user_type)

              const us = new User(data.id_user, data.email, data.password, new Date(data.create_date), pe, us_type)


              return new Coment(data.id_coment, data.coment, new Date(data.date), data.deleted ? true : false, us)
            }
            );

            resolve(coments);
          };
        };
      });
    });
    return promise;
  }

  getComentsPerPublication = (id: number | null | undefined) => {
    const promise = new Promise<Coment[]>((resolve) => {
      this.#con.query(`
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
      ;`, (error: any, result: any) => {
        if (error) {
          console.error(error);
        } else {
          if (result) {
            let coments: Coment[] = result.map((data: any) => {
              const st = new State(data.id_state, data.state);
              const mn = new Municipality(data.id_municipality, data.municipality);

              const pc = new PostalCode(data.zip_pc, st, mn);

              const stl_type = new SettlementType(data.id_settlement_type, data.settlement_type);

              const stl = new Settlement(data.id_settlement, data.settlement, pc, stl_type);

              const sex = new Sex(data.id_sex, data.sex);

              const pe = new Person(data.id_person, data.name, data.last_name, new Date(data.birthday), sex, stl);

              const us_type = new UserType(data.id_user_type, data.user_type)

              const us = new User(data.id_user, data.email, data.password, new Date(data.create_date), pe, us_type)


              return new Coment(data.id_coment, data.coment, new Date(data.date), data.deleted ? true : false, us)
            }
            );

            resolve(coments);
          };
        };
      });
    });
    return promise;
  }

};

export { ComentDB };
