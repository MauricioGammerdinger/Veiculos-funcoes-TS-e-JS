"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
var Veiculo = /** @class */ (function () {
    function Veiculo(cor, fabricante, modelo) {
        this.cor = cor;
        this.fabricante = fabricante;
        this.modelo = modelo;
    }
    Veiculo.prototype.acelerar = function () {
        console.log("O veículo está acelerando.");
    };
    Veiculo.prototype.parar = function () {
        console.log("O veículo está parando.");
    };
    return Veiculo;
}());
exports.Veiculo = Veiculo;
