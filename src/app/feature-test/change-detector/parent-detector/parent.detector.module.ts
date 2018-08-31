import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ParentDetectorComponent } from './parent.detector.component';
import { ChildDetectorModule } from '../child-detector/child.detector.module';

@NgModule({
    imports: [
        ChildDetectorModule,
        RouterModule.forChild([{
            path: '',component: ParentDetectorComponent 
        }])
    ],
    declarations: [ParentDetectorComponent],
    exports: [ParentDetectorComponent]
})
export class ParentDetectorModule { }
