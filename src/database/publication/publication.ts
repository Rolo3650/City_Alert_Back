import { Publication } from "../../classes/publication/publication.js";
import { PublicationType } from "../../classes/publication/publicationType.js";
import { Municipality } from "../../classes/ubication/municipality.js";
import { PostalCode } from "../../classes/ubication/postalCode.js";
import { Settlement } from "../../classes/ubication/settlement.js";
import { SettlementType } from "../../classes/ubication/settlementType.js";
import { State } from "../../classes/ubication/state.js";
import { User } from "../../classes/user/user.js";
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
        ORDER BY 'id_publication' DESC
      ;`, (error: any, result: any) => {
        if (error) {
          console.error(error);
        } else {
          if (result) {
            let publications: Publication[] = result.map((data: any) => {
              const st = new State(data.id_state, data.state);
              const mn = new Municipality(data.id_municipality, data.municipality);

              const pc = new PostalCode(data.zip_pc, st, mn);

              const stl_type = new SettlementType(data.id_settlement_type, data.settlement_type);

              const stl = new Settlement(data.id_settlement, data.settlement, pc, stl_type);

              const pu_type = new PublicationType(data.id_publication_type, data.publication_type);

              const us = new User(data.id_user, null, null, null, null, null)

              return new Publication(data.id_publication, data.description, new Date(data.date), data.deleted ? true : false, data.solved ? true : false, pu_type, us, stl, null, null, null)
            }
            );

            resolve(publications);
          };
        };
      });
    });
    return promise;
  }

};

export { PublicationDB };
