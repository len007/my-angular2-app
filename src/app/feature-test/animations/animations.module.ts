import { NgModule } from '@angular/core';
import { AnimationsComponent } from './animations.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([{
            path: '',
            component: AnimationsComponent
        }])
    ],
    declarations: [
        AnimationsComponent,
    ],
    exports: [
        AnimationsComponent,
    ]
})
export class AnimationsModule {

}
