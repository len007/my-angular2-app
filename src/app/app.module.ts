import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRouterModule } from './app-router.module';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ListModule } from './list/list.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FileUploadModule,
    HttpModule,
    FormsModule,
    ListModule,
    RouterModule.forRoot(AppRouterModule),
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
