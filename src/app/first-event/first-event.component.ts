import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-event',
  templateUrl: './first-event.component.html',
  styleUrls: ['./first-event.component.css']
})

export class FirstEventComponent implements OnInit {
  value: number = 0;
  title = 'my title';
  constructor() { }

  ngOnInit() {

  }

  incBy(event) {
    this.value+= event;
  }

}
