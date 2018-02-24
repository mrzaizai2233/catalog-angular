import { Product } from './model/product';
import { CatalogService } from './service/catalog.service';
import { MagentoService } from './service/magento.service';
import { Component } from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  products:Product[];
  constructor(public magentoSV:MagentoService,public catalogSV:CatalogService){
    console.log("ok")
      this.magentoSV.getAdminToken().subscribe((Response:HttpResponse<String>)=>{
          console.log(Response)
      })

      this.catalogSV.getProducts().subscribe((res:any)=>{
        this.products =<Product[]>res.items
      })
  }
}
