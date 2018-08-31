import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'child1-content',
    template: `<button (click)="childShow2()">这是子组件，广播数据给父组件）</button>`
})
export class Child1Component {
    str: string = '这是子组件数据';
    @Output() outShow2: EventEmitter<any> = new EventEmitter;
    constructor(){}
    childShow2(){
        this.str = '这是子组件数据';
        this.outShow2.emit(this.str);
    }
}
