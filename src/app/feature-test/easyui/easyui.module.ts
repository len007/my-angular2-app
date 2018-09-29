import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { EasyuiComponent } from "./easyui.component";

import { AccordionModule } from 'node_modules/ng-easyui/components/accordion/accordion.module'

import { LinkButtonModule } from 'node_modules/ng-easyui/components/linkbutton/linkbutton.module';

import { MenuModule } from 'node_modules/ng-easyui/components/menu/menu.module';
import { MenuButtonModule } from 'node_modules/ng-easyui/components/menubutton/menubutton.module';

import { CalendarModule } from 'node_modules/ng-easyui/components/calendar/calendar.module';

import { CheckboxModule } from 'node_modules/ng-easyui/components/checkbox/checkbox.module';

import { GridBaseModule } from 'node_modules/ng-easyui/components/gridbase/grid-base.module';
import { DataGridModule } from 'node_modules/ng-easyui/components/datagrid/datagrid.module';

import { ComboBoxModule } from 'node_modules/ng-easyui/components/combobox/combobox.module';

import { TreeModule } from 'node_modules/ng-easyui/components/tree/tree.module';
import { ComboTreeModule } from 'node_modules/ng-easyui/components/combotree/combotree.module';

import { DateBoxModule } from 'node_modules/ng-easyui/components/datebox/datebox.module';

import { DateTimeSpinnerModule } from 'node_modules/ng-easyui/components/datetimespinner/datetimespinner.module';
import { PanelModule } from 'node_modules/ng-easyui/components/panel/panel.module';
import { TimeSpinnerModule } from 'node_modules/ng-easyui/components/timespinner/timespinner.module';


import { DialogModule } from 'node_modules/ng-easyui/components/dialog/dialog.module';

import { DraggableModule } from 'node_modules/ng-easyui/components/draggable/draggable.module';
import { DroppableModule } from 'node_modules/ng-easyui/components/droppable/droppable.module';

import { FileButtonModule } from 'node_modules/ng-easyui/components/filebutton/filebutton.module';

import { LayoutModule } from 'node_modules/ng-easyui/components/layout/layout.module';

import { ProgressBarModule } from 'node_modules/ng-easyui/components/progressbar/progressbar.module';

import { NumberBoxModule } from 'node_modules/ng-easyui/components/numberbox/numberbox.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AccordionModule,
        LinkButtonModule,
        MenuModule, MenuButtonModule,
        CalendarModule,
        CheckboxModule,
        GridBaseModule, DataGridModule,
        ComboBoxModule,
        TreeModule, ComboTreeModule,
        DateBoxModule,
        DateTimeSpinnerModule, PanelModule, TimeSpinnerModule,
        DialogModule,
        DraggableModule, DroppableModule,
        FileButtonModule,
        LayoutModule,
        ProgressBarModule,
        NumberBoxModule,
        RouterModule.forChild([{
            path: '',
            component: EasyuiComponent
        }])
    ],
    declarations: [EasyuiComponent],
    exports: [EasyuiComponent],
})
export class EasyuiModule { }