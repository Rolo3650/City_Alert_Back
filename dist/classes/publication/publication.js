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
var _Publication_id_publication, _Publication_description, _Publication_date, _Publication_deleted, _Publication_solved, _Publication_publication_type, _Publication_user, _Publication_settlement, _Publication_reactions, _Publication_images, _Publication_coments;
class Publication {
    constructor(id_publication, description, date, deleted, solved, publication_type, user, settlement, reactions, coments, images) {
        _Publication_id_publication.set(this, void 0);
        _Publication_description.set(this, void 0);
        _Publication_date.set(this, void 0);
        _Publication_deleted.set(this, void 0);
        _Publication_solved.set(this, void 0);
        _Publication_publication_type.set(this, void 0);
        _Publication_user.set(this, void 0);
        _Publication_settlement.set(this, void 0);
        _Publication_reactions.set(this, void 0);
        _Publication_images.set(this, void 0);
        _Publication_coments.set(this, void 0);
        this.getIdPublication = () => {
            return __classPrivateFieldGet(this, _Publication_id_publication, "f");
        };
        this.getDescription = () => {
            return __classPrivateFieldGet(this, _Publication_description, "f");
        };
        this.getDate = () => {
            return __classPrivateFieldGet(this, _Publication_date, "f");
        };
        this.getDeleted = () => {
            return __classPrivateFieldGet(this, _Publication_deleted, "f");
        };
        this.getSolved = () => {
            return __classPrivateFieldGet(this, _Publication_solved, "f");
        };
        this.getPublicationType = () => {
            return __classPrivateFieldGet(this, _Publication_publication_type, "f");
        };
        this.getUser = () => {
            return __classPrivateFieldGet(this, _Publication_user, "f");
        };
        this.getSettlement = () => {
            return __classPrivateFieldGet(this, _Publication_settlement, "f");
        };
        this.getReactions = () => {
            return __classPrivateFieldGet(this, _Publication_reactions, "f");
        };
        this.getImages = () => {
            return __classPrivateFieldGet(this, _Publication_images, "f");
        };
        this.getComents = () => {
            return __classPrivateFieldGet(this, _Publication_coments, "f");
        };
        this.setUser = (user) => {
            __classPrivateFieldSet(this, _Publication_user, user, "f");
        };
        this.setReactions = (reactions) => {
            __classPrivateFieldSet(this, _Publication_reactions, reactions, "f");
        };
        this.setComents = (coments) => {
            __classPrivateFieldSet(this, _Publication_coments, coments, "f");
        };
        this.setImages = (images) => {
            __classPrivateFieldSet(this, _Publication_images, images, "f");
        };
        __classPrivateFieldSet(this, _Publication_id_publication, id_publication, "f");
        __classPrivateFieldSet(this, _Publication_description, description, "f");
        __classPrivateFieldSet(this, _Publication_date, date, "f");
        __classPrivateFieldSet(this, _Publication_deleted, deleted, "f");
        __classPrivateFieldSet(this, _Publication_solved, solved, "f");
        __classPrivateFieldSet(this, _Publication_publication_type, publication_type, "f");
        __classPrivateFieldSet(this, _Publication_user, user, "f");
        __classPrivateFieldSet(this, _Publication_settlement, settlement, "f");
        __classPrivateFieldSet(this, _Publication_reactions, reactions, "f");
        __classPrivateFieldSet(this, _Publication_coments, coments, "f");
        __classPrivateFieldSet(this, _Publication_images, images, "f");
    }
    ;
}
_Publication_id_publication = new WeakMap(), _Publication_description = new WeakMap(), _Publication_date = new WeakMap(), _Publication_deleted = new WeakMap(), _Publication_solved = new WeakMap(), _Publication_publication_type = new WeakMap(), _Publication_user = new WeakMap(), _Publication_settlement = new WeakMap(), _Publication_reactions = new WeakMap(), _Publication_images = new WeakMap(), _Publication_coments = new WeakMap();
;
export { Publication };
