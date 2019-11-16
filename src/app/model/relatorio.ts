import{Processo} from "./processo";

export class Relatorio {
  
  constructor(processo:Processo, dataInicio:Date, valorTotal: number, numeroParcela:number){
    this.dataInicio = dataInicio;
    this.valorTotal = valorTotal;
    this.numeroParcela = numeroParcela;
    this.parcelas = new Array<Date>();
    for (var i = 0; i < numeroParcela; i++) {
      this.parcelas.push(new Date(dataInicio.setMonth(dataInicio.getMonth()+i)))
    } 
    this.valorParcela = 500;
  }

  processo: Processo;
  parcelas: Date[] = new Array();
  valorParcela: number;
  status = "Aguardando Pagamento"
  dataInicio : Date;
  valorTotal : number;
  numeroParcela: number;
}
