import { Avatar } from "../../classes/user/avatar.js"

const returnAvatar = (data: any) => {
  return new Avatar(data.id_avatar, data.url, data.deleted ? true : false)
}

export {
  returnAvatar
}
