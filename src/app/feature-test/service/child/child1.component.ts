import { Component } from '@angular/core';
import { RandomService } from '../../../../shared/service/random.service';
@Component({
    template: `
        <p>一号子组件</p>
        <p><span>构造函数里的变量：<strong>{{num1|number:'1.3'}}</strong></span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>普通函数里的变量：<strong>{{num2|number:'1.3'}}</strong></span></p>
    `,
    selector: 'service-child1-content'
})
export class Child1Component{
    num1: number;
    num2: number;
    constructor(private _ran: RandomService){
        this.num1 = _ran.num1;
        this.num2 = _ran.num();
    }
}