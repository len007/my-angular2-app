import { NgModule } from '@angular/core';
import { ChildDetectorComponent } from './child.detector.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [ChildDetectorComponent],
    exports: [ChildDetectorComponent]
})
export class ChildDetectorModule { }
