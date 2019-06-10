import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-container',
  templateUrl: './first-container.component.html',
  styleUrls: ['./first-container.component.css']
})
export class FirstContainerComponent implements OnInit {
  users = [
    {
      login: 'Bob',
      role: 'admin',
      lastlogin: new Date('2/1/2017'),
    },
    {
      login: 'Ana',
      role: 'user',
      lastlogin: new Date('8/05/2018'),
    },
    {
      login: 'Mark',
      role: 'admin',
      lastlogin: new Date('3/10/2019'),
    },
    {
      login: 'Mary',
      role: 'user',
      lastlogin: new Date('2/05/2018'),
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
