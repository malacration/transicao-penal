import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Processo } from '../model/processo';
import { p } from '@angular/core/src/render3';
// import {  } from '@types/node';

declare var require: any

@Injectable()
export class ProcessoService {

    processos: Processo[] = require('./processos.json');

    constructor(private http:Http) {

    }

    getAll() : Processo[]{
        return this.processos;
    }

    findByNumero(numeroProcesso: String) : Processo{
        return this.processos.find(p => p.numeroProcesso == numeroProcesso);
    }

}