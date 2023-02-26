import { User } from "../user/user";

class Reaction {

  #id_reaction: number | undefined | null;
  #user: User | undefined | null;
  #reacted: Boolean | undefined | null;

  constructor(
    id_reaction: number | undefined | null,
    user: User | undefined | null,
    reacted: Boolean | undefined | null
  ) {
    this.#id_reaction = id_reaction;
    this.#user = user;
    this.#reacted = reacted;
  };

  getIdReaction = () => {
    return this.#id_reaction;
  };

  getUser = () => {
    return this.#user;
  };

  getReacted = () => {
    return this.#reacted;
  };

}

export { Reaction };
