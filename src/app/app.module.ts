import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//import { HttpClientModule} from '@angular/common/http';

//********************************importações locais

import { PhotosModule } from './photos/photos.modules';
import { AppRoutingModule } from './app.rounting.modules';
import { ErrorsModule } from './errors/errors.module';



@NgModule({
  declarations: [
    AppComponent,
  
    
  ],
  imports: [
    BrowserModule,
    PhotosModule,
    AppRoutingModule, // importação para linkar nosso APPROUTINGMODULE com este MODULE
    ErrorsModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
