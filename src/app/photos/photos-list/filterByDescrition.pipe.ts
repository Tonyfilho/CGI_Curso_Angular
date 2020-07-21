import { PhotoInteface } from './../photo/photo';
import { Pipe, PipeTransform } from "@angular/core";



@Pipe({name: 'filterByDescrition'})
export class FilterByDescritionPipe implements PipeTransform {
    
    transform(listaDePhotos: PhotoInteface[], descriptionQuery: string) {
        descriptionQuery = descriptionQuery.toLowerCase().trim();//retirando e espaços e erros que virá do teclado

        if (descriptionQuery) {
            //logica que recebe os itens da interface, fz um FOR e filtra incluindo o que vem do teclado
            return listaDePhotos.filter(itens => itens.description.toLowerCase().includes(descriptionQuery));
        }else{

            return listaDePhotos;
        }

    }



}// fim da class