import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PaginationModule } from '../../shared/component/pagination/pagination.module';

@NgModule({
    imports: [
        CommonModule,
        PaginationModule,
        RouterModule.forChild([{
            path: '', component: ListComponent,
        }, {
            path: 'add',
            loadChildren: './add/add.module#AddModule'
        }])
    ],
    declarations: [
        ListComponent,
    ],
    exports: [ListComponent]
})
export class ListModule { }
