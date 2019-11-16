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
  templateUrl: './trasicao-penal.component.html',
  providers: [ProcessoService,ModeloDocumentoService],
  styleUrls: ['./trasicao-penal.component.css']
})
@Injectable()
export class TransicaoPenalComponent implements OnInit {
  
  public numeroProcesso : string;
  processo :Processo = null;
  modeloDocumentos = this.modeloDocumentoService.getAll();
  modeloSelecionado : Number;
  modeloVariaveis : ModeloVariaveis = new ModeloVariaveis();

  name = 'ng2-ckeditor';
  ckeConfig: any;
  mycontent: string;
  log: string = '';
  @ViewChild("myckeditor") ckeditor: any;

  constructor(private processoService: ProcessoService,
    private modeloDocumentoService: ModeloDocumentoService) {
  }

  ngOnInit() {
    this.ckeConfig = {
      height: 500,
      allowedContent: false,
      forcePasteAsPlainText: true,
      font_names: 'Arial;Times New Roman;Verdana',
      toolbarGroups: [
        { name: 'document', groups: ['mode', 'document', 'doctools'] },
        { name: 'clipboard', groups: ['clipboard', 'undo'] },
        { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
        { name: 'forms', groups: ['forms'] },
        '/',
        { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
        { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
        { name: 'links', groups: ['links'] },
        { name: 'insert', groups: ['insert'] },
        '/',
        { name: 'styles', groups: ['styles'] },
        { name: 'colors', groups: ['colors'] },
        { name: 'tools', groups: ['tools'] },
        { name: 'others', groups: ['others'] },
        { name: 'about', groups: ['about'] }
      ],
      removeButtons: 'Save,NewPage,Preview,Templates,Find,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Strike,Subscript,Superscript,CopyFormatting,RemoveFormat,Outdent,Indent,CreateDiv,Blockquote,BidiLtr,BidiRtl,Language,Unlink,Anchor,Flash,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Maximize,ShowBlocks,About'
    };
  }

  onChange($event: any): void {
  }

  
  buscaProcesso(){
    this.processo = this.processoService.findByNumero(this.numeroProcesso);
    this.modeloVariaveis.processo = this.processo;
  }

  selecionaModelo(evento:any){
    console.log(evento);
    this.mycontent = this.modeloDocumentoService.findById(evento).getModeloProcessado(this.modeloVariaveis)
  }
  
  selecionaParte(evento:any){
    this.modeloVariaveis.parte = this.processo.partes.find(p => p.id = evento);
  }

  salvar(){
    // var relatorios = JSON.parse(localStorage.getItem("relatorios"));
    // if(relatorios != undefined){
    //   console.log("Existe");
    //   relatorios.push(new Relatorio(new Processo(),new Date(),5000,2));
    // }
    // else{
    //   relatorios = new Array();
    //   relatorios.push(new Relatorio(new Processo(),new Date(),5000,2));
    // }
      
    // localStorage.setItem("relatorios", JSON.stringify(relatorios));
  }

}
