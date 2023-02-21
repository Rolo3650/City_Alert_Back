class PublicationType {

  #id_publication_type: number | undefined | null;
  #publication_type: string | undefined | null;

  constructor(id_publication_type: number | undefined | null, publication_type: string | undefined | null){
      this.#id_publication_type = id_publication_type;
      this.#publication_type = publication_type;
  };

  getIdPublicationType = () => {
      return this.#id_publication_type;
  };

  getPublicationType = () => {
      return this.#publication_type;
  };

};

export { PublicationType };
