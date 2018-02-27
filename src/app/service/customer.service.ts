import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {

  constructor(private _http:HttpClient) { }

  createCustomer(customer){
    return this._http.post(`/V1/customers`,customer)
  }

  customerToken(customer){
    return this._http.post(`/V1/integration/customer/token`,customer)
  }
  
}
