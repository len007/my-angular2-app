import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { AppRouterModule } from './app-router.module'
import { HomeComponent } from './home/home.component'

@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule.forChild(AppRouterModule)
  ],
  declarations: [ 
    HomeComponent,
    AppComponent
  ],
  bootstrap:    [ AppComponent ],
  exports: [
    RouterModule
  ]
})
export class AppModule { }
