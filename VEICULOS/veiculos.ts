export class Veiculo {
    cor: string;
    fabricante: string;
    modelo: string;
  
    constructor(cor: string, fabricante: string, modelo: string) {
      this.cor = cor;
      this.fabricante = fabricante;
      this.modelo = modelo;
    }
  
    acelerar(): void {
      console.log("O veículo está acelerando.");
    }
  
    parar(): void {
      console.log("O veículo está parando.");
    }
  }
  