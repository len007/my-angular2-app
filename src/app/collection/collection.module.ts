import { NgModule } from '@angular/core';
import { CollectionComponent } from './collection.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PaginationModule } from '../../shared/component/pagination/pagination.module';

@NgModule({
    imports: [
        CommonModule,
        PaginationModule,
        RouterModule.forChild([{
            path: '', component: CollectionComponent
          }])
    ],
    declarations: [
        CollectionComponent
    ],
    exports: [ CollectionComponent ]
})
export class CollectionModule { }
