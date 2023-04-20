var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ImageDB_con;
import { returnImage } from "../../helpers/publication/image.js";
import { con } from "../connection.js";
class ImageDB {
    constructor() {
        _ImageDB_con.set(this, void 0);
        this.getImages = () => {
            const promise = new Promise((resolve) => {
                __classPrivateFieldGet(this, _ImageDB_con, "f").query(`
        SELECT * FROM mimage
        ORDER BY 'id_image' DESC
      ;`, (error, result) => {
                    if (error) {
                        console.error(error);
                    }
                    else {
                        if (result) {
                            let images = result.map((data) => returnImage(data));
                            resolve(images);
                        }
                        ;
                    }
                    ;
                });
            });
            return promise;
        };
        this.getImagesPerPublication = (id) => {
            const promise = new Promise((resolve) => {
                __classPrivateFieldGet(this, _ImageDB_con, "f").query(`
        SELECT * FROM mimage AS im
        WHERE im.id_publication = ${id}
        ORDER BY 'id_image' DESC
      ;`, (error, result) => {
                    if (error) {
                        console.error(error);
                    }
                    else {
                        if (result) {
                            let images = result.map((data) => returnImage(data));
                            resolve(images);
                        }
                        ;
                    }
                    ;
                });
            });
            return promise;
        };
        this.getLastImage = () => {
            const promise = new Promise((resolve) => {
                __classPrivateFieldGet(this, _ImageDB_con, "f").query(`
        SELECT * FROM mimage
        ORDER BY \`id_image\` DESC
        LIMIT 1
      ;`, (error, result) => {
                    if (error) {
                        console.error(error);
                    }
                    else {
                        if (result) {
                            let images = result.map((data) => returnImage(data));
                            resolve(images);
                        }
                        ;
                    }
                    ;
                });
            });
            return promise;
        };
        this.saveImage = (image, publication) => {
            const promise = new Promise((resolve) => {
                __classPrivateFieldGet(this, _ImageDB_con, "f").query(`
      INSERT INTO mimage (
        \`id_image\`,
        \`url\`,
        \`deleted\`,
        \`id_publication\`)
        VALUES (
        '${image.getIdImage()}',
        '${image.getUrl()}',
        '0',
        '${publication.getIdPublication()}')
      ;`, (error, result) => {
                    if (error) {
                        console.error(error);
                    }
                    else {
                        if (result) {
                            if (result.serverStatus == 2) {
                                resolve(true);
                            }
                            else {
                                resolve(false);
                            }
                        }
                        else {
                            resolve(false);
                        }
                        ;
                    }
                    ;
                });
            });
            return promise;
        };
        __classPrivateFieldSet(this, _ImageDB_con, con, "f");
    }
}
_ImageDB_con = new WeakMap();
;
export { ImageDB };
