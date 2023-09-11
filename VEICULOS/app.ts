import { Veiculo } from "./veiculos";
import { Caminhao } from "./Caminhao";
import { Moto } from "./Moto";

const meuVeiculo = new Veiculo("azul", "Toyota", "Corolla");
console.log("Veículo - Cor:", meuVeiculo.cor);
console.log("Veículo - Fabricante:", meuVeiculo.fabricante);
console.log("Veículo - Modelo:", meuVeiculo.modelo);

meuVeiculo.acelerar();
meuVeiculo.parar();

const meuCaminhao = new Caminhao("vermelho", "Volvo", "FH16", 10);
console.log("Caminhão - Cor:", meuCaminhao.cor);
console.log("Caminhão - Fabricante:", meuCaminhao.fabricante);
console.log("Caminhão - Modelo:", meuCaminhao.modelo);
console.log("Caminhão - Caçamba:", meuCaminhao.cacamba);

meuCaminhao.acelerar();
meuCaminhao.parar();
meuCaminhao.descarregar();

const minhaMoto = new Moto("preta", "Honda", "CBR600RR");
console.log("Moto - Cor:", minhaMoto.cor);
console.log("Moto - Fabricante:", minhaMoto.fabricante);
console.log("Moto - Modelo:", minhaMoto.modelo);

minhaMoto.acelerar();
minhaMoto.parar();
minhaMoto.empinar();
