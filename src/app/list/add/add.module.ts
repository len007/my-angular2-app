import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './add.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule, FormsModule,
        RouterModule.forChild([{
            path: '', component: AddComponent
        }])
    ],
    declarations: [AddComponent],
    exports: [AddComponent]
})
export class AddModule { }
