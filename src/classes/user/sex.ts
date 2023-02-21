class Sex {

  #id_sex: number | undefined | null;
  #sex: string | undefined | null;

  constructor(id_sex: number | undefined | null, sex: string | undefined | null){
      this.#id_sex = id_sex;
      this.#sex = sex;
  };

  getIdSex = () => {
      return this.#id_sex;
  };

  getSex = () => {
      return this.#sex;
  };

};

export { Sex };
