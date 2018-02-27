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

  createProduct(){
    let product = {
      "product": {
        "sku": "MS-Champ",
        "name": "Champ Tee",
        "attribute_set_id": 9,
        "status": 1,
        "visibility": 4,
        "type_id": "configurable",
        "weight": "0.5",
        "extension_attributes": {
          "category_links": [
            {
              "position": 0,
              "category_id": "11"
            },
            {
              "position": 1,
              "category_id": "12"
            },
            {
              "position": 2,
              "category_id": "16"
            }
          ]
        },
        "custom_attributes": [
          {
            "attribute_code": "description",
            "value": "The Champ Tee keeps you cool and dry while you do your thing. Let everyone know who you are by adding your name on the back for only $10."
          },
          {
            "attribute_code": "tax_class_id",
            "value": "2"
          },
          {
            "attribute_code": "material",
            "value": "148"
          },
          {
            "attribute_code": "pattern",
            "value": "196"
          },
          {
            "attribute_code": "color",
            "value": "52"
          }
        ]
      }
    }
    return this._http.post('/V1/products',product)
  }

  getAttributeSets(){
    let params = new HttpParams();
    params = params.set('searchCriteria[filter_groups][0][filters][0][field]','attribute_set_name')
    params = params.set('searchCriteria[filter_groups][0][filters][0][value]','Top')
    params = params.set('searchCriteria[filter_groups][0][filters][0][condition_type]','eq')
    
    return this._http.get('/V1/eav/attribute-sets/list',{
      params:params
    })
  }

  getAttributeSet(id){
    let params = new HttpParams();
    return this._http.get(`/V1/products/attribute-sets/${id}/attributes`,{
      params:params
    })
  }

  getCatagorys(){
    let params = new HttpParams();
    params = params.set('searchCriteria[filter_groups][0][filters][0][field]','id')
    params = params.set('searchCriteria[filter_groups][0][filters][0][value]','1')
    params = params.set('searchCriteria[filter_groups][0][filters][0][condition_type]','eq')
    
    return this._http.get('/V1/categories',{
      params:params
    })
  }

}
