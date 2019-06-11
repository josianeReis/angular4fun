import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-event',
  templateUrl: './child-event.component.html',
  styleUrls: ['./child-event.component.css']
})
export class ChildEventComponent implements OnInit {
  @Input() title: string;
  @Output() inc = new EventEmitter<number>();
   
  constructor() { }

  ngOnInit() {
  }

  btnClick(n) {
    this.inc.emit(n);
  }

}
