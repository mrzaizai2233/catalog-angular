import { Product } from './../model/product';
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams} from '@angular/common/http'
import {Observable} from 'rxjs'
@Injectable()
export class CatalogService {

  constructor(private _http:HttpClient) { }

  getProducts(){
    let params = new HttpParams();
    params = params.set('searchCriteria[pageSize]','10')
    return this._http.get("/V1/products",{
    
      params:params
    })
  }

}
