import { CatalogService } from './service/catalog.service';
import { MagentoService } from './service/magento.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MagentoService,CatalogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
