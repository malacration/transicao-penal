
import{ModeloVariaveis} from "./modelo-variaveis";

export class ModeloDocumento {
  
  id: number;
  descricao: string;
  header: string;
  conteudo: string;
  
  getModeloProcessado(variaveis:ModeloVariaveis): string{
    if(1==1){
      var header = this.header
            .replace("{{orgao_julgador.nome}}",variaveis.processo.orgaoJulgadorNome)
            .replace("{{orgao_julgador.endereco}}",variaveis.processo.orgaoJultadorEndereco)
            .replace("{{processo.numero}}",variaveis.processo.numeroProcesso);

      var conteudo = this.conteudo
            .replace("{{valor}}",variaveis.valor.toString())
            .replace("{{autorFato}}",variaveis.processo.autorFato)
            .replace("{{cpfAutorFato}}",variaveis.processo.cpfAutorFato)
            .replace("{{jusDireito}}",variaveis.processo.jusDireito)
            .replace("{{parcelas}}",variaveis.parcelas.toString())
            .replace("{{dataPagamento}}",variaveis.dataPagamento.toLocaleDateString());
      return header+conteudo;
    }else{
      return this.header+this.conteudo;
    }
  }
}
