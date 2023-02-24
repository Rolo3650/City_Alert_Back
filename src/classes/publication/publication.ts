import { Settlement } from '../ubication/settlement';
import { User } from '../user/user';
import { PublicationImage } from './image';
import { PublicationType } from './publicationType';
import { Reaction } from './reaction';

class Publication {

  #id_publication: number | undefined | null;
  #description: string | undefined | null;
  #date: Date | undefined | null;
  #deleted: boolean | undefined | null;
  #solved: boolean | undefined | null;
  #publication_type: PublicationType | undefined | null;
  #user: User | undefined | null;
  #settlement: Settlement | undefined | null;
  #reactions: Reaction[] | undefined | null;
  #images: PublicationImage[] | undefined | null;
  #coments: Comment[] | undefined | null;

  constructor(
    id_publication: number | undefined | null,
    description: string | undefined | null,
    date: Date | undefined | null,
    deleted: boolean | undefined | null,
    solved: boolean | undefined | null,
    publication_type: PublicationType | undefined | null,
    user: User | undefined | null,
    settlement: Settlement | undefined | null,
    reactions: Reaction[] | undefined | null,
    coments: Comment[] | undefined | null,
    images: PublicationImage[] | undefined | null
  ) {

    this.#id_publication = id_publication;
    this.#description = description;
    this.#date = date;
    this.#deleted = deleted;
    this.#solved = solved;
    this.#publication_type = publication_type;
    this.#user = user;
    this.#settlement = settlement;
    this.#reactions = reactions;
    this.#coments = coments;
    this.#images = images;
  };

  getIdPublication = () => {
    return this.#id_publication
  };

  getDescription = () => {
    return this.#description
  };

  getDate = () => {
    return this.#date
  };

  getDeleted = () => {
    return this.#deleted
  };

  getSolved = () => {
    return this.#solved
  };

  getPublicationType = () => {
    return this.#publication_type
  };

  getUser = () => {
    return this.#user
  };

  getSettlement = () => {
    return this.#settlement
  };

  getReactions = () => {
    return this.#reactions
  };

  getImages = () => {
    return this.#images
  };

  getComents = () => {
    return this.#coments
  };

};

export { Publication };
