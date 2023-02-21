class SettlementType {

  #id_stettlement_type: number | undefined | null;
  #stettlement_type: string | undefined | null;

  constructor(id_stettlement_type: number | undefined | null, stettlement_type: string | undefined | null){
      this.#id_stettlement_type = id_stettlement_type;
      this.#stettlement_type = stettlement_type;
  };

  getIdSettlementType = () => {
      return this.#id_stettlement_type;
  };

  getSettlementType = () => {
      return this.#stettlement_type;
  };

};

export { SettlementType };
