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
var _User_id_user, _User_email, _User_password, _User_create_date, _User_person, _User_user_type;
class User {
    constructor(id_user, email, password, create_date, person, user_type) {
        _User_id_user.set(this, void 0);
        _User_email.set(this, void 0);
        _User_password.set(this, void 0);
        _User_create_date.set(this, void 0);
        _User_person.set(this, void 0);
        _User_user_type.set(this, void 0);
        this.getIdUser = () => {
            return __classPrivateFieldGet(this, _User_id_user, "f");
        };
        this.getEmail = () => {
            return __classPrivateFieldGet(this, _User_email, "f");
        };
        this.getPassword = () => {
            return __classPrivateFieldGet(this, _User_password, "f");
        };
        this.getCreateDate = () => {
            return __classPrivateFieldGet(this, _User_create_date, "f");
        };
        this.getPerson = () => {
            return __classPrivateFieldGet(this, _User_person, "f");
        };
        this.getUserType = () => {
            return __classPrivateFieldGet(this, _User_user_type, "f");
        };
        __classPrivateFieldSet(this, _User_id_user, id_user, "f");
        __classPrivateFieldSet(this, _User_email, email, "f");
        __classPrivateFieldSet(this, _User_password, password, "f");
        __classPrivateFieldSet(this, _User_create_date, create_date, "f");
        __classPrivateFieldSet(this, _User_person, person, "f");
        __classPrivateFieldSet(this, _User_user_type, user_type, "f");
    }
    ;
}
_User_id_user = new WeakMap(), _User_email = new WeakMap(), _User_password = new WeakMap(), _User_create_date = new WeakMap(), _User_person = new WeakMap(), _User_user_type = new WeakMap();
;
export { User };
