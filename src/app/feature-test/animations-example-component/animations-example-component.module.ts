import { NgModule } from '@angular/core';
import { AnimationsExampleComponentComponent } from './animations-example-component.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([{
            path: '',
            component: AnimationsExampleComponentComponent
        }])
    ],
    declarations: [
        AnimationsExampleComponentComponent,
    ],
    exports: [
        AnimationsExampleComponentComponent,
    ]
})
export class AnimationsExampleComponentModule {

}
