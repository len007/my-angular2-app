import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Css3Component } from './css3.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([{
            path: '',
            component: Css3Component
        }])
    ],
    exports: [],
    declarations: [Css3Component],
    providers: [],
})
export class Css3Module { }
