class PublicationImage {

  #id_image: number | undefined | null;
  #url: string | undefined | null;
  #deleted: boolean | undefined | null;

  constructor(
    id_image: number | undefined | null,
    url: string | undefined | null,
    deleted: boolean | undefined | null,
  ) {
    this.#id_image = id_image;
    this.#url = url;
    this.#deleted = deleted;
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

}

export { PublicationImage }
