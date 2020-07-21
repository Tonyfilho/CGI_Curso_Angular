import { FilterByDescritionPipe } from './photos-list/filterByDescrition.pipe';
import { PhotosComponent } from './photos-list/photos/photos.component';
// este modulo declara todos os modulos de fotos

import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';
import { HttpClientModule } from '@angular/common/http';

import { PhotosListComponent } from './photos-list/photos-list.component';
import { CommonModule } from '@angular/common';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { LoadButtonComponent } from './photos-list/load-button/load-button.component';


@NgModule({
    declarations:[PhotoComponent,PhotosListComponent, PhotoFormComponent, PhotosComponent,FilterByDescritionPipe,LoadButtonComponent],

    
    // exports: [PhotoComponent],
    
    imports: [HttpClientModule,//pedido de importação do import { HttpClientModule} from '@angular/common/http';
         CommonModule] //pedido de importação do import { CommonModule } from '@angular/common' para substituir o BrowserModule;

})
export class PhotosModule{



}