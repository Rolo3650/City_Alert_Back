import { Municipality } from "../classes/municipality.js";
import { con } from "./connection.js";

class MunicipalityDB {

  #con: any;

  constructor() {
    this.#con = con;
  }

  getMunicipalitys = () => {
    const promise = new Promise<Municipality[]>((resolve) => {
      this.#con.query('Select * from cmunicipality', (error: any, result: any) => {
        if (error) {
          console.error(error);
        } else {
          if (result) {
            let municipalities: Municipality[] = result.map((data: any) => {
              return new Municipality(data.id_municipality, data.municipality)
            }
            );

            resolve(municipalities);
          };
        };
      });
    });
    return promise;
  }

};

export { MunicipalityDB };
