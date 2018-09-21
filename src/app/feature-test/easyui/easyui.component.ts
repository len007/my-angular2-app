import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: './easyui.component.html',
    styleUrls: ['./easyui.component.css']
})
export class EasyuiComponent implements OnInit {
    tabArray: Array<any>;
    currentTab: number = 14;
    datagrid: any;
    calendarDate: Date;
    checkboxFruits: any;
    checkboxCheckedValues: any;
    comboboxValue: any;
    comboboxValues: any;
    comboTreeValue: any;
    comboTreeValues: any;
    dataListValues: any;
    dateboxValue: Date;
    datetimespinnerValue: String;
    draggables: any;
    clickOpen(sub) {
        this.currentTab = sub;
    }
    accordionPanelSelect(event) {
        console.log(event)
    }
    menuItemOnClick(event) {
        console.log(event);
    }
    calendarChange(event) {
        console.log(this.calendarDate);
    }
    checkBoxOnChange(event) {
        console.log(event);
        console.log(this.checkboxCheckedValues);
    }
    comboOnFilterChange(event) {
        console.log(event);
    }
    dragProxy(source) { }
    droppableOnDragEnter(event) { console.log(event); }
    droppableOnDragLeave(event) { console.log(event); }
    droppableOnDrop(event) { console.log(event); }
    fileButtonOnFileSelect(files) {
        if (files.length > 0) {
            console.log(files[0].name);
        }
    }
    fileButtonSuccess(event) { console.log(event); }
    fileButtonError(event) { console.log(event); }
    ngOnInit() {
        this.tabArray = [
            'EasyUI安装', '折叠面板', '按钮组',
            '菜单组', '日历', '复选框',
            '数据表格', '下拉框', '下拉树',
            '日期框', '时间微调', '对话框',
            '拖拽', '文件框', '布局',
            '', '', '',
            '', '', '',
        ]
        this.calendarDate = new Date();
        this.checkboxFruits = ['苹果', '香蕉', '梨', '橘子', '菠萝', '火龙果'];
        this.datagrid = [{ "code": "FI-SW-01", "name": "Koi", "unitcost": 10.00, "status": "P", "listprice": 36.50, "attr": "Large", "itemid": "EST-1" }];
        this.comboboxValue = 'Len';
        this.comboboxValues = [{ "id": 1, "text": "Java", "desc": "Write once, run anywhere" }];
        this.comboTreeValues = [{
            "id": 1, "text": "My Documents",
            "children": [{
                "id": 11, "text": "Photos", "state": "closed",
                "children": [{
                    "id": 111, "text": "Friend"
                }, {
                    "id": 112, "text": "Wife"
                }, { "id": 113, "text": "Company" }]
            }]
        }];
        this.dateboxValue = new Date();
        this.datetimespinnerValue = '6/01/2015 20:23';
        this.draggables = [{ id: 1, name: '电脑' }, { id: 2, name: '空调' }, { id: 3, name: '冰箱' }, { id: 4, name: '洗衣机' }, { id: 5, name: '热水器' }];
    }
}