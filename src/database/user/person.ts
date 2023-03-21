import moment from "moment";
import { Municipality } from "../../classes/ubication/municipality.js";
import { PostalCode } from "../../classes/ubication/postalCode.js";
import { Settlement } from "../../classes/ubication/settlement.js";
import { SettlementType } from "../../classes/ubication/settlementType.js";
import { State } from "../../classes/ubication/state.js";
import { Person } from "../../classes/user/person.js";
import { Sex } from "../../classes/user/sex.js";
import { con } from "../connection.js";

class PersonDB {

  #con: any;

  constructor() {
    this.#con = con;
  }

  getPersons = () => {
    const promise = new Promise<Person[]>((resolve) => {
      this.#con.query(`
        SELECT * FROM mperson AS pe
        INNER JOIN csex AS sx ON pe.id_sex = sx.id_sex
        INNER JOIN msettlement AS stl ON pe.id_settlement = stl.id_settlement
        INNER JOIN cpostalcode AS pc ON stl.id_zip_pc = pc.zip_pc
        INNER JOIN cstate AS st ON pc.id_state = st.id_state
        INNER JOIN cmunicipality AS mu ON pc.id_municipality = mu.id_municipality
        INNER JOIN csettlementtype AS stl_type ON stl.id_settlement_type = stl_type.id_settlement_type
        ORDER BY 'id_person' DESC
      ;`, (error: any, result: any) => {
        if (error) {
          console.error(error);
        } else {
          if (result) {
            let persons: Person[] = result.map((data: any) => {
              const st = new State(data.id_state, data.state);
              const mn = new Municipality(data.id_municipality, data.municipality);

              const pc = new PostalCode(data.zip_pc, st, mn);

              const stl_type = new SettlementType(data.id_settlement_type, data.settlement_type);

              const stl = new Settlement(data.id_settlement, data.settlement, pc, stl_type);

              const sex = new Sex(data.id_sex, data.sex);

              return new Person(data.id_person, data.name, data.last_name, new Date(data.birthday), sex, stl);
            }
            );

            resolve(persons);
          };
        };
      });
    });
    return promise;
  }

  savePerson = (person: Person | null | undefined) => {
    const promise = new Promise<boolean>((resolve) => {
      this.#con.query(`
      INSERT INTO mperson(
        \`id_person\`,
        \`name\`,
        \`last_name\`,
        \`birthday\`,
        \`id_sex\`,
        \`id_settlement\`)
        VALUES (
        '${person?.getIdPerson()}',
        '${person?.getName()}',
        '${person?.getLastName()}',
        '${moment(person?.getBirthday()).format("YYYY-MM-DD")}',
        '${person?.getSex()?.getIdSex()}',
        '${person?.getSettlement()?.getIdSettlement()}')
      ;`, (error: any, result: any) => {
        if (error) {
          console.error(error);
        } else {
          if (result) {
            if (result.serverStatus == 2){
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

  deletePerson = (person: Person | null | undefined) => {
    const promise = new Promise<boolean>((resolve) => {
      this.#con.query(`
      DELETE FROM mperson WHERE (\`id_person\` = '${person?.getIdPerson()}')
      ;`, (error: any, result: any) => {
        if (error) {
          console.error(error);
          resolve(false);
        } else {
          if (result) {
            if (result.serverStatus == 2){
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

export { PersonDB };
