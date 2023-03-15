import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DespesaService } from './despesa.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DespesasComponent } from './componentes/despesas/despesas.component';
import { Alert, AlertModule } from './_alert';

@NgModule({
  declarations: [
    AppComponent,
    DespesasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule,
    AlertModule
  ],
  providers: [HttpClientModule, DespesaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
