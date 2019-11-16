import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ModeloDocumento } from '../model/modelo-documento';

declare var require: any

@Injectable()
export class ModeloDocumentoService {

    modelos: ModeloDocumento[] = require('./modelo-documento.json');

    constructor(private http:Http) {

    }

    getAll() : ModeloDocumento[]{
        return this.modelos.map(p =>Object.assign(new ModeloDocumento(), p));
    }

    findById(id: Number) : ModeloDocumento{
        return Object.assign(new ModeloDocumento(),this.modelos.find(p => p.id == id));
    }
}