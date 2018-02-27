import { CustomerService } from './service/customer.service';
import { of as observableOf} from 'rxjs/observable/of';
import { CartService } from './service/cart.service';
import { Product } from './model/product';
import { CatalogService } from './service/catalog.service';
import { MagentoService } from './service/magento.service';
import { Component } from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  products$:Observable<Product[]>;
  cartId$:Observable<any>;

  private Subject:Subject<any> = new Subject()
  
  constructor(public magentoSV:MagentoService,public catalogSV:CatalogService,public cartSV:CartService,private _customerSV:CustomerService){


      this.Subject.concatMap(sku=>
        {
          if(localStorage.getItem('cartId')){
            this.cartId$ = observableOf(localStorage.getItem('cartId'))
          }
          else {
            this.cartId$ =this.cartSV.createGuestCart();
          }
          return this.cartId$.mergeMap(cartId=>{
            localStorage.setItem('cartId',cartId)
            return this.cartSV.addItemGuestCart({
              "cart_item":{
                "quote_id":localStorage.getItem('cartId'),
                "sku":sku,
                "qty":1
              }
            })
          })
        }
      ).subscribe()


      this.products$ =  this.catalogSV.getProducts().map((rest:any)=>{
        return <Product[]>rest.items
      })

      // this._customerSV.customerToken({
      //   "username": "jdoe@example.com",
      //   "password": "Password1"
      //   }).subscribe(rest=>{
      //     localStorage.setItem('CustomerToken',<string>rest)
      //   })
  }

  addToCart(sku){
    this.Subject.next(sku)
  }
  processAddItem(sku){
    
  }
}
