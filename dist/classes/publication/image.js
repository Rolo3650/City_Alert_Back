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
var _PublicationImage_id_image, _PublicationImage_url, _PublicationImage_deleted;
class PublicationImage {
    constructor(id_image, url, deleted) {
        _PublicationImage_id_image.set(this, void 0);
        _PublicationImage_url.set(this, void 0);
        _PublicationImage_deleted.set(this, void 0);
        this.getIdImage = () => {
            return __classPrivateFieldGet(this, _PublicationImage_id_image, "f");
        };
        this.getUrl = () => {
            return __classPrivateFieldGet(this, _PublicationImage_url, "f");
        };
        this.getDeleted = () => {
            return __classPrivateFieldGet(this, _PublicationImage_deleted, "f");
        };
        __classPrivateFieldSet(this, _PublicationImage_id_image, id_image, "f");
        __classPrivateFieldSet(this, _PublicationImage_url, url, "f");
        __classPrivateFieldSet(this, _PublicationImage_deleted, deleted, "f");
    }
}
_PublicationImage_id_image = new WeakMap(), _PublicationImage_url = new WeakMap(), _PublicationImage_deleted = new WeakMap();
export { PublicationImage };
