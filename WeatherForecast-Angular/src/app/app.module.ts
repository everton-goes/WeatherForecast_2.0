import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CidadeComponent } from './componentes/cidade/cidade.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PrevisaoTempoComponent } from './componentes/previsao-tempo/previsao-tempo.component';

@NgModule({
  declarations: [
    AppComponent,
    CidadeComponent,
    PrevisaoTempoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ModalModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
