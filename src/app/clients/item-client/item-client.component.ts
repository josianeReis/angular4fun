import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../client.model';

@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.css']
})
export class ItemClientComponent implements OnInit {
  @Input() client: Client;
  onEdit: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  edit() {
    this.onEdit = true;
  }

  save() {

  }

  remove() {
    this.onEdit = false;
  }

}
