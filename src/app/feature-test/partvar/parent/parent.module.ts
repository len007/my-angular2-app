import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ParentComponent } from './parent.component';
import { ChildComponent } from '../child/child.component';
import { Child1Component } from '../child1/child1.component';
@NgModule({
    imports: [
        RouterModule.forChild([{
            path: '', component: ParentComponent
        }])],
    declarations: [
        ParentComponent,
        ChildComponent,
        Child1Component
    ],
    exports:[ ParentComponent ]
})
export class ParentModule { }
