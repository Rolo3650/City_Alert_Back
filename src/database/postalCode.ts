import { Municipality } from "../classes/municipality.js";
import { PostalCode } from "../classes/postalCode.js";
import { State } from "../classes/state.js";
import { con } from "./connection.js";

class PostalCodeDB {

  #con: any;

  constructor() {
    this.#con = con;
  }

  getPostalCodes = () => {
    const promise = new Promise<PostalCode[]>((resolve) => {
      this.#con.query(`
        Select * from cpostalcode AS pc
        INNER JOIN cstate AS st ON pc.id_state = st.id_state
        INNER JOIN cmunicipality AS mu ON pc.id_municipality = mu.id_municipality
      ;`, (error: any, result: any) => {
        if (error) {
          console.error(error);
        } else {
          if (result) {
            let postalCodes: PostalCode[] = result.map((data: any) => {
              return new PostalCode(
                data.zip_pc,
                new State(data.id_state, data.state),
                new Municipality(data.id_municipality, data.municipality)
                )
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

export { PostalCodeDB };
