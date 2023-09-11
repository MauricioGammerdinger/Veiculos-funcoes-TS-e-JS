"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var veiculos_1 = require("./veiculos");
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(cor, fabricante, modelo) {
        return _super.call(this, cor, fabricante, modelo) || this;
    }
    Moto.prototype.empinar = function () {
        console.log("A moto está empinando.");
    };
    return Moto;
}(veiculos_1.Veiculo));
exports.Moto = Moto;
