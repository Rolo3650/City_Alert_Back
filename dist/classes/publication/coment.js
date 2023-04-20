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
var _Coment_id_coment, _Coment_coment, _Coment_date, _Coment_deleted, _Coment_user;
class Coment {
    constructor(id_coment, coment, date, deleted, user) {
        _Coment_id_coment.set(this, void 0);
        _Coment_coment.set(this, void 0);
        _Coment_date.set(this, void 0);
        _Coment_deleted.set(this, void 0);
        _Coment_user.set(this, void 0);
        this.getIdComent = () => {
            return __classPrivateFieldGet(this, _Coment_id_coment, "f");
        };
        this.getComent = () => {
            return __classPrivateFieldGet(this, _Coment_coment, "f");
        };
        this.getDate = () => {
            return __classPrivateFieldGet(this, _Coment_date, "f");
        };
        this.getDeleted = () => {
            return __classPrivateFieldGet(this, _Coment_deleted, "f");
        };
        this.getUser = () => {
            return __classPrivateFieldGet(this, _Coment_user, "f");
        };
        __classPrivateFieldSet(this, _Coment_id_coment, id_coment, "f");
        __classPrivateFieldSet(this, _Coment_coment, coment, "f");
        __classPrivateFieldSet(this, _Coment_date, date, "f");
        __classPrivateFieldSet(this, _Coment_deleted, deleted, "f");
        __classPrivateFieldSet(this, _Coment_user, user, "f");
    }
    ;
}
_Coment_id_coment = new WeakMap(), _Coment_coment = new WeakMap(), _Coment_date = new WeakMap(), _Coment_deleted = new WeakMap(), _Coment_user = new WeakMap();
export { Coment };
