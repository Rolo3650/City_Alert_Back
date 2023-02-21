import { User } from "../user/user";
import { Publication } from "./publication";

class Coment {

  #id_coment: number | undefined | null;
  #coment: string | undefined | null;
  #date: Date | undefined | null;
  #deleted: boolean | undefined | null;
  #publication: Publication | undefined | null;
  #user: User | undefined | null;

  constructor(
    id_coment: number | undefined | null,
    coment: string | undefined | null,
    date: Date | undefined | null,
    deleted: boolean | undefined | null,
    publication: Publication | undefined | null,
    user: User | undefined | null
  ) {
    this.#id_coment = id_coment;
    this.#coment = coment;
    this.#date = date;
    this.#deleted = deleted;
    this.#publication = publication;
    this.#user = user;
  };

  getIdComent = () => {
    return this.#id_coment;
  }

  getComent = () => {
    return this.#coment;
  }

  getDate = () => {
    return this.#date;
  }

  getDeleted = () => {
    return this.#deleted;
  }

  getPublication = () => {
    return this.#publication;
  }

  getUser = () => {
    return this.#user;
  }

}

export { Coment };
