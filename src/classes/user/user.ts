import { Avatar } from "./avatar";
import { Person } from "./person";
import { UserType } from "./userType";

class User {

  #id_user: number | undefined | null;
  #email: string | undefined | null;
  #password: string | undefined | null;
  #create_date: Date | undefined | null;
  #person: Person | undefined | null;
  #user_type: UserType | undefined | null;
  #avatar: Avatar | undefined | null;

  constructor(id_user: number | undefined | null, email: string | undefined | null, password: string | undefined | null, create_date: Date | undefined | null, person: Person | undefined | null, user_type: UserType | undefined | null, avatar: Avatar | undefined | null) {
    this.#id_user = id_user;
    this.#email = email;
    this.#password = password;
    this.#create_date = create_date;
    this.#person = person;
    this.#user_type = user_type;
    this.#avatar = avatar;
  };

  getIdUser = () => {
    return this.#id_user;
  };

  getEmail = () => {
    return this.#email;
  };

  getPassword = () => {
    return this.#password;
  };

  getCreateDate = () => {
    return this.#create_date;
  };

  getPerson = () => {
    return this.#person;
  };

  getUserType = () => {
    return this.#user_type;
  };

  getAvatar = () => {
    return this.#avatar;
  };

};

export { User };
