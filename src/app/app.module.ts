import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {
  MatRadioModule,
  MatListModule,
  MatIconModule,
  MatProgressBarModule,
} from '@angular/material';


import { AppComponent } from './app.component';
import MyFirstComponent from './myFirst.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ClassComponentComponent } from './class-component/class-component.component';
import { IfComponentComponent } from './if-component/if-component.component';
import { SubNgIfComponent } from './if-component/sub-ng-if/sub-ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { FirstFormComponent } from './first-form/first-form.component';
import { FirstSwitchComponent } from './first-switch/first-switch.component';
import { FirstTemplateComponent } from './first-template/first-template.component';
import { FirstContainerComponent } from './first-container/first-container.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { InputBindingComponent } from './input-binding/input-binding.component';
import { ClientComponent } from './input-binding/client/client.component';
import { FirstEventComponent } from './first-event/first-event.component';
import { ChildEventComponent } from './first-event/child-event/child-event.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    SecondComponentComponent,
    ClassComponentComponent,
    IfComponentComponent,
    SubNgIfComponent,
    NgForComponent,
    FirstFormComponent,
    FirstSwitchComponent,
    FirstTemplateComponent,
    FirstContainerComponent,
    NgContentComponent,
    InputBindingComponent,
    ClientComponent,
    FirstEventComponent,
    ChildEventComponent
  ], 
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatSelectModule,
    FormsModule,
    MatRadioModule,
    MatListModule,
    MatIconModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
