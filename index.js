"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isFiniteNumber_1 = require("@writetome51/is-finite-number");


function errorIfNotFiniteNumber(arg) {
    if (isFiniteNumber_1.notFiniteNumber(arg))
        throw new Error("Input must be a finite number of type 'number'");
}
exports.errorIfNotFiniteNumber = errorIfNotFiniteNumber;
