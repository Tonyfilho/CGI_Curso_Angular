import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ // criando o component via terminal, ele já coloca aqui dentro de ARRAY de declaration este component
    NotFoundComponent
  ],
 // export: [NotFoundComponent]
})
export class ErrorsModule { }
