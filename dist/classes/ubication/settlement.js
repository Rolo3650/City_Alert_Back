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
var _Settlement_id_stettlement, _Settlement_name, _Settlement_zip_pc, _Settlement_settlement_type;
class Settlement {
    constructor(id_stettlement, name, zip_pc, settlement_type) {
        _Settlement_id_stettlement.set(this, void 0);
        _Settlement_name.set(this, void 0);
        _Settlement_zip_pc.set(this, void 0);
        _Settlement_settlement_type.set(this, void 0);
        this.getIdSettlement = () => {
            return __classPrivateFieldGet(this, _Settlement_id_stettlement, "f");
        };
        this.getName = () => {
            return __classPrivateFieldGet(this, _Settlement_name, "f");
        };
        this.getZipPC = () => {
            return __classPrivateFieldGet(this, _Settlement_zip_pc, "f");
        };
        this.getSettlementType = () => {
            return __classPrivateFieldGet(this, _Settlement_settlement_type, "f");
        };
        __classPrivateFieldSet(this, _Settlement_id_stettlement, id_stettlement, "f");
        __classPrivateFieldSet(this, _Settlement_name, name, "f");
        __classPrivateFieldSet(this, _Settlement_zip_pc, zip_pc, "f");
        __classPrivateFieldSet(this, _Settlement_settlement_type, settlement_type, "f");
    }
    ;
}
_Settlement_id_stettlement = new WeakMap(), _Settlement_name = new WeakMap(), _Settlement_zip_pc = new WeakMap(), _Settlement_settlement_type = new WeakMap();
;
export { Settlement };
