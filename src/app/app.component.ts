import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers: [
    HomeComponent
  ]
})
export class AppComponent  { name = '郑小丽'; }
