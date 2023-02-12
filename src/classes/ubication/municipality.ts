class Municipality {

  #id_municipality: number | undefined | null;
  #municipality: string | undefined | null;

  constructor(id_municipality: number | undefined | null, municipality: string | undefined | null){
      this.#id_municipality = id_municipality;
      this.#municipality = municipality;
  };

  getIdMunicipality = () => {
      return this.#id_municipality;
  };

  getMunicipality = () => {
      return this.#municipality;
  };

};

export { Municipality };
