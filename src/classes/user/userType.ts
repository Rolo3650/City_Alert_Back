class UserType {

  #id_user_type: number | undefined | null;
  #user_type: string | undefined | null;

  constructor(id_user_type: number | undefined | null, user_type: string | undefined | null){
      this.#id_user_type = id_user_type;
      this.#user_type = user_type;
  };

  getIdUserType = () => {
      return this.#id_user_type;
  };

  getUserType = () => {
      return this.#user_type;
  };

};

export { UserType };
