import { User } from "../user/user";
import { Publication } from "./publication";

class Reaction {

  #id_reaction: number | undefined | null;
  #user: User | undefined | null;
  #publication: Publication | undefined | null;

  constructor(
    id_reaction: number | undefined | null,
    user: User | undefined | null,
    publication: Publication | undefined | null
  ) {
    this.#id_reaction = id_reaction;
    this.#user = user;
    this.#publication = publication;
  };

  getIdReaction = () => {
    return this.#id_reaction;
  };

  getUser = () => {
    return this.#user;
  };

  getPublication = () => {
    return this.#publication;
  };

}

export { Reaction };
