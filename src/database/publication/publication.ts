import moment from "moment";
import { Publication } from "../../classes/publication/publication.js";
import { returnPublication } from "../../helpers/publication/publication.js";
import { con } from "../connection.js";

class PublicationDB {

  #con: any;

  constructor() {
    this.#con = con;
  }

  getPublications = () => {
    const promise = new Promise<Publication[]>((resolve) => {
      this.#con.query(`
        SELECT * FROM mpublication AS pu
        INNER JOIN cpublicationtype AS pt ON pu.id_publication_type = pt.id_publication_type
        INNER JOIN muser AS us ON pu.id_user = us.id_user
        INNER JOIN msettlement AS stl ON pu.id_settlement = stl.id_settlement
        INNER JOIN cpostalcode AS pc ON stl.id_zip_pc = pc.zip_pc
        INNER JOIN cstate AS st ON pc.id_state = st.id_state
        INNER JOIN cmunicipality AS mu ON pc.id_municipality = mu.id_municipality
        INNER JOIN csettlementtype AS stl_type ON stl.id_settlement_type = stl_type.id_settlement_type
        ORDER BY \`id_publication\` DESC
      ;`, (error: any, result: any) => {
        if (error) {
          console.error(error);
        } else {
          if (result) {
            let publications: Publication[] = result.map((data: any) => returnPublication(data));

            resolve(publications);
          };
        };
      });
    });
    return promise;
  }

  getPublication = (id: number | null | undefined) => {
    const promise = new Promise<Publication>((resolve) => {
      this.#con.query(`
        SELECT * FROM mpublication AS pu
        INNER JOIN cpublicationtype AS pt ON pu.id_publication_type = pt.id_publication_type
        INNER JOIN muser AS us ON pu.id_user = us.id_user
        INNER JOIN msettlement AS stl ON pu.id_settlement = stl.id_settlement
        INNER JOIN cpostalcode AS pc ON stl.id_zip_pc = pc.zip_pc
        INNER JOIN cstate AS st ON pc.id_state = st.id_state
        INNER JOIN cmunicipality AS mu ON pc.id_municipality = mu.id_municipality
        INNER JOIN csettlementtype AS stl_type ON stl.id_settlement_type = stl_type.id_settlement_type
        WHERE pu.id_publication = ${id}
        ORDER BY 'id_publication' DESC
      ;`, (error: any, result: any) => {
        if (error) {
          console.error(error);
        } else {
          if (result) {
            let publication: Publication = result.map((data: any) => returnPublication(data))[0];

            resolve(publication);
          };
        };
      });
    });
    return promise;
  }

  getLastPublication = () => {
    const promise = new Promise<Publication[]>((resolve) => {
      this.#con.query(`
        SELECT * FROM mpublication AS pu
        INNER JOIN cpublicationtype AS pt ON pu.id_publication_type = pt.id_publication_type
        INNER JOIN muser AS us ON pu.id_user = us.id_user
        INNER JOIN msettlement AS stl ON pu.id_settlement = stl.id_settlement
        INNER JOIN cpostalcode AS pc ON stl.id_zip_pc = pc.zip_pc
        INNER JOIN cstate AS st ON pc.id_state = st.id_state
        INNER JOIN cmunicipality AS mu ON pc.id_municipality = mu.id_municipality
        INNER JOIN csettlementtype AS stl_type ON stl.id_settlement_type = stl_type.id_settlement_type
        ORDER BY \`id_publication\` DESC
        LIMIT 1
      ;`, (error: any, result: any) => {
        if (error) {
          console.error(error);
        } else {
          if (result) {
            let publications: Publication[] = result.map((data: any) => returnPublication(data));
            resolve(publications);
          };
        };
      });
    });
    return promise;
  }

  createPublication = (publication: Publication | null | undefined) => {
    const promise = new Promise<boolean>((resolve) => {
      this.#con.query(`
      INSERT INTO mpublication (
        \`id_publication\`,
        \`description\`,
        \`date\`,
        \`deleted\`,
        \`solved\`,
        \`id_publication_type\`,
        \`id_user\`,
        \`id_settlement\`)
        VALUES (
        '${publication?.getIdPublication()}',
        '${publication?.getDescription()}',
        '${moment(publication?.getDate()).format("YYYY-MM-DD")}',
        '${'0'}',
        '${'0'}',
        '${publication?.getPublicationType()?.getIdPublicationType()}',
        '${publication?.getUser()?.getIdUser()}',
        '${publication?.getSettlement()?.getIdSettlement()}')
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

};

export { PublicationDB };
