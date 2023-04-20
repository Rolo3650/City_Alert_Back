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
var _UserType_id_user_type, _UserType_user_type;
class UserType {
    constructor(id_user_type, user_type) {
        _UserType_id_user_type.set(this, void 0);
        _UserType_user_type.set(this, void 0);
        this.getIdUserType = () => {
            return __classPrivateFieldGet(this, _UserType_id_user_type, "f");
        };
        this.getUserType = () => {
            return __classPrivateFieldGet(this, _UserType_user_type, "f");
        };
        __classPrivateFieldSet(this, _UserType_id_user_type, id_user_type, "f");
        __classPrivateFieldSet(this, _UserType_user_type, user_type, "f");
    }
    ;
}
_UserType_id_user_type = new WeakMap(), _UserType_user_type = new WeakMap();
;
export { UserType };
