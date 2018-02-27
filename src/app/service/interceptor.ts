import { MagentoService } from './magento.service';
import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import { concatMap } from 'rxjs/operators'
@Injectable()
export class Interceptor implements  HttpInterceptor {
  constructor(private _magentoService:MagentoService){
   
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let Token$:Observable<string>=null;
    
    if(req.url=='/V1/integration/admin/token'){
      return next.handle(req);      
    }
    if(this.Token){
      Token$ = of(this.Token)
    } else {      
      Token$ = this._magentoService.getAdminToken()
    }
    return Token$.pipe(
      concatMap(res=>{
        localStorage.setItem('Token',res)
        let reqClone = req.clone({setHeaders:{'Authorization':'Bearer '+this.Token}})
        //  reqClone = req.clone({setHeaders:{'Authorization':'Bearer otxcsp0dgrdjf3v7n8g8sdo9rcp14v6w'}})
        return next.handle(reqClone)
      })
    )
  }

  get Token(){
    return localStorage.getItem('Token')
  }



}
