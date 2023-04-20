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
var _Person_id_person, _Person_name, _Person_last_name, _Person_birthday, _Person_sex, _Person_settelement;
class Person {
    constructor(id_person, name, last_name, birthday, sex, settlement) {
        _Person_id_person.set(this, void 0);
        _Person_name.set(this, void 0);
        _Person_last_name.set(this, void 0);
        _Person_birthday.set(this, void 0);
        _Person_sex.set(this, void 0);
        _Person_settelement.set(this, void 0);
        this.getIdPerson = () => {
            return __classPrivateFieldGet(this, _Person_id_person, "f");
        };
        this.getName = () => {
            return __classPrivateFieldGet(this, _Person_name, "f");
        };
        this.getLastName = () => {
            return __classPrivateFieldGet(this, _Person_last_name, "f");
        };
        this.getBirthday = () => {
            return __classPrivateFieldGet(this, _Person_birthday, "f");
        };
        this.getSex = () => {
            return __classPrivateFieldGet(this, _Person_sex, "f");
        };
        this.getSettlement = () => {
            return __classPrivateFieldGet(this, _Person_settelement, "f");
        };
        __classPrivateFieldSet(this, _Person_id_person, id_person, "f");
        __classPrivateFieldSet(this, _Person_name, name, "f");
        __classPrivateFieldSet(this, _Person_last_name, last_name, "f");
        __classPrivateFieldSet(this, _Person_birthday, birthday, "f");
        __classPrivateFieldSet(this, _Person_sex, sex, "f");
        __classPrivateFieldSet(this, _Person_settelement, settlement, "f");
    }
    ;
}
_Person_id_person = new WeakMap(), _Person_name = new WeakMap(), _Person_last_name = new WeakMap(), _Person_birthday = new WeakMap(), _Person_sex = new WeakMap(), _Person_settelement = new WeakMap();
;
export { Person };
