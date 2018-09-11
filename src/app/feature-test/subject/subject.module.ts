import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SubjectComponent } from "./subject.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: '', component: SubjectComponent
        }])
    ],
    declarations: [SubjectComponent],
    exports:[SubjectComponent]
})
export class SubjectModule { }