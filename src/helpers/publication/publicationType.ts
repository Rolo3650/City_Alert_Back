import { PublicationType } from "../../classes/publication/publicationType.js";

const returnPublicationTypeJSON = (publicationType: PublicationType) => {
  return {
    id_publicationType: publicationType?.getIdPublicationType(),
    publicationType: publicationType?.getPublicationType(),
  }
}

const returnPublicationType = (data: any) => {
  return new PublicationType(data.id_publication_type, data.publication_type)
};

export { returnPublicationTypeJSON, returnPublicationType };
