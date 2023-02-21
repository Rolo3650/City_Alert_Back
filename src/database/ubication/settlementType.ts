import { SettlementType } from "../../classes/ubication/settlementType.js";
import { con } from "./connection.js";

class SettlementTypeDB {

  #con: any;

  constructor() {
    this.#con = con;
  }

  getSettlementTypes = () => {
    const promise = new Promise<SettlementType[]>((resolve) => {
      this.#con.query(`
        SELECT * FROM csettlementtype;
      `, (error: any, result: any) => {
        if (error) {
          console.error(error);
        } else {
          if (result) {
            let settlement_types: SettlementType[] = result.map((data: any) => {
              return new SettlementType(data.id_settlement_type, data.settlement_type)
            }
            );

            resolve(settlement_types);
          };
        };
      });
    });
    return promise;
  }

};

export { SettlementTypeDB };
