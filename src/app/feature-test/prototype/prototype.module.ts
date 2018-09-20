import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PrototypeComponent } from "./prototype.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: '',
            component: PrototypeComponent,
        }])
    ],
    exports: [PrototypeComponent],
    declarations: [PrototypeComponent]
}) export class PrototypeModule { }