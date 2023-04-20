import { PublicationType } from "../../classes/publication/publicationType.js";
const returnPublicationTypeJSON = (publicationType) => {
    return {
        id_publicationType: publicationType === null || publicationType === void 0 ? void 0 : publicationType.getIdPublicationType(),
        publicationType: publicationType === null || publicationType === void 0 ? void 0 : publicationType.getPublicationType(),
    };
};
const returnPublicationType = (data) => {
    return new PublicationType(data.id_publication_type, data.publication_type);
};
export { returnPublicationTypeJSON, returnPublicationType };
