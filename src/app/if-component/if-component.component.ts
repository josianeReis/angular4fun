import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-component',
  templateUrl: './if-component.component.html',
  styleUrls: ['./if-component.component.css']
})
export class IfComponentComponent implements OnInit {

  showName: boolean = false;
  showAdress: boolean = false;
  showPhone: boolean = false;
  showAge: boolean = false;

  constructor() {
    
  }

  ngOnInit() {
  }

}
