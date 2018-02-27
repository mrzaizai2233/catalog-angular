import { CustomerService } from './service/customer.service';
import { CartService } from './service/cart.service';
import { Interceptor } from './service/interceptor';
import { CatalogService } from './service/catalog.service';
import { MagentoService } from './service/magento.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:Interceptor,
    multi:true
  },MagentoService,CatalogService,CartService,CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
