import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class Interceptor implements  HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers = new HttpHeaders();
    req.headers.set('Authorization','Bearer t8m6g7ij7o6gwpb88xd5yno3ukulavhq');
    console.log(req)
    return next.handle(req);
  }

}
