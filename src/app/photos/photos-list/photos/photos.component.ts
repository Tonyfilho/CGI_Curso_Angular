import { PhotoInteface } from './../../photo/photo';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: PhotoInteface[] = [];  //para passar e receber dados para um componente ele precisa ser uma UNBINDING @Input

  photosRows: PhotoInteface[] = [];

  constructor() { }
  ngOnChanges(changes: SimpleChanges): // como Paramentro ele receber todas as mudanças dos Unbinding
    void {
      if(changes.photos)// testendo se ouve atulização no array de fotos
           this.photosRows = this.groupColuns(this.photos);
  }


  groupColuns(photos: PhotoInteface[]) {
    const NEWROWS = [];
      for (let index = 0; index < photos.length; index+=3) {
       NEWROWS.push(photos.slice(index, index + 3))// esta é a forma de pular de 3 x 3 dando um slice 012/345/678/....
        
      }

      return NEWROWS;
  }

}// fim da class
