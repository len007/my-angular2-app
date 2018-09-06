import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ListComponent } from './list.component'
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from  '@angular/common/http';


@NgModule({
    imports: [
      BrowserModule,
      CommonModule,
    //   FileUploadModule,
      HttpModule,
      FormsModule,
      HttpClientModule
    ],
    declarations: [
      ListComponent,
    ],
    exports: [
        ListComponent
    ],
    providers: [],
  })
  export class ListModule { }