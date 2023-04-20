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
var _Municipality_id_municipality, _Municipality_municipality;
class Municipality {
    constructor(id_municipality, municipality) {
        _Municipality_id_municipality.set(this, void 0);
        _Municipality_municipality.set(this, void 0);
        this.getIdMunicipality = () => {
            return __classPrivateFieldGet(this, _Municipality_id_municipality, "f");
        };
        this.getMunicipality = () => {
            return __classPrivateFieldGet(this, _Municipality_municipality, "f");
        };
        __classPrivateFieldSet(this, _Municipality_id_municipality, id_municipality, "f");
        __classPrivateFieldSet(this, _Municipality_municipality, municipality, "f");
    }
    ;
}
_Municipality_id_municipality = new WeakMap(), _Municipality_municipality = new WeakMap();
;
export { Municipality };
