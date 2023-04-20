import { PublicationImage } from "../../classes/publication/image.js";
const returnImageJSON = (image) => {
    return {
        id_image: image.getIdImage(),
        image: image.getUrl(),
        deleted: image.getDeleted(),
    };
};
const returnImage = (data) => {
    return new PublicationImage(data.id_image, data.url, data.deleted ? true : false);
};
export { returnImageJSON, returnImage };