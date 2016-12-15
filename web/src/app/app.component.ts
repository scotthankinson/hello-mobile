import { Component } from '@angular/core';
import { HomePageComponent } from '../pages/home.page';
 
@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class AppComponent {
  
  rootPage = HomePageComponent;
 
}