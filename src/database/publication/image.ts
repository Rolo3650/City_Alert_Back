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
            let images: PublicationImage[] = result.map((data: any) => {
              return new PublicationImage(data.id_image, data.url, data.deleted ? true : false)
            }
            );

            resolve(images);
          };
        };
      });
    });
    return promise;
  }

  getImagesPerPublication = (id: number | undefined | null) => {
    const promise = new Promise<PublicationImage[]>((resolve) => {
      this.#con.query(`
        SELECT * FROM mimage AS im
        WHERE im.id_publication = ${id}
        ORDER BY 'id_image' DESC
      ;`, (error: any, result: any) => {
        if (error) {
          console.error(error);
        } else {
          if (result) {
            let images: PublicationImage[] = result.map((data: any) => {
              return new PublicationImage(data.id_image, data.url, data.deleted ? true : false)
            }
            );

            resolve(images);
          };
        };
      });
    });
    return promise;
  }

};

export { ImageDB };
