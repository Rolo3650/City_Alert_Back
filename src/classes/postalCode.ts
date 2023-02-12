import { Municipality } from "./municipality.js";
import { State } from "./state.js";

class PostalCode {

  #zip_pc: number | undefined | null;
  #state: State | undefined | null;
  #municipality: Municipality | undefined | null;

  constructor(zip_pc: number | undefined | null, state: State | undefined | null, municipality: Municipality | undefined | null){
      this.#zip_pc = zip_pc;
      this.#state = state;
      this.#municipality = municipality;
  };

  getIdState = () => {
      return this.#zip_pc;
  };

  getState = () => {
      return this.#state;
  };

  getMunicipality = () => {
    return this.#municipality;
};

};

export { PostalCode };
