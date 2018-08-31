import { Router, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { DetailComponent } from './detail.component'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,FormsModule,
        RouterModule.forChild([{
            path: '',
            component: DetailComponent
        }])
    ],
    declarations: [DetailComponent],
    exports: [DetailComponent]
})
export class DetailModule { }
