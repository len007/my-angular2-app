import { NgModule } from '@angular/core';
import { ListComponent } from './list.component'
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DateBoxModule } from 'ng-easyui/components/datebox/datebox.module'

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    DateBoxModule,
    RouterModule.forChild([{
      path: '',
      component: ListComponent
    }])
  ],
  declarations: [
    ListComponent
  ],
  exports: [
    ListComponent,
    DateBoxModule
  ],
  providers: [],
})
export class ListModule { }