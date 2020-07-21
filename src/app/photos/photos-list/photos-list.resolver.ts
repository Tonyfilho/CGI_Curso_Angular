import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { PhotoService } from "../photo/photo.service";
import { PhotoInteface } from "../photo/photo";

@Injectable({providedIn:'root'})
export class PhotoListResolver implements Resolve<Observable<PhotoInteface[]>>{
    

    constructor(private service: PhotoService){}
   
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ):Observable<PhotoInteface[]>{
        const USERNAME = route.params.userName;//userName é um variavel que temos em app.rounting 
        //return this.service.listaUsuarios(USERNAME);
        return this.service.listaDePaginaDoUsuario(USERNAME,4);

    }



}// fim do resolver