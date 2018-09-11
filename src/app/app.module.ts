import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { HeaderModule } from '../shared/component/header/header.module';
import { LeftMenuModule } from '../shared/component/left-menu/leftmenu.module';
import {HttpClientModule} from "@angular/common/http";

import { ContactService } from '../shared/service/contact.service'
import { LoggerService } from '../shared/service/logger.service';
import { MessageService } from '../shared/service/message.service';
import { urlHelpObservableService } from '../shared/service/urlHelpObservable.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeaderModule,
    LeftMenuModule,
    HttpClientModule,
    SharedModule.forChild(),
    RouterModule.forRoot(AppRouterModule)
  ],
  providers:[ ContactService, LoggerService,MessageService, urlHelpObservableService ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
