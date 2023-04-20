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
var _State_id_state, _State_state;
class State {
    constructor(id_state, state) {
        _State_id_state.set(this, void 0);
        _State_state.set(this, void 0);
        this.getIdState = () => {
            return __classPrivateFieldGet(this, _State_id_state, "f");
        };
        this.getState = () => {
            return __classPrivateFieldGet(this, _State_state, "f");
        };
        __classPrivateFieldSet(this, _State_id_state, id_state, "f");
        __classPrivateFieldSet(this, _State_state, state, "f");
    }
    ;
}
_State_id_state = new WeakMap(), _State_state = new WeakMap();
;
export { State };
