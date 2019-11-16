
import{Parte} from "./parte";


export class Processo {
  id: number;
  numeroProcesso: string;
  partes: Parte[];
  orgaoJulgadorNome: string;
  orgaoJultadorEndereco: string;
  autorFato: string;
  cpfAutorFato: string;
  jusDireito: string;
}
