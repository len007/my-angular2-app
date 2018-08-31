import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'child-content',
    template: ``
})
export class ChildComponent {
    str: string = '这是子组件数据';
    @Output() outShow2: EventEmitter<any> = new EventEmitter;
    constructor(){}
    show1(event){
        alert('父组件传来的值是：'+ event);
    }
}
