import { Component } from '@angular/core'

@Component({
  selector: 'MyFirst',
  templateUrl: './myFirst.component.html',
  styleUrls: ['./myFirst.component.css'],
})

export default class MyFirstComponent {

  private client = {
    firstName: '',
    lastName: '',
    adress: '',
    age: 0,
  }

  ngOnInit() {
  }

}