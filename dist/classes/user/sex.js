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
var _Sex_id_sex, _Sex_sex;
class Sex {
    constructor(id_sex, sex) {
        _Sex_id_sex.set(this, void 0);
        _Sex_sex.set(this, void 0);
        this.getIdSex = () => {
            return __classPrivateFieldGet(this, _Sex_id_sex, "f");
        };
        this.getSex = () => {
            return __classPrivateFieldGet(this, _Sex_sex, "f");
        };
        __classPrivateFieldSet(this, _Sex_id_sex, id_sex, "f");
        __classPrivateFieldSet(this, _Sex_sex, sex, "f");
    }
    ;
}
_Sex_id_sex = new WeakMap(), _Sex_sex = new WeakMap();
;
export { Sex };
