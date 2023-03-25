import { Settlement } from "../../classes/ubication/settlement.js";
import { returnSettlement } from "../../helpers/ubication/settlement.js";
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
            let settlements: Settlement[] = result.map((data: any) => returnSettlement(data));

            resolve(settlements);
          };
        };
      });
    });
    return promise;
  }

  getSettlement = (id: number) => {
    const promise = new Promise<Settlement>((resolve) => {
      this.#con.query(`
        SELECT * FROM msettlement AS stl
        INNER JOIN cpostalcode AS pc ON stl.id_zip_pc = pc.zip_pc
        INNER JOIN cstate AS st ON pc.id_state = st.id_state
        INNER JOIN cmunicipality AS mu ON pc.id_municipality = mu.id_municipality
        INNER JOIN csettlementtype AS stl_type ON stl.id_settlement_type = stl_type.id_settlement_type
        WHERE stl.id_settlement = ${id}
        ORDER BY 'id_settlement' DESC
      ;`, (error: any, result: any) => {
        if (error) {
          console.error(error);
        } else {
          if (result) {
            let settlement: Settlement = result.map((data: any) => returnSettlement(data))[0];

            resolve(settlement);
          };
        };
      });
    });
    return promise;
  }

};

export { SettlementDB };
