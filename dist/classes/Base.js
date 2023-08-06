"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const crypto_1 = require("crypto");
class Base {
    constructor() {
        this._id = (0, crypto_1.randomUUID)();
    }
    get id() {
        return this._id;
    }
}
exports.Base = Base;
