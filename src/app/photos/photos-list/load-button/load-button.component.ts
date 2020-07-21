import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.css']
})
export class LoadButtonComponent implements OnInit {

 @Input() hasMore : boolean = true; //@Input é para receber dados lá do nosso HTML
  constructor() { }

  ngOnInit() {
  }

}
