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
var _PostalCode_zip_pc, _PostalCode_state, _PostalCode_municipality;
class PostalCode {
    constructor(zip_pc, state, municipality) {
        _PostalCode_zip_pc.set(this, void 0);
        _PostalCode_state.set(this, void 0);
        _PostalCode_municipality.set(this, void 0);
        this.getIdPC = () => {
            return __classPrivateFieldGet(this, _PostalCode_zip_pc, "f");
        };
        this.getState = () => {
            return __classPrivateFieldGet(this, _PostalCode_state, "f");
        };
        this.getMunicipality = () => {
            return __classPrivateFieldGet(this, _PostalCode_municipality, "f");
        };
        __classPrivateFieldSet(this, _PostalCode_zip_pc, zip_pc, "f");
        __classPrivateFieldSet(this, _PostalCode_state, state, "f");
        __classPrivateFieldSet(this, _PostalCode_municipality, municipality, "f");
    }
    ;
}
_PostalCode_zip_pc = new WeakMap(), _PostalCode_state = new WeakMap(), _PostalCode_municipality = new WeakMap();
;
export { PostalCode };
