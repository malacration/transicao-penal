import { 
  Component, 
  OnInit, 
  Input, 
  ViewChild,
  Injectable 
} from '@angular/core';

import{ ProcessoService } from '../../service/processo.service'
import{ ModeloDocumentoService } from '../../service/modelo-documento.service'
import{ Processo } from '../../model/processo'
import{ Relatorio } from '../../model/relatorio'
import{ ModeloDocumento } from '../../model/modelo-documento'
import{ ModeloVariaveis } from '../../model/modelo-variaveis'

@Component({
  selector: 'app-trasicao-penal',
  templateUrl: './relatorio.component.html',
  providers: [ProcessoService,ModeloDocumentoService],
  styleUrls: ['./relatorio.component.css']
})
@Injectable()
export class RelatorioComponent implements OnInit {
  
  testes = [1,2];
  relatorios: Relatorio[] = new Array()

  constructor(private processoService: ProcessoService,
    private modeloDocumentoService: ModeloDocumentoService) {
  }

  ngOnInit() {
    this.relatorios.push(new Relatorio(new Processo(),new Date(),5000,5));
  }

}
