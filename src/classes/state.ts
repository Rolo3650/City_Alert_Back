export class State {

  #id_state: number | undefined | null;
  #state: string | undefined | null;

  constructor(id_state: number | undefined | null, state: string | undefined | null){
      this.#id_state = id_state;
      this.#state = state;
  };

  getIdState = () => {
      return this.#id_state;
  };

  getState = () => {
      return this.#state;
  };

};
