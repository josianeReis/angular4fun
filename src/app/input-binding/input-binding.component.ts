import { Component, OnInit, Input } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {
  @Input() name: string;
  @Input('othername') lastname: string;

  clients: Client[];

  constructor() {
    this.clients = [
      {id: 1, name: 'Bob', lastname: 'Michael'},
      {id: 2, name: 'Ana', lastname: 'Carla'},
      {id: 3, name: 'Josi', lastname: 'Reis'},
      {id: 4, name: 'Carlos', lastname: 'Rocha'},
    ];
  }

  ngOnInit() {
  }

}
