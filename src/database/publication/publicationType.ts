import { PublicationType } from "../../classes/publication/publicationType.js";
import { returnPublicationType } from "../../helpers/publication/publicationType.js";
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
        ORDER BY \`id_publication_type\` DESC
      ;`, (error: any, result: any) => {
        if (error) {
          console.error(error);
        } else {
          if (result) {
            let publicationTypes: PublicationType[] = result.map((data: any) => returnPublicationType(data));

            resolve(publicationTypes);
          };
        };
      });
    });
    return promise;
  }

  getPublicationType = (id: number) => {
    const promise = new Promise<PublicationType>((resolve) => {
      this.#con.query(`
        SELECT * FROM cpublicationtype
        WHERE \`id_publication_type\` = ${id}
        ORDER BY \`id_publication_type\` DESC
      ;`, (error: any, result: any) => {
        if (error) {
          console.error(error);
        } else {
          if (result) {
            let publicationTypes: PublicationType = result.map((data: any) => returnPublicationType(data))[0];

            resolve(publicationTypes);
          };
        };
      });
    });
    return promise;
  }

};

export { PublicationTypeDB };
