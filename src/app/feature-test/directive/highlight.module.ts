import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, TemplateRef } from '@angular/core';
import { HighLightComponent } from './highlight.component';
import { HighLightDirective } from '../../../shared/directive/highlight.directive';
import { UnlessDirective } from '../../../shared/directive/unless.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([{
            path: '',
            component: HighLightComponent
        }])
    ],
    declarations: [
        HighLightComponent,
        HighLightDirective,
        UnlessDirective,
    ],
    exports: [HighLightComponent],
})
export class HighLightModule { }
