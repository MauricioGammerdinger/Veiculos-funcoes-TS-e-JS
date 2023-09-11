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
exports.Caminhao = void 0;
var veiculos_1 = require("./veiculos");
var Caminhao = /** @class */ (function (_super) {
    __extends(Caminhao, _super);
    function Caminhao(cor, fabricante, modelo, cacamba) {
        var _this = _super.call(this, cor, fabricante, modelo) || this;
        _this.cacamba = cacamba;
        return _this;
    }
    Caminhao.prototype.descarregar = function () {
        console.log("O caminhão está descarregando.");
    };
    return Caminhao;
}(veiculos_1.Veiculo));
exports.Caminhao = Caminhao;
