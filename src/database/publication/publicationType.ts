import { PublicationType } from "../../classes/publication/publicationType.js";
import { con } from "../connection.js";

class PublicationTypeDB {

  #con: any;

  constructor() {
    this.#con = con;
  }

  getPublicationTypes = () => {
    const promise = new Promise<PublicationType[]>((resolve) => {
      this.#con.query(`
        SELECT * FROM cpublicationtype
        ORDER BY 'id_publication_type' DESC
      ;`, (error: any, result: any) => {
        if (error) {
          console.error(error);
        } else {
          if (result) {
            let publicationTypess: PublicationType[] = result.map((data: any) => {
              return new PublicationType(data.id_publication_type, data.publication_type)
            }
            );

            resolve(publicationTypess);
          };
        };
      });
    });
    return promise;
  }

};

export { PublicationTypeDB };
