import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRouterModule } from './app-router.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from  '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';
import { DateBoxModule } from 'ng-easyui/components/datebox/datebox.module';
import {HashLocationStrategy , LocationStrategy} from '@angular/common';
import { CookieModule } from 'ngx-cookie';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    CookieModule.forRoot(),
    HttpClientModule,
    FormsModule,
    EasyUIModule,
    DateBoxModule,
    RouterModule.forRoot(AppRouterModule),
  ],
  declarations: [
    AppComponent,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
