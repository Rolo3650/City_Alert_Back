import { Settlement } from "../ubication/settlement";
import { Sex } from "./sex";

class Person {

  #id_person: number | undefined | null;
  #name: string | undefined | null;
  #last_name: string | undefined | null;
  #birthday: Date | undefined | null;
  #sex: Sex | undefined | null;
  #settelement: Settlement | undefined | null;

  constructor(id_person: number | undefined | null, name: string | undefined | null, last_name: string | undefined | null, birthday: Date | undefined | null, sex: Sex | undefined | null, settlement: Settlement | undefined | null) {
    this.#id_person = id_person;
    this.#name = name;
    this.#last_name = last_name;
    this.#birthday = birthday;
    this.#sex = sex;
    this.#settelement = settlement;
  };

  getIdPerson = () => {
    return this.#id_person;
  };

  getName = () => {
    return this.#name;
  };

  getLastName = () => {
    return this.#last_name;
  };

  getBirthday = () => {
    return this.#birthday;
  };

  getSex = () => {
    return this.#sex;
  };

  getSettlement = () => {
    return this.#settelement;
  };

};

export { Person };
