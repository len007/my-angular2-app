import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([{
            path: '', component: ListComponent
          }])
    ],
    declarations: [ListComponent],
    exports: [ ListComponent ]
})
export class ListModule { }
