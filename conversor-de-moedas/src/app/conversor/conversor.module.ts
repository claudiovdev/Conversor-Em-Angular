import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ConversorService, MoedaService } from './services';
import { ConversorComponent } from './components';



@NgModule({
  declarations: [
    ConversorComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ConversorComponent,
  ],
  providers: [
    MoedaService,
    ConversorService,
  ]
})
export class ConversorModule { }
