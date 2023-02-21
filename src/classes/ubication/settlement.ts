import { PostalCode } from "./postalCode";
import { SettlementType } from "./settlementType";

class Settlement {

  #id_stettlement: number | undefined | null;
  #name: string | undefined | null;
  #zip_pc: PostalCode | undefined | null;
  #settlement_type: SettlementType | undefined | null;

  constructor(id_stettlement: number | undefined | null, name: string | undefined | null, zip_pc: PostalCode | undefined | null, settlement_type: SettlementType | undefined | null) {
    this.#id_stettlement = id_stettlement;
    this.#name = name;
    this.#zip_pc = zip_pc;
    this.#settlement_type = settlement_type;
  };

  getIdSettlement = () => {
    return this.#id_stettlement;
  };

  getName = () => {
    return this.#name;
  };

  getZipPC = () => {
    return this.#zip_pc;
  };

  getSettlementType = () => {
    return this.#settlement_type;
  };

};

export { Settlement };
