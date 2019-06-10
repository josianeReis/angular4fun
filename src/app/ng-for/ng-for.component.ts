import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  names=['ana', 'maria', 'pedro', 'jose', 'eu', 'voce', 'nao sei'];

  cities=[
    {
      name: 'Sao Paulo',
      state: 'SP'
    },
    {
      name: 'Uberlandia',
      state: 'MG'
    },
    {
      name: 'Ribeirao',
      state: 'SP'
    },
    {
      name: 'Curitiba',
      state: 'PR'
    },
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
