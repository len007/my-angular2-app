import { NgModule } from '@angular/core';
import { GridComponent } from './grid.component'
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        SharedModule.forChild(),
        RouterModule.forChild([{
            path: '', component: GridComponent
          }])
    ],
    declarations:[ GridComponent ],
    exports: [ GridComponent]
})
export class GridModule { }
