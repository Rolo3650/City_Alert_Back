import { State } from "../../classes/ubication/state.js";
import { con } from "./connection.js";

class StateDB {

  #con: any;

  constructor() {
    this.#con = con;
  }

  getStates = () => {
    const promise = new Promise<State[]>((resolve) => {
      this.#con.query(`
        SELECT * FROM cstate;
      `, (error: any, result: any) => {
        if (error) {
          console.error(error);
        } else {
          if (result) {
            let states: State[] = result.map((data: any) => {
              return new State(data.id_state, data.state)
            }
            );

            resolve(states);
          };
        };
      });
    });
    return promise;
  }

};

export { StateDB };
