class Avatar {

  #id_avatar: number | undefined | null;
  #url: string | undefined | null;
  #deleted: boolean | undefined | null;

  constructor(
    id_avatar: number | undefined | null,
    url: string | undefined | null,
    deleted: boolean | undefined | null,
  ) {
    this.#id_avatar = id_avatar;
    this.#url = url;
    this.#deleted = deleted;
  }

  getIdAvatar = () => {
    return this.#id_avatar;
  }

  getUrl = () => {
    return this.#url;
  }

  getDeleted = () => {
    return this.#deleted;
  }

}

export { Avatar }
