import { Veiculo } from "./veiculos";

export class Caminhao extends Veiculo {
  cacamba: number;

  constructor(cor: string, fabricante: string, modelo: string, cacamba: number) {
    super(cor, fabricante, modelo);
    this.cacamba = cacamba;
  }

  descarregar(): void {
    console.log("O caminhão está descarregando.");
  }
}
