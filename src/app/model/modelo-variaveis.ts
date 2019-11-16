
import{Parte} from "./parte";
import{Processo} from "./processo";

export class ModeloVariaveis {
  processo: Processo;
  parte: Parte;
  valor: Number = 0;
  parcelas: Number = 1;
  dataPagamento : Date = new Date();
}
