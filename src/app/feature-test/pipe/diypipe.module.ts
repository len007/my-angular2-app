import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DiypipeComponent } from './diypipe.component'
import { DiyMyPipePipe } from './diypipe'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: '',component: DiypipeComponent
        }])
    ],
    declarations: [ DiypipeComponent ,DiyMyPipePipe],
    exports: [ DiypipeComponent,DiyMyPipePipe ],
    providers: [DiyMyPipePipe]
})
export class DiypipeModule { }
