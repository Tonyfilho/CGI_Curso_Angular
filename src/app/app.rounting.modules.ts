import { NgModule } from "@angular/core";
import { Routes, RouterModule} from "@angular/router"

import { PhotosListComponent } from "./photos/photos-list/photos-list.component";
import { PhotoFormComponent } from "./photos/photo-form/photo-form.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { PhotoListResolver } from "./photos/photos-list/photos-list.resolver";

//nosso array de constantes de rotas, já tipado com o tipo de dados para Routes
const ROTAS : Routes = [
    {path: 'user/:userName', component : PhotosListComponent, 
    resolve: { photosResolve: PhotoListResolver }},//esta VARIÁVEL USERNAME receberá lá do photos-list o nome da pagina

    {path: 'p/add', component : PhotoFormComponent},
    {path: '**', component : NotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(ROTAS)],

    exports: [RouterModule]

})
export class AppRoutingModule{


}//fim da class