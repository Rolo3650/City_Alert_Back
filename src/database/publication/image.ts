import { PublicationImage } from "../../classes/publication/image.js";
import { con } from "../connection.js";

class ImageDB {

  #con: any;

  constructor() {
    this.#con = con;
  }

  getImages = () => {
    const promise = new Promise<PublicationImage[]>((resolve) => {
      this.#con.query(`
        SELECT * FROM mimage
        ORDER BY 'id_image' DESC
      ;`, (error: any, result: any) => {
        if (error) {
          console.error(error);
        } else {
          if (result) {
            let publicationTypess: PublicationImage[] = result.map((data: any) => {
              return new PublicationImage(data.id_image, data.url, data.deleted)
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

export { ImageDB };
