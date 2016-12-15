import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { AppComponent } from './app.component';
import { HomePageComponent } from '../pages/home.page';

@NgModule({
  imports: [ IonicModule.forRoot(AppComponent) ],
  declarations: [ AppComponent, HomePageComponent ],
  entryComponents: [ HomePageComponent ],
  bootstrap: [ IonicApp ]
})

export class AppModule { }
