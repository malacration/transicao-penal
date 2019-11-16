/*
* Server side pagination Angular 2
* @autthor Shashank Tiwari
*/
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Pagination } from '../../pagination/pagination';

import { Observable } from 'rxjs/Rx';
import {HttpServiceModelInterface} from './http.service.model.interface'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class HttpService {

    private BASE_URL:string = 'https://git.tjro.jus.br/api/v4/';

    constructor(private http:Http) {

    }

    public getdata(page: Pagination, model: HttpServiceModelInterface): Observable<any>{
        let t = new Headers({headers: {'Private-Token':'_JRosmz_gyKaHTv327P-'}});
        console.log(page);
        let requestOptions = new RequestOptions(Object.assign({
            headers: {'Private-Token':'_JRosmz_gyKaHTv327P-'},
            params: {page: page.currentPage}
          }));
          console.log(`${this.BASE_URL}/${model.getNomeEntidade()}/`);
        return this.http
            .get(`${this.BASE_URL}/${model.getNomeEntidade()}/`,requestOptions)
            .map((response:Response) => {
                    if(response.headers){
                        console.log(response.headers.get('X-Total'));
                        if(response.headers.get('X-Total')){
                            page.totalItems = parseInt(response.headers.get('X-Total'));
                        }
                    }
                    return response.json();
            });
            //.catch((error:any) => Observable.throw(error.json()) || 'Server Error');
    }

}