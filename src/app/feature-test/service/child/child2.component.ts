import { Component } from '@angular/core';
import { RandomService } from '../../../../shared/service/random.service';
@Component({
    template: `
        <p>二号子组件</p>
        <p><span><strong>构造函数里的变量：</strong>{{num1 | number: '1.3'}}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span><strong>普通函数里的变量：</strong>{{num2 | number: '1.3'}}</span></p>
    `,
    selector: 'service-child2-content'
})
export class Child2Component{
    num1: number;
    num2: number;
    constructor(private _ran: RandomService){
        this.num1 = _ran.num1;
        this.num2 = _ran.num();
    }
}