import { Municipality } from "../../classes/ubication/municipality.js";
import { PostalCode } from "../../classes/ubication/postalCode.js";
import { Settlement } from "../../classes/ubication/settlement.js";
import { SettlementType } from "../../classes/ubication/settlementType.js";
import { State } from "../../classes/ubication/state.js";
import { con } from "../connection.js";

class SettlementDB {

  #con: any;

  constructor() {
    this.#con = con;
  }

  getSettlements = () => {
    const promise = new Promise<Settlement[]>((resolve) => {
      this.#con.query(`
        SELECT * FROM msettlement AS stl
        INNER JOIN cpostalcode AS pc ON stl.id_zip_pc = pc.zip_pc
        INNER JOIN cstate AS st ON pc.id_state = st.id_state
        INNER JOIN cmunicipality AS mu ON pc.id_municipality = mu.id_municipality
        INNER JOIN csettlementtype AS stl_type ON stl.id_settlement_type = stl_type.id_settlement_type
        ORDER BY 'id_settlement' DESC
      ;`, (error: any, result: any) => {
        if (error) {
          console.error(error);
        } else {
          if (result) {
            let postalCodes: Settlement[] = result.map((data: any) => {
              const st = new State(data.id_state, data.state);
              const mn = new Municipality(data.id_municipality, data.municipality);

              const pc = new PostalCode(data.zip_pc, st, mn);

              const stl_type = new SettlementType(data.id_settlement_type, data.settlement_type)

              return new Settlement(data.id_settlement, data.name, pc, stl_type)
            }
            );

            resolve(postalCodes);
          };
        };
      });
    });
    return promise;
  }

};

export { SettlementDB };
