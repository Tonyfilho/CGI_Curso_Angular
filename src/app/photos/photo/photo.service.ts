import { PhotosListComponent } from './../photos-list/photos-list.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PhotoInteface } from './photo';


const API = 'http://localhost:3000'

@Injectable({providedIn:'root'})
export class PhotoService {

    constructor(private http: HttpClient){
    
    }

    listaUsuarios(userName:string){
         //temos que fazer um Generics para o tipo de dados usando <PhotoInterface[]>
       return this.http
        .get<PhotoInteface[]>(API+ '/' + userName +'/photos');
            //obs: o subscrive tem que ser feito por quem chamar o metodo
    }

    listaDePaginaDoUsuario(userName: String, pagina:number){
        const PARAM = new HttpParams()
        .append('pagina',pagina.toString());
        return this.http.get<PhotoInteface[]>
            (API + '/' + userName + '/photos' , { params: PARAM})
    }

}// fim da class
