import { NgModule } from '@angular/core';

import { Css3Component } from './css3.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
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
