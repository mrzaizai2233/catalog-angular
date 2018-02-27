import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable()
export class CartService {

  constructor(private _http:HttpClient) { }

  createCart(){
    return this._http.post('/V1/carts/mine',{})
  }

  addItem(payload){
    return this._http.post('/V1/carts/mine/items',payload)
  }

  createGuestCart(){
    return this._http.post(`/V1/guest-carts`,{})
  }

  addItemGuestCart(item){
    return this._http.post(`/V1/guest-carts/${localStorage.getItem('GuestCartId')}/items`,item)
  }

}
