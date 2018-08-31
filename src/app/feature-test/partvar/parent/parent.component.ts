import { Component, ViewChild , ElementRef} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
    template: `
        <child1-content (outShow2)="parentShow2($event)"></child1-content>
        <button (click)="child.show1('你好，局部变量！')">局部变量（获取子组件实例）</button>
        <child-content #child></child-content>
        <button (click)="childViewChild.show1('你好，ViewChild')">ViewChild（获取子组件实例）</button>    
    `,
    selector: 'partvar-content'
})
export class ParentComponent {
    str: string = '';
    @ViewChild(ChildComponent)
    childViewChild: ElementRef;   // 这种方式
    // childViewChild: ChildComponent;  // 或者这种方式

    parentShow2(event) {
        this.str = event;
        alert('你好，' + event);
    }
}
