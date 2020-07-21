import { PhotoService } from './../photo/photo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PhotoInteface } from './../photo/photo';
@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  //nosso array de dados que virá do banco de dados pela API_WEB
  photos: PhotoInteface[] = [];
  filterKeyUp: string = '';// recebendo da view um Pipe de implementação (keyup) = 'filterKeyUp = $event.target.value'   
  hasMore: boolean = true;//esta variavel está vinculada com a hasMore do load-button e dataBinding com o HTML deste componente
  currentPage : number = 1;
  userName: String = '';// receberemos o nome do usuário aqui nesta VAR

  // criando um construtor e dentro dele INJETAR a dependencia de acesso ao HTTP
  constructor(
    private activatecRouter: ActivatedRoute,
    private service: PhotoService){  }// fim do construtor   
  
  ngOnInit(): void {
    this.userName = this.activatecRouter.snapshot.params.userName;
    //this.photos = this.activatecRouter.snapshot.data.photosResolve; ou assim com 
    this.photos = this.activatecRouter.snapshot.data['photosResolve'];

  }

  //metodo de troca de pagina
  load(){
    this.service.listaDePaginaDoUsuario(this.userName, ++this.currentPage)
    .subscribe(itens => {
      //this.photos.push(...itens) é o mesmo que passar as posições (1,2,3,4, itens)
      this.photos = this.photos.concat(this.photos);
      if(!this.photos.length) this.hasMore = false;


    })

  }
}// fim da class PhotoListComponent
