import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css']
})
export class FirstFormComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';
  age: number = 0;

  clients =[];
  constructor() { }

  ngOnInit() {
  }

  save() {
    this.clients.push({
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
    })

    this.cancel();

    console.log(this.clients)
  }

  cancel() {
    this.firstName = '';
    this.lastName = '';
    this.age = 0;
  }

}
