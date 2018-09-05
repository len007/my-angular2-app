import { NgModule } from '@angular/core';
import { Html5Component } from './html5.component'
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        SharedModule.forChild(),
        RouterModule.forChild([{
            path: '', component: Html5Component
          }])
    ],
    declarations:[ Html5Component ],
    exports: [ Html5Component]
})
export class Html5Module { }
