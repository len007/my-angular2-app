import { Component, OnInit, OnChanges,Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
    pages:any={
        pageNo: 1,
        pageSize: 6,
        total: 1111,
    }
    maxPageNo: number;
    @Input() pageParams: any;
    @Output() changePageData: EventEmitter<any> = new EventEmitter; // 子组件向父组件广播事件，触发改变父组件属性的事件
    ngOnInit(){
        this.pages = this.pageParams;
        this.getMaxPageNo();
    }
    ngOnChanges(){
    }
    getMaxPageNo(){
        this.maxPageNo =  Math.ceil(this.pages.total/this.pages.pageSize);
    }
    chagePageFirst(){
        this.pages.pageNo = 1;
        this.changePageData.emit(this.pages);
    }
    chagePageBefore(){
        if(this.pages.pageNo > 1){
            this.pages.pageNo -= 1;
            this.changePageData.emit(this.pages);
        }
    }
    chagePageNext(){
        if(this.pages.pageNo < this.maxPageNo){
            this.pages.pageNo += 1;
            this.changePageData.emit(this.pages);
        }
    }
    chagePageLast(){
        this.pages.pageNo = this.maxPageNo;
        this.changePageData.emit(this.pages);
    }
}
