import { Publication } from "./publication";

class PublicationImage {

  #id_image: number | undefined | null;
  #url: string | undefined | null;
  #deleted: boolean | undefined | null;
  #publication: Publication | undefined | null;

  constructor(
    id_image: number | undefined | null,
    url: string | undefined | null,
    deleted: boolean | undefined | null,
    publication: Publication | undefined | null
  ) {
    this.#id_image = id_image;
    this.#url = url;
    this.#deleted = deleted;
    this.#publication = publication;
  }

  getIdImage = () => {
    return this.#id_image;
  }

  getUrl = () => {
    return this.#url;
  }

  getDeleted = () => {
    return this.#deleted;
  }

  getPublication = () => {
    return this.#publication;
  }

}

export { PublicationImage }
