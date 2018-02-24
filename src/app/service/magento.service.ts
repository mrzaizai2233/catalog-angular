import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
@Injectable()
export class MagentoService {
  
  constructor(private _http:HttpClient) {}
  getAdminToken():Observable<any>{
    return this._http.post("/V1/integration/admin/token",{
        username:"admin",
        password:"Abc123@@"
    })
  }
}
