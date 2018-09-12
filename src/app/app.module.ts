import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRouterModule } from './app-router.module';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ListModule } from './list/list.module';
import { myCommonService } from './mycommon.service';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpModule,
    FormsModule,
    ListModule,
    EasyUIModule,
    RouterModule.forRoot(AppRouterModule),
  ],
  declarations: [
    AppComponent,
  ],
  providers: [myCommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
