import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomService } from '../../../shared/service/random.service';
import { RouterModule } from '@angular/router';
import { MserviceComponent } from './mservice.component';
import { Child1Component } from './child/child1.component';
import { Child2Component } from './child/child2.component';
import { Child3Component } from './child/child3.component';
import { Child4Component } from './child/child4.component';
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: '', component: MserviceComponent
        }])
    ],
    declarations: [
        MserviceComponent,
        Child1Component,
        Child2Component,
        Child3Component,
        Child4Component,
    ],
    providers: [
        RandomService
    ]
})
export class MserviceService{ }