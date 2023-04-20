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
var _Reaction_id_reaction, _Reaction_user, _Reaction_reacted;
class Reaction {
    constructor(id_reaction, user, reacted) {
        _Reaction_id_reaction.set(this, void 0);
        _Reaction_user.set(this, void 0);
        _Reaction_reacted.set(this, void 0);
        this.getIdReaction = () => {
            return __classPrivateFieldGet(this, _Reaction_id_reaction, "f");
        };
        this.getUser = () => {
            return __classPrivateFieldGet(this, _Reaction_user, "f");
        };
        this.getReacted = () => {
            return __classPrivateFieldGet(this, _Reaction_reacted, "f");
        };
        __classPrivateFieldSet(this, _Reaction_id_reaction, id_reaction, "f");
        __classPrivateFieldSet(this, _Reaction_user, user, "f");
        __classPrivateFieldSet(this, _Reaction_reacted, reacted, "f");
    }
    ;
}
_Reaction_id_reaction = new WeakMap(), _Reaction_user = new WeakMap(), _Reaction_reacted = new WeakMap();
export { Reaction };
