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
var _PublicationType_id_publication_type, _PublicationType_publication_type;
class PublicationType {
    constructor(id_publication_type, publication_type) {
        _PublicationType_id_publication_type.set(this, void 0);
        _PublicationType_publication_type.set(this, void 0);
        this.getIdPublicationType = () => {
            return __classPrivateFieldGet(this, _PublicationType_id_publication_type, "f");
        };
        this.getPublicationType = () => {
            return __classPrivateFieldGet(this, _PublicationType_publication_type, "f");
        };
        __classPrivateFieldSet(this, _PublicationType_id_publication_type, id_publication_type, "f");
        __classPrivateFieldSet(this, _PublicationType_publication_type, publication_type, "f");
    }
    ;
}
_PublicationType_id_publication_type = new WeakMap(), _PublicationType_publication_type = new WeakMap();
;
export { PublicationType };
