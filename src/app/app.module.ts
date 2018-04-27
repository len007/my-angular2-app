import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { MainModule } from './main/main.module';
import { HeaderModule } from '../shared/component/header/header.module';
import { LeftMenuModule } from '../shared/component/left-menu/leftmenu.module';

@NgModule({
  imports: [
    BrowserModule,
    MainModule,
    HeaderModule,
    LeftMenuModule,
    RouterModule.forRoot(AppRouterModule)
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
