import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component'
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from  '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
      CommonModule,
      HttpModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forChild([{
        path: '',
        component: LoginComponent
    }])
    ],
    declarations: [
        LoginComponent,
    ],
    exports: [
        LoginComponent
    ],
    providers: [],
  })
  export class LoginModule { }