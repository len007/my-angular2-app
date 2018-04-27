import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module'
import { MainModule } from './main/main.module';


@NgModule({
  imports: [
    BrowserModule,
    MainModule,
    RouterModule.forRoot(AppRouterModule)
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
