import { Veiculo } from "./veiculos";

export class Moto extends Veiculo {
  constructor(cor: string, fabricante: string, modelo: string) {
    super(cor, fabricante, modelo);
  }

  empinar(): void {
    console.log("A moto está empinando.");
  }
}
